import React, {useState, useRef, useEffect, useCallback} from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import CardShimmer from '../../components/Shimmer/Card';
import Button from '../../components/Button';
import api from '../../services/api';
import CardNews from '../../components/CardNews';

const Contents = () => {
  // News FlatList component ref
  const refFlatList = useRef();
  // Selected news
  const [newsSelected, setNewsSelected] = useState(null);

  // Selected news data
  const [newsData, setNewsData] = useState([]);

  // Loading news data
  const [loadingNewsData, setLoadingNewsData] = useState(true);

  // Pagination
  const [page, setPage] = useState(1);

  const newsNavigation = [
    {
      id: null,
      title: 'Todos',
    },
    {
      id: 74,
      title: 'Energia',
    },
    {
      id: 76,
      title: 'Agronegócio',
    },
    {
      id: 453,
      title: 'Real Estate',
    },
  ];

  useEffect(() => {
    getNews();
  }, []);

  const getNews = category => {
    setLoadingNewsData(true);
    api
      .get(`/posts`, {
        params: {
          _embed: 1,
          categories: category,
          page: page,
        },
      })
      .then(response => {
        setNewsData(response.data);
      })
      .finally(() => {
        setLoadingNewsData(false);
      });
  };

  const handleSelecteNews = useCallback(newsItem => {
    if (refFlatList.current) {
      // Scroll list back to top
      refFlatList.current.scrollToIndex({index: 0});
    }
    setPage(1);
    setNewsSelected(newsItem.id);
    getNews(newsItem.id);
  }, []);

  const handleLoadMoreNews = () => {
    setPage(page + 1);
    api
      .get(`/posts`, {
        params: {
          _embed: 1,
          categories: newsSelected,
          page: page + 1,
        },
      })
      .then(response => {
        setNewsData(oldState => oldState.concat(response.data));
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={styles.buttonsNavigation}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {newsNavigation.map(item => (
          <Button
            key={item.id}
            title={item.title}
            style={styles.buttonGap}
            active={item.id === newsSelected}
            onPress={() => handleSelecteNews(item)}
          />
        ))}
      </ScrollView>
      <View style={{flex: 8}}>
        {loadingNewsData && (
          <View>
            <CardShimmer style={styles.cardGap} />
            <CardShimmer />
          </View>
        )}
        <FlatList
          ref={refFlatList}
          data={newsData}
          renderItem={({item}) => (
            <CardNews
              image={item._embedded['wp:featuredmedia'][0]['source_url']}
              title={item.title.rendered}
              style={styles.cardGap}
            />
          )}
          keyExtractor={item => item.id}
          onEndReached={() => {
            // Load more content | Infinite Scroll
            handleLoadMoreNews();
          }}
          ListFooterComponent={() => <CardShimmer />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    paddingLeft: 5,
    paddingRight: 5,
  },
  buttonsNavigation: {},
  buttonGap: {
    marginRight: 10,
  },
  cardGap: {
    marginBottom: 20,
  },
});

export default Contents;

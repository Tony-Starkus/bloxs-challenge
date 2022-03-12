import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTabBar = ({state, descriptors, navigation}) => {
  /**
   * This function return a custom tabbar to override the react navigation tabbar.
   * On return, it's check if the route is Invests to customize the dollar symbol
   */
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        let iconName;
        let colorIcon = isFocused ? '#FFF' : '#8F8F8F';
        if (route.name === 'Carteiras') {
          iconName = 'wallet-outline';
        } else if (route.name === 'Portfolio') {
          iconName = 'bar-chart-outline';
        } else if (route.name === 'Investir') {
          iconName = 'logo-usd';
        } else if (route.name === 'Conteúdos') {
          iconName = 'document-text-outline';
        } else if (route.name === 'Perfil') {
          iconName = 'person-circle-outline';
        }
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            // Disable opacity on press
            activeOpacity={1}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: 'center',
              backgroundColor: '#1D1E1E',
            }}>
            {route.name === 'Investir' ? (
              <Ionicons
                name={iconName}
                color="#000"
                style={{
                  position: 'absolute',
                  top: -40,
                  borderRadius: 50,
                  padding: 15,
                  backgroundColor: '#FDC70A',
                }}
                size={35}
              />
            ) : (
              <Ionicons name={iconName} color={colorIcon} size={20} />
            )}
            {route.name === 'Investir' ? (
              <View>
                {/* Ghost icon to preserve screen label aligm */}
                <Ionicons
                  name={iconName}
                  color={colorIcon}
                  size={20}
                  style={{opacity: 0}}
                />
                <Text
                  style={{
                    color: isFocused ? '#FFF' : '#8F8F8F',
                  }}>
                  {label}
                </Text>
              </View>
            ) : (
              <Text style={{color: isFocused ? '#FFF' : '#8F8F8F'}}>
                {label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

import React from 'react';
import {View, Text} from 'react-native';

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
      }}>
      <Text style={{color: '#FFF'}}>Profile screen</Text>
    </View>
  );
};

export default Profile;

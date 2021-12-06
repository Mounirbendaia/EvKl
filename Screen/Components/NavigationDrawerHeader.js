/*MOHAMED MOHAMED AHMED 1733657*/
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
         source={require('./menu.png')}
          style={{width: 15, height: 15, marginLeft: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;

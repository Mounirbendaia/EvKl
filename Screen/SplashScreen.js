/*SALEH KAWTHAR SHAMSU ALAM 1725298*/
import React, {useState, useEffect} from 'react';

import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';
const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
        navigation.replace('DrawerNavigationRoutes' ),   5000});
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.header}
        source={require('../Image/Evkl.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  header: {

    textAlign: 'center',
 marginTop: 250,
    },

  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});

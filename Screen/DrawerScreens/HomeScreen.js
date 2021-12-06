
import React from 'react';
import {StyleSheet, View,TouchableOpacity, Text, SafeAreaView} from 'react-native';

const HomeScreen = ({navigation}) => {
  const handleSubmitPress = () => {
         
    navigation.navigate('VenueScreenStack');
  
};
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
 <Text style={styles.header}>reserve available venue 
</Text>
 <Text style={styles.contents}>we are following First comes, first served basis </Text>
 <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>reserve your venue</Text>
            </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  },
  header: {
  fontSize: 50,
  textAlign: 'center',
  margin: 10,
  },
  contents: {
  fontSize: 20,
  textAlign: 'center',
  color: '#333333',
  marginBottom: 5,
  },
  buttonStyle: {
    backgroundColor: '#3d6fac',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
    width:300,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  });
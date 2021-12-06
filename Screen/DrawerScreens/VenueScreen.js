
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button, ScrollView, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {crreateStackNavigation} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';

import venue1 from './venue1';

const Stack = createStackNavigator();
function VenueScreen ({ navigation }) {
  return (
    <SafeAreaView styles={styles.container}>
       <ScrollView styles={styles.scrollView}>
      <Text style={[styles.header]}>Choose Venue</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue1')}>
        <Text style={styles.buttonTextStyle}>Venue 1</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue2')}>
       <Text style={styles.buttonTextStyle}>Venue 2</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue3')}>
       <Text style={styles.buttonTextStyle}>Venue 3</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue4')}>
       <Text style={styles.buttonTextStyle}>Venue 4</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue5')}>
       <Text style={styles.buttonTextStyle}>Venue 5</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue6')}>
       <Text style={styles.buttonTextStyle}>Venue 6</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue7')}>
       <Text style={styles.buttonTextStyle}>Venue 7</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue8')}>
       <Text style={styles.buttonTextStyle}>Venue 8</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue9')}>
       <Text style={styles.buttonTextStyle}>Venue 9</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue10')}>
       <Text style={styles.buttonTextStyle}>Venue 10</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue11')}>
       <Text style={styles.buttonTextStyle}>Venue 11</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue12')}>
       <Text style={styles.buttonTextStyle}>Venue 12</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue13')}>
       <Text style={styles.buttonTextStyle}>Venue 13</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue14')}>
       <Text style={styles.buttonTextStyle}>Venue 14</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue15')}>
       <Text style={styles.buttonTextStyle}>Venue 15</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue16')}>
       <Text style={styles.buttonTextStyle}>Venue 16</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue17')}>
       <Text style={styles.buttonTextStyle}>Venue 17</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue18')}>
       <Text style={styles.buttonTextStyle}>Venue 18</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue19')}>
       <Text style={styles.buttonTextStyle}>Venue 19</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue20')}>
       <Text style={styles.buttonTextStyle}>Venue 20</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue21')}>
       <Text style={styles.buttonTextStyle}>Venue 21</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue22')}>
       <Text style={styles.buttonTextStyle}>Venue 22</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue23')}>
       <Text style={styles.buttonTextStyle}>Venue 23</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue24')}>
       <Text style={styles.buttonTextStyle}>Venue 24</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue25')}>
       <Text style={styles.buttonTextStyle}>Venue 25</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue26')}>
       <Text style={styles.buttonTextStyle}>Venue 26</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue27')}>
       <Text style={styles.buttonTextStyle}>Venue 27</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue28')}>
       <Text style={styles.buttonTextStyle}>Venue 28</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue29')}>
       <Text style={styles.buttonTextStyle}>Venue 29</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() =>navigation.navigate('venue30')}>
       <Text style={styles.buttonTextStyle}>Venue 30</Text>
      </TouchableOpacity>
      <Text></Text>
    </ScrollView>
    </SafeAreaView>
  );
};

export default VenueScreen;

const styles = StyleSheet.create({
  container: {
  flex: 1,
  //justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#c85c32',
  //marginHorizontal: 16,
  paddingHorizontal: 10,
  },
  scrollView: {
    //backgroundColor: 'pink',
    marginHorizontal: 50,
  },
  header: {
  fontSize: 35,
  textAlign: 'center',
  margin: 15,
  fontWeight: "bold",
  color: 'black',
  },
  contents: {
  fontSize: 20,
  textAlign: 'center',
  color: '#333333',
  marginBottom: 5,
  },
  
  button:{
    alignItems: "center",
    backgroundColor: "white",
    padding: 10
  }
  });
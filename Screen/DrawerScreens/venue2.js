import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function venue2() {
 
  const [name1, setName1] = useState (' ');
  const [name2, setName2] = useState (' ');
  const [name3, setName3] = useState (' ');
  const [name4, setName4] = useState (' ');
  const [name5, setName5] = useState (' ');
  const [name6, setName6] = useState (' ');
  const [name7, setName7] = useState (' ');
  const [name8, setName8] = useState (' ');
  const [name9, setName9] = useState (' ');
  const [name10, setName10] = useState (' ');
  const [name11, setName11] = useState (' ');
  const [name12, setName12] = useState (' ');
  const [name13, setName13] = useState (' ');
  const [name14, setName14] = useState (' ');
  const [name15, setName15] = useState (' ');;;
  const STORAGE_KEY16 = '@save_np1';
  const STORAGE_KEY21 = '@save_name16';
  const STORAGE_KEY31 = '@save_name31';
  const STORAGE_KEY41 = '@save_name41';
  const STORAGE_KEY51 = '@save_name51';
  const STORAGE_KEY61 = '@save_name61';
  const STORAGE_KEY71 = '@save_name71';
  const STORAGE_KEY81 = '@save_name81';
  const STORAGE_KEY91 = '@save_name91';
  const STORAGE_KEY101 = '@save_name101';
  const STORAGE_KEY111 = '@save_name111';
  const STORAGE_KEY121 = '@save_name121';
  const STORAGE_KEY131 = '@save_name131';
  const STORAGE_KEY141 = '@save_name141';
  const STORAGE_KEY151 = '@save_name151';
  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY16, name1)
      await AsyncStorage.setItem(STORAGE_KEY21, name2)
      await AsyncStorage.setItem(STORAGE_KEY31, name3)
      await AsyncStorage.setItem(STORAGE_KEY41, name4)
      await AsyncStorage.setItem(STORAGE_KEY51, name5)
      await AsyncStorage.setItem(STORAGE_KEY61, name6)
      await AsyncStorage.setItem(STORAGE_KEY71, name7)
      await AsyncStorage.setItem(STORAGE_KEY81, name8)
      await AsyncStorage.setItem(STORAGE_KEY91, name9)
      await AsyncStorage.setItem(STORAGE_KEY101, name10)
      await AsyncStorage.setItem(STORAGE_KEY111, name11)
      await AsyncStorage.setItem(STORAGE_KEY121, name12)
      await AsyncStorage.setItem(STORAGE_KEY131, name13)
      await AsyncStorage.setItem(STORAGE_KEY141, name14)
      await AsyncStorage.setItem(STORAGE_KEY151, name15)
      alert('Venue Successfully Reserved')
    } catch (e) {
    }
  }
  const readData = async () => {
    try {
      const userName = await AsyncStorage.getItem(STORAGE_KEY16)
      const userName2 = await AsyncStorage.getItem(STORAGE_KEY21)
      const userName3 = await AsyncStorage.getItem(STORAGE_KEY31)
      const userName4 = await AsyncStorage.getItem(STORAGE_KEY41)
      const userName5 = await AsyncStorage.getItem(STORAGE_KEY51)
      const userName6 = await AsyncStorage.getItem(STORAGE_KEY61)
      const userName7 = await AsyncStorage.getItem(STORAGE_KEY71)
      const userName8 = await AsyncStorage.getItem(STORAGE_KEY81)
      const userName9 = await AsyncStorage.getItem(STORAGE_KEY91)
      const userName10 = await AsyncStorage.getItem(STORAGE_KEY101)
      const userName11 = await AsyncStorage.getItem(STORAGE_KEY111)
      const userName12 = await AsyncStorage.getItem(STORAGE_KEY121)
      const userName13 = await AsyncStorage.getItem(STORAGE_KEY131)
      const userName14 = await AsyncStorage.getItem(STORAGE_KEY141)
      const userName15 = await AsyncStorage.getItem(STORAGE_KEY151)
      if (userName !== null) {
        setName1(userName)
      }
      if (userName2 !== null) {
        setName2(userName2)
      }
      if (userName3 !== null) {
        setName3(userName3)
      }
      if (userName4 !== null) {
        setName4(userName4)
      }
      if (userName5 !== null) {
        setName5(userName5)
      }
      if (userName6 !== null) {
        setName6(userName6)
      }
      if (userName7 !== null) {
        setName7(userName7)
      }
      if (userName8 !== null) {
        setName8(userName8)
      }
      if (userName9 !== null) {
        setName9(userName9)
      }
      if (userName10 !== null) {
        setName10(userName10)
      }
      if (userName11 !== null) {
        setName11(userName11)
      }
      if (userName12 !== null) {
        setName12(userName12)
      }
      if (userName13 !== null) {
        setName13(userName13)
      }
      if (userName14 !== null) {
        setName14(userName14)
      }
      if (userName15 !== null) {
        setName15(userName15)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }
  useEffect(() => {
    readData()
  }, [])

const onSubmitEditing = () => {
  if (!name1) return

  saveData(name1)
  setName1(name1)
  setName2(name2)
  setName3(name3)
  setName4(name4)
  setName5(name5)
  setName6(name6)
  setName7(name7)
  setName8(name8)
  setName9(name9)
  setName10(name10)
  setName11(name11)
  setName12(name12)
  setName13(name13)
  setName14(name14)
  setName15(name15)
}
 return (
 <View style={styles.container}>
   <ScrollView style={styles.scrollView}>
 <Text style={styles.welcome}>Welcome to Venue 2</Text>
 <Text style={styles.contents2}> please enter your name to reserve the Venue.</Text>
 <Text style={styles.contents}>TIME: 08.00a.m - 09.00a.m    Reserved By:
 <Text style={styles.contents}>{name1}</Text></Text>
  <TextInput style={styles.input}
              value=   {name1}    
              onChangeText= {(val) => setName1(val)}
              onSubmitEditing={onSubmitEditing}
              
  />

  <Text style={styles.contents}>TIME: 09.00a.m - 10.00a.m    Reserved By:
 <Text style={styles.contents}>     {name2}</Text></Text>
  <TextInput style={styles.input}
  value=   {name2}
            onChangeText= {(val) => setName2(val)}
            onSubmitEditing={onSubmitEditing}
  />
  <Text style={styles.contents}>TIME: 10.00a.m - 11.00a.m    Reserved By:
 <Text style={styles.contents}>     {name3}</Text></Text>
  <TextInput style={styles.input}
              value=   {name3}
              onSubmitEditing={onSubmitEditing}
            onChangeText= {(val) => setName3(val)}
  />
  <Text style={styles.contents}>TIME: 11.00a.m - 12.00p.m    Reserved By:
 <Text style={styles.contents}>     {name4}</Text></Text>
  <TextInput style={styles.input}
              value=   {name4}
              onSubmitEditing={onSubmitEditing}
            onChangeText= {(val) => setName4(val)}
  />
  <Text style={styles.contents}>TIME: 12.00p.m - 01.00p.m    Reserved By:
 <Text style={styles.contents}>     {name5}</Text></Text>
  <TextInput style={styles.input}
              value=   {name5}
              onSubmitEditing={onSubmitEditing}
            onChangeText= {(val) => setName5(val)}
  />
  <Text style={styles.contents}>TIME: 01.00p.m - 02.00p.m    Reserved By:
 <Text style={styles.contents}>     {name6}</Text></Text>
  <TextInput style={styles.input}
              value=   {name6}
              onSubmitEditing={onSubmitEditing}
            onChangeText= {(val) => setName6(val)}
  />
  <Text style={styles.contents}>TIME: 02.00p.m - 03.00p.m    Reserved By:
 <Text style={styles.contents}>     {name7}</Text></Text>
  <TextInput style={styles.input}
              value=   {name7}
              onSubmitEditing={onSubmitEditing}
            onChangeText= {(val) => setName7(val)}
  />
  <Text style={styles.contents}>TIME: 03.00p.m - 04.00p.m    Reserved By:
 <Text style={styles.contents}>     {name8}</Text></Text>
  <TextInput style={styles.input}
              value=   {name8}
              onSubmitEditing={onSubmitEditing}
            onChangeText= {(val) => setName8(val)}
  />
  <Text style={styles.contents}>TIME: 04.00p.m - 05.00p.m    Reserved By:
 <Text style={styles.contents}>     {name9}</Text></Text>
  <TextInput style={styles.input}
              value=   {name9}
              onSubmitEditing={onSubmitEditing}
            onChangeText= {(val) => setName9(val)}
  />
  <Text style={styles.contents}>TIME: 05.00a.m - 06.00a.m    Reserved By:
 <Text style={styles.contents}>     {name10}</Text></Text>
  <TextInput style={styles.input}
              value=   {name10}
              onSubmitEditing={onSubmitEditing}
            onChangeText= {(val) => setName10(val)}
  />
  <Text style={styles.contents}>TIME: 06.00p.m - 07.00p.m    Reserved By:
 <Text style={styles.contents}>     {name11}</Text></Text>
  <TextInput style={styles.input}
              value=   {name11}
              onSubmitEditing={onSubmitEditing}
            onChangeText= {(val) => setName11(val)}
  />
  <Text style={styles.contents}>TIME: 07.00p.m - 08.00p.m    Reserved By:
 <Text style={styles.contents}>     {name12}</Text></Text>
  <TextInput style={styles.input}
              value=   {name12}
              onSubmitEditing={onSubmitEditing}
            onChangeText= {(val) => setName12(val)}
  />
  <Text style={styles.contents}>TIME: 08.00p.m - 09.00p.m    Reserved By:
 <Text style={styles.contents}>     {name13}</Text></Text>
  <TextInput style={styles.input}
              value=   {name13}
              onSubmitEditing={onSubmitEditing}
            onChangeText= {(val) => setName13(val)}
  />
 
  <Text style={styles.contents}>TIME: 09.00p.m - 10.00p.m    Reserved By:
 <Text style={styles.contents}>     {name14}</Text></Text>
  <TextInput style={styles.input}
              value=   {name14}
              onSubmitEditing={onSubmitEditing}
            onChangeText= {(val) => setName14(val)}
  /><Text style={styles.contents}>TIME: 10.00p.m - 11.00p.m    Reserved By:
  <Text style={styles.contents}>     {name15}</Text></Text>
   <TextInput style={styles.input}
               value=   {name15}
               onSubmitEditing={onSubmitEditing}
             onChangeText= {(val) => setName15(val)}
   />
  </ScrollView>
 </View>
 
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
 justifyContent: 'flex-start',
 alignItems: 'center',
 backgroundColor: 'white',



 },
 header: {
   marginTop: 40,
 fontSize: 60,
 textAlign: 'center',
 margin: 10,
 },
 contents2 : {
  //textAlign: 'right',
  color: 'black',
  margin: 5,
   padding: 10,
  fontWeight: 'bold',
  
  },
 contents: {
 //textAlign: 'right',
 color: '#333333',
 margin: 5,
 fontWeight: 'bold',
 padding: 10,
 backgroundColor: '#e4e97b',
 borderBottomColor: 'black',
 borderBottomWidth: 2,
 },
 input: {
  height: 35,
  margin: 5,
  borderWidth: 1,
  width: 200,
},
scrollView: {
  //backgroundColor: 'pink',
  marginHorizontal: 20,
},
welcome: {
  fontSize: 40,
  fontWeight: 'bold',
  color: 'black',
}
 });
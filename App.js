import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './Screen/SplashScreen';
import HomeScreen from './Screen/HomeScreen';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';
import venue1 from './Screen/DrawerScreens/venue1';
import venue2 from './Screen/DrawerScreens/venue2'; 
import venue3 from './Screen/DrawerScreens/venue3'; 
import venue4 from './Screen/DrawerScreens/venue4'; 
import venue5 from './Screen/DrawerScreens/venue5';
import venue6 from './Screen/DrawerScreens/venue6';
import venue7 from './Screen/DrawerScreens/venue7';
import venue8 from './Screen/DrawerScreens/venue8';
import venue9 from './Screen/DrawerScreens/venue9';
import venue10 from './Screen/DrawerScreens/venue10';
import venue11 from './Screen/DrawerScreens/venue11';
import venue12 from './Screen/DrawerScreens/venue12';
import venue13 from './Screen/DrawerScreens/venue13';
import venue14 from './Screen/DrawerScreens/venue14';
import venue15 from './Screen/DrawerScreens/venue15';
import venue16 from './Screen/DrawerScreens/venue16';
import venue17 from './Screen/DrawerScreens/venue17';
import venue18 from './Screen/DrawerScreens/venue18';
import venue19 from './Screen/DrawerScreens/venue19';
import venue20 from './Screen/DrawerScreens/venue20';
import venue21 from './Screen/DrawerScreens/venue21';
import venue22 from './Screen/DrawerScreens/venue22';
import venue23 from './Screen/DrawerScreens/venue23';
import venue24 from './Screen/DrawerScreens/venue24';
import venue25 from './Screen/DrawerScreens/venue25';
import venue26 from './Screen/DrawerScreens/venue26';
import venue27 from './Screen/DrawerScreens/venue27';
import venue28 from './Screen/DrawerScreens/venue28';
import venue29 from './Screen/DrawerScreens/venue29';
import venue30 from './Screen/DrawerScreens/venue30';
const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
     
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="venue1"
          component={venue1}
          options={{title: 'venue1'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue2"
          component={venue2}
          options={{title: 'venue2'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue3"
          component={venue3}
          options={{title: 'venue3'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue4"
          component={venue4}
          options={{title: 'venue4'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue5"
          component={venue5}
          options={{title: 'venue5'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue6"
          component={venue6}
          options={{title: 'venue6'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue7"
          component={venue7}
          options={{title: 'venue7'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue8"
          component={venue8}
          options={{title: 'venue8'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue9"
          component={venue9}
          options={{title: 'venue9'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue10"
          component={venue10}
          options={{title: 'venue10'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue11"
          component={venue11}
          options={{title: 'venue11'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue12"
          component={venue12}
          options={{title: 'venue12'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue13"
          component={venue13}
          options={{title: 'venue13'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue14"
          component={venue14}
          options={{title: 'venue14'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue15"
          component={venue15}
          options={{title: 'venue15'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue16"
          component={venue16}
          options={{title: 'venue16'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue17"
          component={venue17}
          options={{title: 'venue17'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue18"
          component={venue18}
          options={{title: 'venue18'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue19"
          component={venue19}
          options={{title: 'venue19'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue20"
          component={venue20}
          options={{title: 'venue20'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue21"
          component={venue21}
          options={{title: 'venue21'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue22"
          component={venue22}
          options={{title: 'venue22'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue23"
          component={venue23}
          options={{title: 'venue23'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue24"
          component={venue24}
          options={{title: 'venue24'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue25"
          component={venue25}
          options={{title: 'venue25'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue26"
          component={venue26}
          options={{title: 'venue26'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue27"
          component={venue27}
          options={{title: 'venue27'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue28"
          component={venue28}
          options={{title: 'venue28'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue29"
          component={venue29}
          options={{title: 'venue29'}}>

        </Stack.Screen>
        <Stack.Screen 
          name="venue30"
          component={venue30}
          options={{title: 'venue30'}}>

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
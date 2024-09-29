import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screen/Splash.js'
import Intro from './src/screen/Intro.js'
import Drawarnav from './src/screen/Drawarnav.js'
import Choose_page from './src/screen/Choose_page.js'

import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    //  <Choose_page />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash}
          options={{ headerShown: false }} />
        <Stack.Screen name="Intro" component={Intro}
          options={{ headerShown: false }} />
        <Stack.Screen name="Drawarnav" component={Drawarnav}
          options={{ headerShown: false }} />
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
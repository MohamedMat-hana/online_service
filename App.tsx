import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screen/Splash.js'
import Intro from './src/screen/Intro.js'
import NavigationPage from './src/screen/NavigationPage.js'
 
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
        <Stack.Screen name="NavigationPage" component={NavigationPage}
          options={{ headerShown: false }} />
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
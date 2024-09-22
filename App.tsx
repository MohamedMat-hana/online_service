import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screen/Splash.js'
import Intro from './src/screen/Intro.js'
import Drawarnav from './src/screen/Drawarnav.js'
import Signup from './src/screen/Ath/Signup.js'
import Login from './src/screen/Ath/Login.js'
import { Image } from 'react-native'
import AdminPage from './src/screen/AdminPage.js'
import Bigmafro from './src/screen/Bigmafro.js'
import AdminPageSmallMafro from './src/screen/AdminPageSmallMafro.js'
import AdminPageSmallFoat from './src/screen/AdminPageSmallFoat.js'
import AdminPageBigFoat from './src/screen/AdminPageBigFoat.js'
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
        <Stack.Screen name="Signup" component={Signup}
          options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login}
          options={{ headerShown: false }} />
          <Stack.Screen name="AdminPage" component={AdminPage}
          options={{ headerShown: false }} />
           <Stack.Screen name="AdminPageSmallMafro" component={AdminPageSmallMafro}
          options={{ headerShown: false }} />
            <Stack.Screen name="AdminPageSmallFoat" component={AdminPageSmallFoat}
          options={{ headerShown: false }} />
           <Stack.Screen name="AdminPageBigFoat" component={AdminPageBigFoat}
          options={{ headerShown: false }} />
          {/* AdminPageBigFoat */}
        <Stack.Screen name="Drawarnav" component={Drawarnav}
          options={{ headerShown: false }} />
 <Stack.Screen name="Choose_page" component={Choose_page}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
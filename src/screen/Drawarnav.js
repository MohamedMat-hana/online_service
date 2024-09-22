import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Second from './Second';
import Contactus from './Contactus';
import Secondnav from './Secondnav';
import { COLORS,RADIUS,MARGIN,FONTS } from '../customs/Constant';
// import { WelcomeMasssage } from '../../config/helperFunction';

const Tab = createMaterialBottomTabNavigator();

const Drawarnav = () => {
  return (
    <Tab.Navigator
      activeColor={COLORS.main}
      inactiveColor="#7D7C7C"
      barStyle={{
        position: 'absolute',
        overflow: 'hidden',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
      }}
    >
      <Tab.Screen
        name="Secondnav"
        component={Secondnav}
        options={{
           tabBarLabel: 'المفروشات',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bed-king" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Second"
        component={Second}
        options={{
          tabBarLabel: 'فوط',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="dolly-flatbed" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Contactus"
        component={Contactus}
        options={{
          tabBarLabel: 'تواصل معنا',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone-classic" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Drawarnav;

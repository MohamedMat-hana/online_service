import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Services from './Services';
import Contactus from './Contactus';
import Home from './Home';
import {COLORS, RADIUS, MARGIN, FONTS} from '../customs/Constant';

const Tab = createMaterialBottomTabNavigator();

const NavigationPage = () => {
  return (
    <Tab.Navigator
      activeColor={COLORS.main}
      inactiveColor="#7D7C7C"
      barStyle={{
        position: 'absolute',
        overflow: 'hidden',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'من نحن',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: 'خدماتنا',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="dolly-flatbed" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Contactus"
        component={Contactus}
        options={{
          tabBarLabel: 'تواصل معنا',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="phone-classic"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationPage;

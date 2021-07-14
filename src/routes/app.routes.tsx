import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from '../global/styles/theme';
import { Feather } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { MyEvents } from '../screens/MyEvents';
import { Details } from '../screens/Details';
import { Payment } from '../screens/Payment';
import { EventProps } from '../components/Event';

const Tab  = createBottomTabNavigator();

export function Tabs(){    
  const { heading, secondary100, secondary30 } = theme.colors;
  
  return(
      <Tab.Navigator
        tabBarOptions={{
          style: { backgroundColor: heading, borderTopWidth: 1,borderTopColor: theme.colors.secondary100 , height: 50 },
          activeTintColor: secondary100,
          inactiveTintColor: secondary30,
        }}      
      >
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                size={30}
                color={focused ? secondary100 : secondary30}
              />
            ),
          }} 
        />
        <Tab.Screen 
          name="MyEvents" 
          component={MyEvents} 
          options={{
            tabBarLabel: 'Meus Eventos',
            tabBarIcon: ({ focused }) => (
              <Feather
                name="shopping-bag"
                size={30}
                color={focused ? secondary100 : secondary30}
              />
            ),
          }}/>
      </Tab.Navigator>
  )
}


const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return(
        <Navigator
          headerMode="none"
          screenOptions={{
              cardStyle: {
                backgroundColor: theme.colors.secondary100 
              }
          }}
        >           

          <Screen
            name="SignIn"
            component={SignIn}
          />

          <Screen
            name="Home"
            component={Tabs}          
          />

          <Screen
            name="Details"
            component={Details}                                
          />

          <Screen
            name="Payment"
            component={Payment}                                
          />
            
        </Navigator>
    )
}



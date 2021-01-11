import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Home from '../src/Home';
import AddUser from '../src/AddUser';
import Search from '../src/Search';
import ViewUser from '../src/ViewUser';
import UpdateUser from '../src/UpdateUser';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
 export default function Tabavi(){
    return(
        <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={StackNav}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AddUser"
        component={AddUser}
        options={{
          tabBarLabel: 'Add',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-add" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'search',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="StackNav"
        component={StackNav}
        tabBarVisible='false'
        options={{
          tabBarVisible:false,
          tabBarVisible:false
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
    );
      }

function StackNav(){
  return(
  <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddUser" component={AddUser}/>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="ViewUser" component={ViewUser} />
        <Stack.Screen name="UpdateUser" component={UpdateUser} />
      </Stack.Navigator>
  );

 }
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default class App extends Component{
  render(){

    createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="Home" component = { feed } />
      <Stack.Screen name="Top Tabs" children = { CreateTopTab } />
      <Stack.Screen name="Bottom Tabs" children = { CreateBottomTab } />
    </Stack.Navigator>

    return(
      <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={createHomeStack} />
        <Drawer.Screen name="Bottom Tabs" component={CreateBottomTab}/>
        <Drawer.Screen name="Favorites" component={Screen1}/>
        <Drawer.Screen name="Settings" component={Screen1}/>
      </Drawer.Navigator>
    </NavigationContainer>
    )
  }
}
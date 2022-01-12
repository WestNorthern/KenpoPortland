import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import KnowledgeNavigator from "./KnowledgeNavigator";
import TrainingNavigator from "./TrainingNavigator";

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Knowledge" 
      component={KnowledgeNavigator} 
      options={{ 
        tabBarIcon: 
          ({ color, size }) => < MaterialCommunityIcons name="home" color={color} size={size} /> 
      }} 
    />
    {/* <Tab.Screen 
      name="Account" 
      component={AccountNavigator} 
      options={{
        tabBarIcon: 
          ({ color, size }) => < MaterialCommunityIcons name="account" color={color} size={size} /> 
      }} 
    /> */}
    <Tab.Screen 
      name="Training" 
      component={TrainingNavigator} 
      options={{
        tabBarIcon: 
          ({ color, size }) => < MaterialCommunityIcons name="account" color={color} size={size} /> 
      }} 
    />
  </Tab.Navigator>
);


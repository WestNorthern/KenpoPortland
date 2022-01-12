import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

export default TechniqueDetailsNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="TechniqueVideo" 
      component={TechniqueVideoScreen} 
      options={{ 
        tabBarIcon: 
          ({ color, size }) => < MaterialCommunityIcons name="video" color={color} size={size} /> 
      }} 
    />
    <Tab.Screen 
      name="TechniqueMoreInfo" 
      component={TechniqueMoreInfoScreen} 
      options={{
        tabBarIcon: 
          ({ color, size }) => < MaterialCommunityIcons name="plus-circle" color={color} size={size} /> 
      }} 
    />
  </Tab.Navigator>
);
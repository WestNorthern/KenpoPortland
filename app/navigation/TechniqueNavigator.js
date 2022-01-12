import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TechniqueDetailsScreen from "../screens/TechniqueDetailsScreen";
import TechniqueListScreen from "../screens/TechniqueListScreen";

const Stack = createStackNavigator();

export default TechniqueNavigator = () => (
  <Stack.Navigator screenOptions={{ presentation: "card", headerTitle: "" }}>
    <Stack.Screen name="TechniqueList" component={TechniqueListScreen} options={{ headerShown: false}} />
    <Stack.Screen name="TechniqueDetails" component={TechniqueDetailsScreen}/>
  </Stack.Navigator>
);
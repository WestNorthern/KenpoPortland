import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import KataDetailsScreen from "../screens/KataDetailsScreen";
import KataListScreen from "../screens/KataListScreen";

const Stack = createStackNavigator();

export default KataNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true, presentation: "card", headerTitle: "" }}>
    <Stack.Screen name="Kata" component={KataListScreen} />
    <Stack.Screen name="KataDetails" component={KataDetailsScreen}/>
  </Stack.Navigator>
);
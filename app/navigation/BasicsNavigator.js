import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BasicsDetailsScreen from "../screens/BasicsDetailsScreen";
import BasicsListScreen from "../screens/BasicsListScreen";

const Stack = createStackNavigator();

export default BasicsNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true, presentation: "card", headerTitle: "" }}>
    <Stack.Screen name="BasicsList" component={BasicsListScreen} />
    <Stack.Screen name="BasicsDetails" component={BasicsDetailsScreen}/>
  </Stack.Navigator>
);
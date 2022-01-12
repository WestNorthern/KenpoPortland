import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import TechniqueNavigator from "./TechniqueNavigator";
import BasicsNavigator from "./BasicsNavigator";
import KnowledgeMenuScreen from "../screens/KnowledgeMenuScreen";

const Stack = createStackNavigator();
const KnowledgeNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="KnowledgeMenu" component={KnowledgeMenuScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Techniques" component={TechniqueNavigator} />
    <Stack.Screen name="Basics" component={BasicsNavigator} />
  </Stack.Navigator>
);

export default KnowledgeNavigator;
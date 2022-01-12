import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TrainingMenuScreen from "../screens/TrainingMenuScreen";

const Stack = createStackNavigator();

const TrainingNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="TrainingMenu" component={TrainingMenuScreen} options={{ headerShown: false }}/>
  </Stack.Navigator>
);

export default TrainingNavigator;
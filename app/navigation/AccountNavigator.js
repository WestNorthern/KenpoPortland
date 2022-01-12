import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";


const Stack = createStackNavigator();

export default AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Accounts" component={AccountScreen} options={{ headerTitle: "My Account", headerShown: false }} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);
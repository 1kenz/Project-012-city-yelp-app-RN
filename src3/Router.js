import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { CityList, RestaurantDetail, RestaurantList } from "./pages";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="City" component={CityList} />
        <Stack.Screen name="Restaurant" component={RestaurantList} />
        <Stack.Screen name="Detail" component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

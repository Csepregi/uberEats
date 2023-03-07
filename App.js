import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Basket from "./src/screens/Basket";
import DishDetailsScreen from "./src/screens/DishDetailScreen";
import HomeScreen from "./src/screens/HomeScreen";
import OrderDetails from "./src/screens/OrderDetails";
import OrderScreen from "./src/screens/OrdersScreen";
import RestaurantDetailsPage from "./src/screens/RestaurantDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      {/* <RestaurantDetailsPage /> */}
      {/* <HomeScreen /> */}
      {/* <DishDetailsScreen /> */}
      {/* <Basket /> */}
      {/* <OrderScreen /> */}
      {/* <OrderDetails /> */}
      <RootNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

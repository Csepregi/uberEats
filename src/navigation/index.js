import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Basket from "../screens/Basket";
import DishDetailsScreen from "../screens/DishDetailScreen";
import HomeScreen from "../screens/HomeScreen";
import OrderDetails from "../screens/OrderDetails";
import OrdersScreen from "../screens/OrdersScreen";
import RestaurantDetailsPage from "../screens/RestaurantDetailsScreen";
import Fondation from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Fondation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen name="Restaurant" component={RestaurantDetailsPage} />
      <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
      <HomeStack.Screen name="Basket" component={Basket} />
    </HomeStack.Navigator>
  );
};

const Ordertack = createNativeStackNavigator();

const OrderStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <Ordertack.Screen name="Orders" component={OrdersScreen} />
      <Ordertack.Screen name="Order" component={OrderDetails} />
    </HomeStack.Navigator>
  );
};
export default RootNavigator;

import { View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default RestaurantDetailsPage;

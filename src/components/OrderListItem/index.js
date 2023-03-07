import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("Order", { id: order.id })}
      style={styles.container}
    >
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{ width: 75, height: 75, marginRight: 10 }}
      ></Image>
      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={{ marginVertical: 5 }}>3 items &#8226; $38</Text>
        <Text>3 days ago &#8226; {order.status}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
  },
});

export default OrderListItem;

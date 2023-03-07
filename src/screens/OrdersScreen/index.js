import { StyleSheet, Text, View, FlatList } from "react-native";
import OrderListItem from "../../components/OrderListItem";
import orders from "../../../assets/data/orders.json";

export default function OrderScreen() {
  return (
    <View style={styles.page}>
      <Text style={{ fontWeight: 700, fontSize: 25 }}>Your Orders</Text>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    width: "100%",
    flex: 1,
    paddingTop: 50,
  },
});

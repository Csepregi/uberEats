import { View, Text, StyleSheet } from "react-native";

const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{ fontWeight: "600" }}>{basketDish.name}</Text>
      <Text style={{ marginLeft: "auto" }}>{basketDish.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginVertical: 15,
    marginHorizontal: 10,
  },

  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 5,
    borderRadius: 3,
  },
});

export default BasketDishItem;

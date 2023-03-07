import { StyleSheet } from "react-native";

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  iconContainer: {
    position: "absolute",
    left: 10,
    top: 40,
  },
  container: {
    margin: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#525252",
  },
  menuTitle: {
    marginTop: 20,
    marginTop: 10,
    fontSize: 18,
    letterSpacing: 0.6,
  },
});

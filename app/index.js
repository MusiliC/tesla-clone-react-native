import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import menuOptions from "../assets/menuOptions";
import MenuOption from "../components/MenuOption";
import Controls from "../components/Controls";
import car from "../assets/images/car.png";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle" size={30} color="gray" />
      </View>

      {/* image */}
      <Image source={car} style={styles.image} resizeMode="contain" />

      {/* controls and menu items */}

      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <MenuOption item={item} />}
        ListHeaderComponent={Controls}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161818",
    padding: 24,
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#eee",
    marginBottom: 8,
  },
  subtitle: {
    color: "gray",
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 300,
  },
});

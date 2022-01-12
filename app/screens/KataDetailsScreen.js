import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import { beltToColor } from "../helpers";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

function KataDetailsScreen({ route }) {
  const technique = route.params;
  return (
    <View>
      <Image style={styles.image} source={technique.imageUrl} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{technique.technique}</Text>
        <Text style={styles.belt}>Belt: {technique.belt}</Text>
        <Text style={styles.attack}>Attack: {technique.attack}</Text>
        <Text style={styles.description}>Description: {technique.description}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Related Techniques"
            subTitle="TODO: Add related techniques here"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  attack: {
    fontSize: 12,
    color: colors.danger,
    fontWeight: "500",
  },
  belt: {
    fontSize: 12,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default KataDetailsScreen;
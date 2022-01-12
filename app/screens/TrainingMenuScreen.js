import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import { beltToColor } from "../helpers";
import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import routes from "../navigation/routes";


function TrainingMenuScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/construction.png")} />
          <Text style={styles.tagline}>Under Construction</Text>
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  container: {
    marginVertical: 20,
  },
  logo: {
    width: 125,
    height: 162,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default TrainingMenuScreen;
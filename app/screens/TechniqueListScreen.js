import React, { useState } from "react";
import { FlatList, StyleSheet, View, TouchableWithoutFeedback } from "react-native";

import { beltToColor } from "../helpers";
import colors from "../config/colors";
import { ListItemSeparator } from "../components/lists";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import TechniqueListItem from "../components/TechniqueListItem";
import Icon from "../components/Icon";
import TechniqueIcon from "../components/TechniqueIcon";

const all_techniques = require('../techniques.json');


function TechniqueListScreen({ navigation }) {
  const [techniques, setTechniques] = useState(all_techniques);

  const filterTechniques = (belt) => {
    // Delete the message from messages
    setTechniques(all_techniques.filter((m) => m.belt == belt));
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.colorBarContainer}>
        <TouchableWithoutFeedback onPress={() => setTechniques(all_techniques)}><View style={[styles.beltColorButtonWhite, styles.colorCircle]}></View></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => filterTechniques("Yellow")}><View style={[styles.beltColorButtonYellow, styles.colorCircle]}></View></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => filterTechniques("Orange")}><View style={[styles.beltColorButtonOrange, styles.colorCircle]}></View></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => filterTechniques("Purple")}><View style={[styles.beltColorButtonPurple, styles.colorCircle]}></View></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => filterTechniques("Blue")}><View style={[styles.beltColorButtonBlue, styles.colorCircle]}></View></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => filterTechniques("Green")}><View style={[styles.beltColorButtonGreen, styles.colorCircle]}></View></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => filterTechniques("3rd Brown")}><View style={[styles.beltColorButtonBrown3, styles.colorCircle]}></View></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => filterTechniques("2nd Brown")}><View style={[styles.beltColorButtonBrown2, styles.colorCircle]}></View></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => filterTechniques("1st Brown")}><View style={[styles.beltColorButtonBrown1, styles.colorCircle]}></View></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => filterTechniques("Black")}><View style={[styles.beltColorButtonBlack, styles.colorCircle]}></View></TouchableWithoutFeedback>
      </View>
      <FlatList
        data={techniques}
        keyExtractor={(technique) => technique.techniqueNumber.toString()}
        renderItem={({ item }) => (
          <TechniqueListItem
            IconComponent={<TechniqueIcon name="circle" iconColor="black" backgroundColor={beltToColor(item.belt)}  />}
            title={item.technique}
            attack={item.attack}
            techniqueNumber={item.techniqueNumber}
            color={item.belt}
            onPress={ () => navigation.navigate(routes.TECHNIQUE_DETAILS, item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  colorBarContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
  },
  colorCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  beltColorButtonWhite: {
    borderWidth: 2,
    borderColor: colors.black,
    backgroundColor: "ghostwhite",
  },
  beltColorButtonYellow: {
    backgroundColor: colors.yellowBelt,
  },
  beltColorButtonOrange: {
    backgroundColor: colors.orangeBelt,
  },
  beltColorButtonPurple: {
    backgroundColor: colors.purpleBelt,
  },
  beltColorButtonBlue: {
    backgroundColor: colors.blueBelt,
  },
  beltColorButtonGreen: {
    backgroundColor: colors.greenBelt,
  },
  beltColorButtonBrown1: {
    backgroundColor: colors.brownOneBelt,
  },
  beltColorButtonBrown2: {
    backgroundColor: colors.brownTwoBelt,
  },
  beltColorButtonBrown3: {
    backgroundColor: colors.brownThreeBelt,
  },
  beltColorButtonBlack: {
    backgroundColor: colors.black,
  },
});

export default TechniqueListScreen;
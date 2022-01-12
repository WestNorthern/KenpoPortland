import React from "react";
import { FlatList, StyleSheet, ScrollView } from "react-native";

import { beltToColor } from "../helpers";
import colors from "../config/colors";
import { ListItemSeparator } from "../components/lists";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import TechniqueListItem from "../components/TechniqueListItem";
import Icon from "../components/Icon";
import TechniqueIcon from "../components/TechniqueIcon";

// TODO: Turn this into Kata List file
const technique_list = require('../technique_info.json');

function KataListScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={technique_list}
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
});

export default KataListScreen;
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import { beltToColor } from "../helpers";
import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import routes from "../navigation/routes";


function KnowledgeMenuScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Basics"
          subTitle="The building blocks of the art."
          IconComponent={<Icon name="skull" backgroundColor="darkgray" />}
          onPress={ () => navigation.navigate(routes.BASICS_NAVIGATOR)}
        />
        <ListItem
          title="Belt Techniques"
          subTitle="Compositions of basic technique chains tailored to scenarios."
          IconComponent={<Icon name="atom" backgroundColor="darkgray" />}
          onPress={ () => navigation.navigate(routes.TECHNIQUE_NAVIGATOR)}
        />
        <ListItem
          title="Forms / Kata"
          subTitle="Series of techniques grouped together."
          IconComponent={<Icon name="abjad-arabic" backgroundColor="darkgray" />}
          onPress={ () => navigation.navigate(routes.TECHNIQUE_NAVIGATOR)}
        />
        <ListItem
          title="Drills"
          subTitle="Got to have tricks."
          IconComponent={<Icon name="skull" backgroundColor="darkgray" />}
          onPress={ () => navigation.navigate(routes.TECHNIQUE_NAVIGATOR)}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default KnowledgeMenuScreen;
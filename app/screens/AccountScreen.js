import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import { beltToColor } from "../helpers";
import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import routes from "../navigation/routes";


const userInfo = {
  name: "Ryan Richardson",
  belt_rank: "Yellow",
  practice_points: 100,
  badges: ["initiated", "bad at typing"],

}

const menuItems = [
  {
    title: "Belt Rank",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: beltToColor(userInfo.belt_rank),
    },
    targetScreen: routes.USER_LISTINGS
  },
  {
    title: "My Messages",
    icon: {
      name: "lightning-bolt",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Ryan Richardson"
          subTitle="ryan@hey.com"
          image={require("../assets/ryan_profile.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={ () => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
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

export default AccountScreen;

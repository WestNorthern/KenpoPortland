import React from "react";
import { Image, View } from "react-native";

function TechniqueIcon({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Image size={.1} source={require("../assets/universal_small.svg")} />
    </View>
  );
}

export default TechniqueIcon;

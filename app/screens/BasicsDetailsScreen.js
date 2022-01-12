import React from "react";
import { Button, View, Image, ScrollView, StyleSheet } from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';

import colors from "../config/colors";
import { beltToColor } from "../helpers";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

const formattedDescription = (desc) => {
  if (desc == null) {
    return "You gotta write a description, Ryan!"
  }

  let bulleted_description = desc.split(/\r?\n/).map( (x) => "\u2022" + " " + x + "\n").join();
  return bulleted_description;
}

function BasicsDetailsScreen({ route }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const technique = route.params;
  return (
    <ScrollView>
      {technique.video && (
        <View style={styles.videoContainer}>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', 
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
          {/* <View style={styles.buttons}>
            <Button
              title={status.isPlaying ? 'Pause' : 'Play'}
              onPress={() =>
                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
              }
            />
          </View> */}
        </View>
      )}

      {!technique.video && (
        <Image source={require('../assets/couch.jpg')} style={styles.image} />
      )}


      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{technique.name}</Text>
        <Text style={styles.belt}>Belt: {technique.belt}</Text>
        <Text>
          {formattedDescription(technique.description)}
          {/* {technique.description} */}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 10,
  },
  image: {
    height: "auto",
    width: "100%"
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
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});

export default BasicsDetailsScreen;
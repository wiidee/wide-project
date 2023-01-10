import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Color, Border } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={[styles.splashscreen, styles.splashscreenLayout]}>
      <View style={[styles.splashscreenChild, styles.splashscreenLayout]} />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splashscreenLayout: {
    height: 844,
    backgroundColor: Color.black,
  },
  splashscreenChild: {
    top: 0,
    left: 0,
    width: 390,
    position: "absolute",
  },
  groupIcon: {
    height: "9.32%",
    width: "31.92%",
    top: "44.43%",
    right: "33.97%",
    bottom: "46.25%",
    left: "34.1%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  splashscreen: {
    borderRadius: Border.br_sm,
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default SplashScreen;

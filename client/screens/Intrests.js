import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Intrests = () => {
  return (
    <View style={[styles.intrests, styles.intrestsLayout]}>
      <View style={[styles.intrestsChild, styles.intrestsLayout]} />
      <Image
        style={styles.menuIcon}
        resizeMode="cover"
        source={require("../assets/menu.png")}
      />
      <Image
        style={styles.intrestsItem}
        resizeMode="cover"
        source={require("../assets/polygon-5.png")}
      />
      <Image
        style={styles.intrestsInner}
        resizeMode="cover"
        source={require("../assets/polygon-6.png")}
      />
      <Text style={[styles.yourInterests, styles.pick5KindTypo]}>
        your interests :
      </Text>
      <View style={styles.rectangleView} />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={styles.groupChild} />
        <Text style={[styles.calligraphy, styles.artTypo]}>calligraphy</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupBorder]} />
        <Text style={[styles.popArt, styles.artTypo]}>Pop Art</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={[styles.groupItem, styles.groupBorder]} />
        <Text style={[styles.portraitArt, styles.digitalTypo]}>
          Portrait Art
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.groupItem, styles.groupBorder]} />
        <Text style={[styles.popArt, styles.artTypo]}>Oil painting</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
        <View style={[styles.groupItem, styles.groupBorder]} />
        <Text style={[styles.digital, styles.digitalTypo]}>Digital</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentPosition]}>
        <View style={styles.groupBorder} />
        <Text style={[styles.nfts, styles.artTypo]}>NFT’s</Text>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
        <View style={styles.groupBorder} />
        <Text style={[styles.sculpture, styles.digitalTypo]}>sculpture</Text>
      </View>
      <Text style={[styles.pick5Kind, styles.pick5KindTypo]}>
        pick 5 kind of art that you prefer
      </Text>
      <TouchableOpacity
        style={[styles.groupTouchableopacity, styles.rectanglePressableLayout]}
        activeOpacity={0.2}
        onPress={() => {}}
      >
        <Pressable
          style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        />
        <Text style={[styles.ok, styles.okTypo]}>OK !</Text>
      </TouchableOpacity>
      <Pressable
        style={[styles.skipThisForNowParent, styles.arrowRightLongIconLayout]}
        onPress={() => {}}
      >
        <Text style={[styles.skipThisFor, styles.okTypo]}>
          skip this for now
        </Text>
        <Image
          style={[styles.arrowRightLongIcon, styles.arrowRightLongIconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-right-long.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent4, styles.groupViewPosition]}>
        <View style={[styles.groupItem, styles.groupBorder]} />
        <Text style={[styles.spiritualArt, styles.artTypo]}>Spiritual Art</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  intrestsLayout: {
    height: 844,
    backgroundColor: Color.white,
  },
  pick5KindTypo: {
    textAlign: "center",
    fontFamily: FontFamily.jost,
    color: Color.black,
    position: "absolute",
  },
  rectangleLayout: {
    height: 32,
    width: 100,
    top: 291,
    position: "absolute",
  },
  artTypo: {
    height: 17,
    width: 83,
    fontSize: FontSize.size_base,
    top: 7,
    textAlign: "center",
    fontFamily: FontFamily.jost,
    fontWeight: "600",
    position: "absolute",
  },
  groupBorder: {
    borderColor: "#000",
    backgroundColor: Color.gray_200,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_lg,
    height: 32,
    width: 100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectanglePosition: {
    top: 334,
    height: 32,
    width: 100,
    position: "absolute",
  },
  digitalTypo: {
    top: 6,
    height: 17,
    width: 83,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.jost,
    fontWeight: "600",
    position: "absolute",
  },
  groupViewPosition: {
    left: 260,
    height: 32,
    width: 100,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 377,
    height: 32,
    width: 100,
    position: "absolute",
  },
  rectanglePressableLayout: {
    height: 37,
    width: 220,
    position: "absolute",
  },
  okTypo: {
    fontWeight: "800",
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.jost,
    position: "absolute",
  },
  arrowRightLongIconLayout: {
    height: 24,
    position: "absolute",
  },
  intrestsChild: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  menuIcon: {
    top: 28,
    left: 332,
    width: 50,
    height: 43,
    position: "absolute",
  },
  intrestsItem: {
    top: 29,
    left: 231,
    height: 220,
    width: 159,
    position: "absolute",
    borderRadius: Border.br_sm,
  },
  intrestsInner: {
    top: 637,
    borderRadius: Border.br_md,
    width: 91,
    height: 183,
    left: 0,
    position: "absolute",
  },
  yourInterests: {
    top: 167,
    left: 60,
    fontSize: 32,
    width: 271,
    height: 45,
    fontWeight: "600",
    fontFamily: FontFamily.jost,
  },
  rectangleView: {
    top: 212,
    left: 21,
    backgroundColor: "#060606",
    width: 349,
    height: 2,
    position: "absolute",
  },
  groupChild: {
    borderColor: "#ededed",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_lg,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.black,
    height: 32,
    width: 100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  calligraphy: {
    color: Color.white,
    left: 9,
  },
  rectangleParent: {
    left: 30,
  },
  groupItem: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderColor: "#000",
    backgroundColor: Color.gray_200,
  },
  popArt: {
    left: 5,
    color: Color.black,
  },
  rectangleGroup: {
    left: 145,
  },
  portraitArt: {
    left: 5,
  },
  rectangleContainer: {
    left: 145,
  },
  groupView: {
    top: 291,
    left: 260,
  },
  digital: {
    left: 8,
  },
  rectangleParent1: {
    left: 30,
  },
  nfts: {
    color: "#010101",
    left: 9,
  },
  rectangleParent2: {
    left: 97,
  },
  sculpture: {
    left: 9,
  },
  rectangleParent3: {
    left: 203,
  },
  pick5Kind: {
    top: 228,
    left: 96,
    fontSize: 15,
    fontWeight: "300",
    width: 202,
    height: 16,
  },
  rectanglePressable: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.black,
    width: 220,
    left: 0,
    top: 0,
  },
  ok: {
    top: 9,
    left: 76,
    color: Color.gray_100,
    width: 69,
    height: 20,
  },
  groupTouchableopacity: {
    top: 540,
    left: 83,
  },
  skipThisFor: {
    height: 15,
    color: Color.black,
    width: 159,
    left: 0,
    top: 0,
  },
  arrowRightLongIcon: {
    left: 147,
    width: 24,
    top: 0,
  },
  skipThisForNowParent: {
    top: 590,
    left: 101,
    width: 171,
  },
  spiritualArt: {
    color: "#232222",
    left: 5,
  },
  rectangleParent4: {
    top: 333,
  },
  intrests: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    borderRadius: Border.br_sm,
  },
});

export default Intrests;

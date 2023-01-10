import * as React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState,useEffect } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
  Text,
  Image,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import {auth} from "../fireBase"

const LogIn = () => {
  const navigation = useNavigation();
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handelsignIn=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  return (
    <View style={[styles.logIn, styles.logLayout1]}>
      <View
        style={[
          styles.logInChild,
          styles.logInChildPosition,
          styles.logLayout1,
        ]}
      />
      <RNPTextInput
        style={[styles.logInItem, styles.logLayout]}
        placeholder="Type your email "
        label="Email"
        value={email}
        onChangeText={text =>setEmail(text)}
        mode="flat"
        activeUnderlineColor="#fff"
        theme={{ colors: { background: "#d9d9d9" } }}
      />
      <RNPTextInput
        style={[styles.logInInner, styles.logLayout]}
        placeholder="Type your password "
        label="password"
        value={password}
        onChangeText={text =>setPassword(text)}
        mode="flat"
        activeUnderlineColor="#fff"
        theme={{ colors: { text: "#fff", background: "#d9d9d9" } }}
      />
      <TouchableHighlight
        style={[styles.wrapper, styles.wrapperLayout]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SignUp")}
      >
        <View />
      </TouchableHighlight>
      <Text style={styles.username}>USERNAME</Text>
      <Text style={[styles.register, styles.loginTypo]}>Register</Text>
      <Pressable style={[styles.rectanglePressable, styles.wrapperLayout]} />
      <Text style={[styles.login, styles.loginTypo]} onPress={handelsignIn}>Login</Text>
      <Image
        style={[styles.polygonIcon, styles.logInChildPosition]}
        resizeMode="cover"
        source={require("../assets/polygon-3.png")}
      />
      <Image
        style={[styles.starIcon, styles.starIconPosition]}
        resizeMode="cover"
        source={require("../assets/star-1.png")}
      />
      <Image
        style={styles.logInChild1}
        resizeMode="cover"
        source={require("../assets/polygon-2.png")}
      />
      <Text style={styles.or}>OR</Text>
      <View style={[styles.rectangleView, styles.starIconPosition]} />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-34.png")}
      />
      <Image
        style={[styles.logInChild2, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-35.png")}
      />
      <Image
        style={styles.wideLogo1Icon}
        resizeMode="cover"
        source={require("../assets/widelogo-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logLayout1: {
    height: 844,
    backgroundColor: Color.white,
  },
  logInChildPosition: {
    left: 0,
    position: "absolute",
  },
  logLayout: {
    height: 49,
    width: 275,
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_xs,
    left: 63,
    position: "absolute",
  },
  wrapperLayout: {
    height: 37,
    width: 101,
    backgroundColor: Color.black,
    borderRadius: Border.br_xl,
    top: 515,
    position: "absolute",
  },
  loginTypo: {
    width: 63,
    textAlign: "center",
    top: 524,
    height: 20,
    color: Color.gray_100,
    fontFamily: FontFamily.jost,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  starIconPosition: {
    left: 53,
    position: "absolute",
  },
  groupIconLayout: {
    height: 45,
    width: 45,
    top: 581,
    position: "absolute",
  },
  logInChild: {
    top: 0,
    width: 390,
  },
  logInItem: {
    top: 316,
  },
  logInInner: {
    top: 386,
  },
  wrapper: {
    left: 206,
  },
  username: {
    top: 261,
    left: 72,
    textAlign: "left",
    width: 205,
    height: 20,
    color: Color.gray_100,
    fontFamily: FontFamily.jost,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  register: {
    left: 221,
  },
  rectanglePressable: {
    left: 76,
  },
  login: {
    left: 91,
  },
  polygonIcon: {
    top: 81,
    borderRadius: 56,
    width: 135,
    height: 204,
  },
  starIcon: {
    top: 720,
    borderRadius: 52,
    width: 224,
    height: 124,
  },
  logInChild1: {
    top: 88,
    left: 275,
    borderRadius: Border.br_md,
    width: 115,
    height: 168,
    position: "absolute",
  },
  or: {
    left: 181,
    color: Color.black,
    width: 21,
    height: 30,
    textAlign: "center",
    top: 524,
    fontFamily: FontFamily.jost,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  rectangleView: {
    top: 566,
    backgroundColor: "#373737",
    width: 279,
    height: 1,
  },
  groupIcon: {
    left: 195,
  },
  logInChild2: {
    left: 146,
  },
  wideLogo1Icon: {
    top: 53,
    left: 9,
    width: 352,
    height: 242,
    position: "absolute",
    overflow: "hidden",
  },
  logIn: {
    borderRadius: Border.br_sm,
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default LogIn;

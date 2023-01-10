import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import {auth} from "../fireBase"

const SignUp = () => {
  const navigation = useNavigation();
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [location,setLocation]=useState('')
  const [profession,setProfession]=useState('')
  const [age,setAge]=useState('')

const handelsignUp= () => {
  auth 
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}




  return (
    <View style={[styles.signup, styles.signupLayout]}>
      <View
        style={[styles.signupChild, styles.childPosition, styles.signupLayout]}
      />
      <RNPTextInput
        style={[styles.signupItem, styles.signupChildLayout]}
        placeholder="Type your name"
        label="Name or Username"
        value={name}
        mode="flat"
        onChangeText={text =>setName(text)}
        activeUnderlineColor="#fff"
        theme={{ colors: { background: "#d9d9d9" } }}
      />
      <RNPTextInput
        style={[styles.signupInner, styles.signupChildLayout]}
        placeholder="Type your emai "
        label="Email "
        value={email}
        mode="flat"
        onChangeText={text =>setEmail(text)}
        underlineColor="#fff"
        activeUnderlineColor="#fff"
        theme={{ colors: { text: "#fff", background: "#d9d9d9" } }}
      />
      <RNPTextInput
        style={[styles.rectangleRnptextinput, styles.signupChildLayout]}
        placeholder="Type your password"
        label="Password"
        value={password}
        onChangeText={text =>setPassword(text)}
        mode="flat"
        activeUnderlineColor="#fff"
        theme={{ colors: { background: "#d9d9d9" } }}
      />
      <RNPTextInput
        style={[styles.signupChild1, styles.signupChildLayout]}
        placeholder="your location"
        label="location"
        value={location}
        onChangeText={text =>setLocation(text)}
        mode="flat"
        activeUnderlineColor="#fff"
        theme={{ colors: { background: "#e0dfdf" } }}
      />
      <RNPTextInput
        style={[styles.signupChild2, styles.signupChildLayout]}
        placeholder="your profession"
        label="profession"
        value={profession}
        onChangeText={text =>setProfession(text)}
        mode="flat"
        activeUnderlineColor="#fff"
        theme={{ colors: { background: "#d9d9d9" } }}
      />
      <RNPTextInput
        style={styles.signupChild3}
        placeholder="00/00/00"
        label="Age"
        value={age}
        onChangeText={text =>setAge(text)}
        mode="flat"
        activeUnderlineColor="#fff"
        theme={{ colors: { background: "#d9d9d9" } }}
      />
      <TouchableOpacity
        style={[styles.rectangleParent, styles.groupChildLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Intrests") }
        

      >
        <Pressable
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.childPosition,
          ]}
        />
        <Text style={styles.register} onPress={handelsignUp}>Register</Text>
      </TouchableOpacity>
      <Image
        style={[styles.polygonIcon, styles.polygonIconLayout]}
        resizeMode="cover"
        source={require("../assets/polygon-1.png")}
      />
      <Image
        style={styles.signupChild4}
        resizeMode="cover"
        source={require("../assets/polygon-31.png")}
      />
      <Image
        style={[styles.signupChild5, styles.polygonIconLayout]}
        resizeMode="cover"
        source={require("../assets/polygon-21.png")}
      />
      <Image
        style={styles.wideLogo1Icon}
        resizeMode="cover"
        source={require("../assets/widelogo-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signupLayout: {
    height: 844,
    backgroundColor: Color.white,
  },
  childPosition: {
    top: 0,
    left: 0,
  },
  signupChildLayout: {
    height: 49,
    width: 275,
    borderRadius: Border.br_xs,
    left: 63,
    position: "absolute",
  },
  groupChildLayout: {
    height: 37,
    width: 220,
    position: "absolute",
  },
  polygonIconLayout: {
    borderRadius: Border.br_md,
    position: "absolute",
  },
  signupChild: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  signupItem: {
    top: 246,
    backgroundColor: Color.gray_200,
  },
  signupInner: {
    top: 316,
    backgroundColor: Color.gray_200,
  },
  rectangleRnptextinput: {
    top: 386,
    backgroundColor: Color.gray_200,
  },
  signupChild1: {
    top: 455,
    backgroundColor: "#e0dfdf",
  },
  signupChild2: {
    top: 524,
    backgroundColor: Color.gray_200,
  },
  signupChild3: {
    top: 593,
    left: 121,
    borderRadius: 10,
    width: 148,
    height: 46,
    backgroundColor: Color.gray_200,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.black,
    left: 0,
  },
  register: {
    top: 9,
    left: 76,
    fontSize: FontSize.size_lg,
    fontWeight: "300",
    fontFamily: FontFamily.jost,
    color: Color.gray_100,
    textAlign: "center",
    width: 69,
    height: 20,
    position: "absolute",
  },
  rectangleParent: {
    top: 645,
    left: 90,
  },
  polygonIcon: {
    top: 706,
    left: 251,
    width: 139,
    height: 138,
  },
  signupChild4: {
    top: 38,
    left: 257,
    width: 133,
    height: 220,
    position: "absolute",
    borderRadius: Border.br_sm,
  },
  signupChild5: {
    top: 548,
    width: 80,
    height: 183,
    left: 0,
  },
  wideLogo1Icon: {
    top: 17,
    left: 21,
    width: 324,
    height: 223,
    position: "absolute",
    overflow: "hidden",
  },
  signup: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    borderRadius: Border.br_sm,
  },
});

export default SignUp;

import React from "react";
import { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const [focusInputName, setFocusInputName] = useState("");

  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const handleEmail = (text) => {
    setEmail(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };
  const isShow = () => {
    setShow(!show);
  };

  const submitForm = () => {
    if (email === "" || password === "") {
      Alert.alert("Пожалуйса заполните все поля формы!");
      return;
    }
    Alert.alert("Данные формы", `email: ${email} password: ${password}`);
    resetForm();
    navigation.navigate("Home");
  };
  const resetForm = () => {
    setEmail("");
    setPassword("");
    setShow(false);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          source={require("../images/PhotoBG.png")}
          style={styles.image}
          resizeMode="cover"
        >
          <View style={styles.bgfon}>
            <Text style={styles.title}>Войти</Text>
            <View style={{ marginBottom: 16 }}>
              <TextInput
                style={
                  focusInputName !== "email"
                    ? styles.input
                    : { ...styles.input, ...styles.inputFocus }
                }
                placeholder="Адрес электронной почты"
                placeholderTextColor="#BDBDBD"
                value={email}
                onChangeText={handleEmail}
                onSubmitEditing={Keyboard.dismiss}
                onFocus={() => setFocusInputName("email")}
                onBlur={() => setFocusInputName("")}
              />
            </View>
            <View style={{ marginBottom: 43 }}>
              <TextInput
                style={
                  focusInputName !== "password"
                    ? styles.input
                    : { ...styles.input, ...styles.inputFocus }
                }
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                secureTextEntry={show}
                value={password}
                onChangeText={handlePassword}
                onSubmitEditing={Keyboard.dismiss}
                onFocus={() => setFocusInputName("password")}
                onBlur={() => setFocusInputName("")}
              />
              <Text style={styles.phShow} onPress={isShow}>
                {show ? "Показать" : "Скрыть"}
              </Text>
            </View>
            <TouchableOpacity style={styles.btnSubmit} onPress={submitForm}>
              <Text style={styles.btnSubmitText}>Войти</Text>
            </TouchableOpacity>
            <Text
              style={styles.textRegistration}
              onPress={() => navigation.navigate("Registration")}
            >
              Нет аккаунта? Зарегистрироваться
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgfon: {
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 144,
  },
  title: {
    fontFamily: "Roboto-Medium",
    marginBottom: 33,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
    letterSpacing: 0.01,
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    padding: 16,
    paddingRight: 90,
    height: 50,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    placeholderTextColor: "#BDBDBD",
  },
  inputFocus: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFf",
  },
  phShow: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    position: "absolute",
    top: 16,
    right: 16,
  },
  btnSubmit: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 100,
    alignItems: "center",
    backgroundColor: "#FF6C00",
  },
  btnSubmitText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  textRegistration: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default LoginScreen;

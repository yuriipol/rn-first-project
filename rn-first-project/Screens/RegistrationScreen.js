import React, { useState, useCallback } from "react";

import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const RegistrationScreen = () => {
  const [name, setName] = useState("");
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

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);

  const isShow = () => {
    setShow(!show);
  };

  const onLogin = () => {
    Alert.alert("Данные ввода:", `${name} + ${password} +${email}`);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <View style={styles.bgfon}>
          <View style={styles.avatar}>
            <View style={styles.addFoto}>
              <Image
                source={require("../images/Union.png")}
                style={styles.add}
                resizeMode="cover"
              ></Image>
            </View>
          </View>
          <Text style={styles.title}>Регистрация</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              value={name}
              onChangeText={nameHandler}
              placeholder="Логин"
              placeholderTextColor="#BDBDBD"
              style={
                focusInputName !== "name"
                  ? styles.input
                  : { ...styles.input, ...styles.inputFocus }
              }
              onSubmitEditing={Keyboard.dismiss}
              onFocus={() => setFocusInputName("name")}
              onBlur={() => setFocusInputName("")}
            />
            <TextInput
              value={email}
              onChangeText={emailHandler}
              placeholder="Почта"
              placeholderTextColor="#BDBDBD"
              style={
                focusInputName !== "email"
                  ? styles.input
                  : { ...styles.input, ...styles.inputFocus }
              }
              onSubmitEditing={Keyboard.dismiss}
              onFocus={() => setFocusInputName("email")}
              onBlur={() => setFocusInputName("")}
            />
            <View>
              <TextInput
                value={password}
                onChangeText={passwordHandler}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                secureTextEntry={show}
                style={
                  focusInputName !== "password"
                    ? styles.input
                    : { ...styles.input, ...styles.inputFocus }
                }
                onSubmitEditing={Keyboard.dismiss}
                onFocus={() => setFocusInputName("password")}
                onBlur={() => setFocusInputName("")}
              />

              <Text onPress={isShow} style={styles.show}>
                {show ? "Показать" : "Скрыть"}
              </Text>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={styles.textButton}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <Text style={styles.enter}>Уже есть аккаунт? Войти</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "Roboto-Medium",
    marginTop: 32,
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 33,
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    alignContent: "center",
    width: 343,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#F6F6F6",
  },
  inputFocus: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFf",
  },
  button: {
    marginTop: 43,
    width: 343,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
    fontSize: 16,
  },
  bgfon: {
    flex: 0,
    alignItems: "center",
    width: 385,
    height: 549,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
  },
  show: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    fontSize: 16,
    lineHeight: 19,
    position: "absolute",
    top: 16,
    left: 256,
    color: "#1B4371",
  },
  enter: {
    marginTop: 16,
    color: "#1B4371",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    marginTop: -60,
    backgroundColor: "#F6F6F6",
  },
  addFoto: {
    position: "absolute",
    top: 81,
    left: 107,

    width: 25,
    height: 25,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
  },
  add: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
});

export default RegistrationScreen;

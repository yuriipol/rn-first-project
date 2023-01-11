import React, { useState } from "react";
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
import * as Font from "expo-font";
import { AppLoading } from "expo";

const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Roboto-Regulat": require("../images/fonts/Roboto-Medium.ttf"),
      "Roboto-Bold": require("../images/fonts/Roboto-Regular.ttf"),
    });
  };

  const isShow = () => {
    setShow(!show);
  };

  const onLogin = () => {
    Alert.alert("Данные ввода", `${name} + ${password} +${email}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
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
              style={styles.input}
            />
            <TextInput
              value={email}
              onChangeText={emailHandler}
              placeholder="Почта"
              style={styles.input}
            />
            <View>
              <TextInput
                value={password}
                onChangeText={passwordHandler}
                placeholder="Пароль"
                style={styles.input}
                secureTextEntry={show}
              />

              <Text onPress={isShow} style={styles.show}>
                Показать
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
    marginTop: 32,
    fontSize: 30,
    textAlign: "center",
    marginBottom: 33,
  },
  input: {
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
    color: "#fff",
    fontSize: 16,
  },
  bgfon: {
    flex: 0,
    alignItems: "center",
    width: 375,
    height: 549,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
  },
  show: {
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

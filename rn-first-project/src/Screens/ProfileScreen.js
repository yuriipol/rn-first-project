import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

import styles from "../styles/profileScreenStyle";

import { logOutUser } from "../redux/auth/auth-operations";
import { dataUser } from "../redux/auth/auth-selectors";

import FontsHooks from "../shared/hooks/fontsHooks";

import ProfileList from "../components/ProfileList";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(dataUser);
  const { fontsLoaded, onLayoutRootView } = FontsHooks();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView}>
      <ImageBackground
        source={require("../images/PhotoBG.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.containerProfile}>
          <View style={styles.avatarContainer}>
            <TouchableOpacity style={styles.btnAvatar}>
              <Image
                style={styles.avatar}
                source={require("../images/Union.png")}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.btnLogOut}
            onPress={() => dispatch(logOutUser())}
          >
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={styles.title}>{userInfo.userName}</Text>
          <ProfileList navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;

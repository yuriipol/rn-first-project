import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Text,
  Alert,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

import FontsHooks from "../shared/hooks/fontsHooks";
import LocationHooks from "../shared/hooks/LocationHooks";
import styles from "../styles/CreatePostsScreenStyle";
import cameraStyles from "../styles/CameraStyle";

const CreatePostsScreen = ({ navigation }) => {
  const { fontsLoaded, onLayoutRootView } = FontsHooks();
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  // const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [hasPermission, setHasPermission] = useState(null);

  const { location, getLocation } = LocationHooks();

  const handleTitle = (text) => {
    setTitle(text);
  };

  const handlePlace = (text) => {
    setPlace(text);
  };

  const validatePostForm = () => {
    if (title === "" || place === "" || photo === null) {
      return true;
    }
    return false;
  };

  const createPostSubmit = () => {
    getLocation();
    Alert.alert(
      `Title: ${title} place:${place} Location:${location.coords.latitude} , ${location.coords.longitude}`
    );
    const data = { uri: photo, title, place, location };
    clearPosts();
    navigation.navigate("Публикации", data);
  };
  const clearPosts = () => {
    setPhoto(null);
    setTitle("");
    setPlace("");
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // const takePhoto = async () => {
  //   const photo = await camera.takePictureAsync();
  //   console.log("camera----->>>", photo.uri);
  // };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            {!photo && (
              <Camera
                style={cameraStyles.camera}
                type={type}
                ref={(ref) => {
                  setCameraRef(ref);
                }}
              >
                <TouchableOpacity
                  style={cameraStyles.flipContainer}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <MaterialIcons
                    name="flip-camera-android"
                    size={24}
                    color="#ffff"
                    style={{ fontSize: 28, marginTop: 10, marginRight: 10 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.imageBtn}
                  onPress={async () => {
                    if (cameraRef) {
                      const { uri } = await cameraRef.takePictureAsync();
                      await MediaLibrary.createAssetAsync(uri);
                      setPhoto(uri);
                    }
                  }}
                >
                  <Ionicons name="camera" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              </Camera>
            )}

            <View style={styles.photoContainer}>
              {photo && (
                <Image style={styles.imagePhoto} source={{ uri: photo }} />
              )}
            </View>
          </View>
          <Text style={styles.imageContainerText}>Загрузите фото</Text>
        </View>
        <View style={{ marginBottom: 16 }}>
          <TextInput
            style={styles.inputTitle}
            placeholder="Название..."
            placeholderTextColor="#BDBDBD"
            value={title}
            onChangeText={handleTitle}
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        <View style={{ marginBottom: 32 }}>
          <TextInput
            style={styles.inputPlace}
            placeholder="Местность..."
            placeholderTextColor="#BDBDBD"
            value={place}
            onChangeText={handlePlace}
            onSubmitEditing={Keyboard.dismiss}
          />
          <View style={styles.inputIcon}>
            <Feather name="map-pin" size={24} color="#BDBDBD" />
          </View>
        </View>
        <TouchableOpacity
          disabled={validatePostForm()}
          onPress={() => createPostSubmit()}
          style={
            validatePostForm()
              ? { ...styles.publishBtn, ...styles.disabledBtn }
              : { ...styles.publishBtn, ...styles.enabledBtn }
          }
        >
          <Text
            style={
              validatePostForm()
                ? { ...styles.publishBtnText, ...styles.disabledBtnText }
                : { ...styles.publishBtnText, ...styles.enabledBtnText }
            }
          >
            Опубликовать
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => {
            navigation.navigate("Публикации");
            clearPosts();
          }}
        >
          <Feather name="trash-2" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;

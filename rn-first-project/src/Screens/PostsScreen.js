import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Text, View } from "react-native";

import FontsHooks from "../shared/hooks/fontsHooks";

import styles from "../styles/PostScreenStyle";

import PostsList from "../components/PostsList";

import { dataUser } from "../redux/auth/auth-selectors";

const PostsScreen = ({ navigation, route }) => {
  const userInfo = useSelector(dataUser);
  const { fontsLoaded, onLayoutRootView } = FontsHooks();

  const [posts, setPosts] = useState([]);
  const postData = route.params;

  useEffect(() => {
    if (postData) {
      setPosts((prevState) => [...prevState, postData]);
    }
  }, [postData]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.userContainer}>
        <View style={styles.avatarBox}></View>
        <View>
          <Text style={styles.userName}>{userInfo.userName}</Text>
          <Text style={styles.userEmail}>{userInfo.email}</Text>
        </View>
      </View>

      <PostsList navigation={navigation} postsArr={posts} />
    </View>
  );
};

export default PostsScreen;

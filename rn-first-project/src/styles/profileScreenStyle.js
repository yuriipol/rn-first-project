import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerProfile: {
    marginTop: 147,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    paddingBottom: 78,
  },
  avatarContainer: {
    position: "absolute",
    top: -60,
    left: "40%",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
  },
  btnAvatar: {
    position: "absolute",
    bottom: 14,
    right: -13,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 12.5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FF6C00",
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
  btnLogOut: {
    position: "absolute",
    top: 22,
    right: 16,
  },
});

export default styles;

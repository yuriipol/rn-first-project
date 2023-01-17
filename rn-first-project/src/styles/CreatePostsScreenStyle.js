import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
  },
  imageContainer: { marginBottom: 48 },
  imageWrapper: {
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    marginBottom: 8,
  },
  imageBtn: {
    position: "absolute",
    top: 90,
    left: "42%",
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainerText: {
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  inputTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    paddingVertical: 15,
    paddingRight: 20,
    height: 50,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    placeholderTextColor: "#BDBDBD",
  },
  inputPlace: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    paddingVertical: 15,
    paddingRight: 20,
    paddingLeft: 30,
    height: 50,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    placeholderTextColor: "#BDBDBD",
  },
  inputIcon: {
    position: "absolute",
    top: 13,
    left: 0,
  },
  publishBtn: {
    alignItems: "center",
    padding: 16,
    height: 50,
    borderRadius: 100,
    marginBottom: 120,
  },
  disabledBtn: { backgroundColor: "#F6F6F6" },
  enabledBtn: { backgroundColor: "#FF6C00" },
  publishBtnText: {
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  disabledBtnText: { color: "#BDBDBD" },
  enabledBtnText: { color: "#fff" },
  deleteBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
  photoContainer: {
    position: "absolute",
  },
  imagePhoto: {
    width: 359,
    height: 240,
  },
});
export default styles;

import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Alert,
} from "react-native";
import { db, auth } from "../firebase";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const DeleteTask = ({ item, setTasks }) => {
  const deleteHandler = () => {
    setTasks(() => {
      const usersRef = db
        .ref("users")
        .child(auth.currentUser.uid)
        .child("tasks");
      usersRef.child(item.key).remove();
    });
  };
  const createDeleteAlert = () =>
    Alert.alert("Warning", "Are you sure you want to delete this?", [
      {
        text: "Yes",
        onPress: () => {
          deleteHandler();
        },
      },
      {
        text: "No",
        onPress: () => {
          null;
        },
      },
    ]);

  return (
    <View style={styles.item}>
      <TouchableWithoutFeedback onPress={createDeleteAlert}>
        <FontAwesome5 name="trash" color={"white"} size={20} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default DeleteTask;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "red",
    color: "#8899A6",
    padding: 15,
    borderColor: "#22303C",
    borderRadius: 10,

    marginTop: 10,
    width: 50,
  },
  text: {
    color: "#8899A6",
    fontWeight: "700",
    fontSize: 16,
  },
});

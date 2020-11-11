import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

export default function TodoForm(props) {
  const { editing, text, createTodo, setText, updateTodo } = props;
  return (
    <View style={styles.createTodoContainer}>
      <TextInput
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="add a todo"
        onSubmitEditing={() => (editing ? updateTodo() : createTodo())}
        style={styles.input}
      />
      <TouchableHighlight
        onPress={() => (editing ? updateTodo() : createTodo())}
        style={styles.submitButton}
        underlayColor="#47567a"
      >
        <Text style={styles.buttonText}>{editing ? "Update" : "Add +"}</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  createTodoContainer: {
    display: "flex",
    margin: 30,
  },
  submitButton: {
    backgroundColor: "#2a3859",
    padding: 13,
    margin: 10,
    borderRadius: 3,
  },
  input: {
    borderColor: "#eee",
    padding: 10,
    borderBottomWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
});

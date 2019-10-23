import React from "react";
import { Text, StyleSheet, TouchableHighlight, View } from "react-native";

export default function Todo(props) {
  const { item, deleteTodo, editTodo } = props;
  return (
    <View style={styles.todo}>
      <Text>{item.text}</Text>
      <View style={styles.todoButtonContainer}>
        <TouchableHighlight
          onPress={() => editTodo(item)}
          style={[styles.todoButton, styles.updateButton]}
          underlayColor="#aaa"
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => deleteTodo(item.id)}
          style={[styles.todoButton, styles.removeButton]}
          underlayColor="#db5753"
        >
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#eee",
    borderBottomWidth: 1,
    paddingLeft: 20,
    paddingBottom: 5,
    margin: 10
  },
  todoButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  todoButton: {
    padding: 13,
    margin: 5,
    borderRadius: 3
  },
  updateButton: {
    backgroundColor: "#999"
  },
  removeButton: {
    backgroundColor: "#e3423d"
  },
  buttonText: {
    textAlign: "center",
    color: "#fff"
  }
});

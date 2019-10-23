import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";

import Todo from "./todo";

export default function Todos(props) {
  const { todos, deleteTodo, editTodo } = props;
  return (
    <View>
      <Text style={styles.title}>My Todos</Text>
      <FlatList
        data={todos}
        keyExtractor={({ id }) => id}
        keyboardShouldPersistTaps="always"
        renderItem={({ item }) => (
          <Todo item={item} deleteTodo={deleteTodo} editTodo={editTodo} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  }
});

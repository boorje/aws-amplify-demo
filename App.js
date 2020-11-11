import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";

// components
import TodoForm from "./src/components/todoForm";
import Todos from "./src/components/todos";

// api
import * as api from "./src/api";

export default function App() {
  // a getter and setter for each type of state
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState("");
  const [hasError, setError] = useState(false);

  // fetch todos from the API
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const todos = await api.listTodos();
      setTodos(todos);
    } catch (error) {
      setError(true);
    }
  };

  // crud operations
  const createTodo = async () => {
    try {
      const createdTodo = await api.createTodo(text);
      setTodos([...todos, { id: createdTodo.id, text }]);
      setText("");
    } catch (error) {
      setError(true);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await api.deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      setError(true);
    }
  };

  const updateTodo = async () => {
    try {
      await api.updateTodo({ id: currentTodo, text });
      setTodos(
        todos.map((todo) =>
          todo.id === currentTodo ? { id: currentTodo, text } : todo
        )
      );
      setText("");
      setEditing(false);
    } catch (error) {
      setError(true);
    }
  };

  // helper function for updating todo
  const editTodo = ({ id, text }) => {
    setEditing(true);
    setCurrentTodo(id);
    setText(text);
    this.textInput.focus();
  };

  return (
    <SafeAreaView>
      {hasError && (
        <Text style={{ alignSelf: "center", margin: 10, color: "red" }}>
          Something went wrong. Please try again.
        </Text>
      )}
      <TodoForm
        editing={editing}
        text={text}
        setText={setText}
        createTodo={createTodo}
        updateTodo={updateTodo}
      />

      <Todos todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </SafeAreaView>
  );
}

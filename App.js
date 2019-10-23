import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import shortid from "shortid";

import TodoForm from "./src/components/todoForm";
import Todos from "./src/components/todos";

export default function App() {
  const initialTodos = [
    { id: shortid.generate(), text: "Clean room" },
    { id: shortid.generate(), text: "Do the dishes" }
  ];
  // a getter and setter for each type of state
  const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState("");

  createTodo = async () => {
    setTodos([...todos, { text, id: shortid.generate() }]);
    setText("");
    // TODO: add todo to the cloud
  };

  deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
    // TODO: delete the todo from the cloud
  };

  updateTodo = () => {
    setTodos(
      todos.map(todo =>
        todo.id === currentTodo ? { id: currentTodo, text } : todo
      )
    );
    setText("");
    setEditing(false);
    // TODO: Update todo in the cloud
  };

  editTodo = ({ id, text }) => {
    setEditing(true);
    setCurrentTodo(id);
    setText(text);
    this.textInput.focus();
  };

  return (
    <SafeAreaView>
      <TodoForm
        editing={editing}
        text={text}
        setText={setText}
        createTodo={this.createTodo}
        updateTodo={this.updateTodo}
      />
      <Todos
        todos={todos}
        editTodo={this.editTodo}
        deleteTodo={this.deleteTodo}
      />
    </SafeAreaView>
  );
}

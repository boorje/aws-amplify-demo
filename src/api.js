import API, { graphqlOperation } from "@aws-amplify/api";

// operations
import * as queries from "./graphql/queries";
import * as mutations from "./graphql/mutations";

// configure amplify
import config from "../aws-exports";
API.configure(config);

export const listTodos = async () => {
  const { data } = await API.graphql(graphqlOperation(queries.listTodos));
  return data.listTodos.items;
};

export const createTodo = async todo => {
  const { data } = await API.graphql(
    graphqlOperation(mutations.createTodo, {
      input: { text: todo }
    })
  );
  return data.createTodo;
};

export const updateTodo = async input => {
  const { data } = await API.graphql(
    graphqlOperation(mutations.updateTodo, { input })
  );
  return data.updateTodo;
};

export const deleteTodo = async id => {
  const { data } = await API.graphql(
    graphqlOperation(mutations.deleteTodo, { input: { id } })
  );
  return data.deleteTodo;
};

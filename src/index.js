import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./components/Counter";
import TodoApp from "./components/TodoApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <div>
      <Counter />
      <TodoApp />
    </div>
  </Provider>
);

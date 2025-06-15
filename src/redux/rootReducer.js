import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
      counter: counterReducer,
  todos: todoReducer  // 🔥 this key must match useSelector
});

export default rootReducer;

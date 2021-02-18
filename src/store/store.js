import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { TodosReducer } from "../redux/todo/reducers";

import { connectRouter, routerMiddleware } from "connected-react-router";

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      todos: TodosReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}

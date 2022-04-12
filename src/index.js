import { createRoot } from "react-dom/client"; // react 18
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./components/ReducerRedux/CounterReducer";
import nameReducer from "./components/ReducerRedux/NameReducer";

// react 18
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// react 18

const rootReducer = combineReducers({
  counterReducer,
  nameReducer,
});

const store = createStore(rootReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

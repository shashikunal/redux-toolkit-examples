import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CounterApp from "./components/CounterApp";
function App() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}

export default App;

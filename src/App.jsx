import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CounterApp from "./components/CounterApp";
import AllPosts from "./components/posts/AllPosts";
function App() {
  return (
    <Provider store={store}>
      {/* <CounterApp /> */}
      <AllPosts />
    </Provider>
  );
}

export default App;

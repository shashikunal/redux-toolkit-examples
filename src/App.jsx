import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Register from "./components/auth/Register";
// import CounterApp from "./components/CounterApp";
// import AllPosts from "./components/posts/AllPosts";
// import AllProducts from "./components/products/AllProducts";

function App() {
  return (
    <Provider store={store}>
      {/* <CounterApp /> */}
      {/* <AllPosts /> */}
      <Register />
    </Provider>
  );
}

export default App;

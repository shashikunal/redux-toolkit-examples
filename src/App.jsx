import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import CreateBook from "./components/booksComp/CreateBook";
import { Toaster } from "react-hot-toast";
import AllBooks from "./components/booksComp/AllBooks";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={"home"} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path="/all-books" element={<AllBooks />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

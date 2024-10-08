import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Body from "./Body";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Person from "./Person";
import Profile from "./Profile";
import Temi from "./Temi";
import Tola from "./Tola";
import DefaultProfile from "./DefaultProfile";
import Number from "./Number";
import Product from "./Product";
import Form from "./Form";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signup" element={<Form />} />

        <Route path="/profile" element={<Profile />}>
          <Route path="/profile" element={<DefaultProfile />} />
          <Route path="/profile/temi" element={<Temi />} />
          <Route path="/profile/tola" element={<Tola />} />
          <Route path="/profile/:num" element={<Number />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/Aboutus";
import Services from "./components/services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
//import Login from "./components/Login";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/*<Route path="/login" element={<Login />} />*/}
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

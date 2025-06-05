import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import { Route, Routes } from "react-router-dom";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="get-started" element = {<GetStarted/>}/>
      </Routes>
      <Header />
      <Banner />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;

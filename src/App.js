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
import LoginPage from "./components/auth/LoginPage";
import Home from "./components/Home";
import GetStarted from "./components/GetStarted";
import BrowseJobs from "./components/BrowseJobs";
import SearchBar from "./components/SearchBar";
import SeekerRegistration from "./components/auth/SeekerRegistration";
import ProviderRegistration from "./components/auth/ProviderRegistration";
import AdminDashboard from "./components/admin/AdminDashboard";
import EmployerDashboard from "./components/auth/EmployerDashboard";
import SeekerDashboard from "./components/auth/SeekerDashboard";

function App() {
  return (
    <div>
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
          <Route path="/browse-jobs" element={<BrowseJobs />} />
          <Route path="/search-bar" element={<SearchBar />} />
          <Route path="/seeker-dashboard" element={<SeekerDashboard />} />
          <Route path="/provider-registration" element={<ProviderRegistration />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

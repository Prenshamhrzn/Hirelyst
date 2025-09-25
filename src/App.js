import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Public pages
import Home from "./components/Home";
import About from "./components/Aboutus";
import Services from "./components/services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import GetStarted from "./components/GetStarted";
import BrowseJobs from "./components/BrowseJobs";
import SearchBar from "./components/SearchBar";

// Auth & role-based pages
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegistserPage";
import SeekerRegistration from "./components/auth/SeekerRegistration";
import SeekerDashboard from "./components/auth/SeekerDashboard";
import ProviderRegistration from "./components/auth/ProviderRegistration";
import ProviderDashboard from "./components/auth/EmployerDashboard"; // ✅ New improved dashboard
import AdminDashboard from "./components/admin/AdminDashboard";
import CompanyInfoPage from "./components/auth/CompanyInfoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          {/* ---- Public Routes ---- */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/browse-jobs" element={<BrowseJobs />} />
          <Route path="/search-bar" element={<SearchBar />} />

          {/* ---- Authentication ---- */}
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/registerPage" element={<RegisterPage />} />

          {/* ---- Job Seeker ---- */}
          <Route path="/register/seeker" element={<SeekerRegistration />} />
          <Route path="/seeker-dashboard" element={<SeekerDashboard />} />

          {/* ---- Job Provider ---- */}
          <Route
            path="/register/provider-registration"
            element={<ProviderRegistration />}
          />
          {/* ✅ The main dashboard employer sees after login/registration */}
          <Route path="/employer-dashboard" element={<ProviderDashboard />} />

          {/* ---- Admin ---- */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* Optional company profile page */}
          <Route path="/company-info" element={<CompanyInfoPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

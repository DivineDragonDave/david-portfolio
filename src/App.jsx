import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/contact/Contact";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Contactban from "./componets/Contactban";
import ScrollToTop from "./componets/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <AppContent />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

function AppContent() {
  const location = useLocation(); // Hämta nuvarande route-path

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {location.pathname !== "/contact" && <Contactban />}
    </>
  );
}

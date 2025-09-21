import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import WorkPage from "./pages/Work";
import IndustriesPage from "./pages/Industries";
import InsightsPage from "./pages/Insights";
import SolutionsPage from "./pages/Solutions";
import ContactPage from "./pages/Contact";
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/solutions" element={<SolutionsPage />} />
  <Route path="/industries" element={<IndustriesPage />} />
  <Route path="/insights" element={<InsightsPage />} />
  <Route path="/work" element={<WorkPage />} />
  <Route path="/contact" element={<ContactPage />} />
</Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

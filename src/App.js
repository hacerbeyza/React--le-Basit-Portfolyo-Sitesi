import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Hakkımda from  "./sayfalar/Hakkımda";
import Hizmetler from  "./sayfalar/Hizmetler";
import İletişim from  "./sayfalar/İletişim";
import Deneyim from  "./sayfalar/Deneyim";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hakkımda/>} />
          <Route path="/deneyim" element={<Deneyim/>} />
          <Route path="/hizmetler" element={<Hizmetler/>} />
          <Route path="/iletişim" element={<İletişim/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

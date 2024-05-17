import './App.css'
import Details from './components/Details'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
    <Router>
    <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/details' element={<Details />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App

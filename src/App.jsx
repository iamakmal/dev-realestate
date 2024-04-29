import './App.css'
import Agent from './components/Agent'
import BestPlace from './components/BestPlace'
import Deal from './components/Deal'
import Demo from './components/Demo'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Requests from './components/Requests'
import Testimonial from './components/Testimonial'

function App() {
  
  return (
    <>

    <div className="relative">
    <Hero/>
    <div className="absolute inset-x-0 top-0 z-10">
    <Navbar/>
    </div>
    </div>

    <BestPlace/>
    <Demo/>
    <Deal/>
    <Agent/>
    <Testimonial/>
    <Requests/>
    </>
  )
}

export default App

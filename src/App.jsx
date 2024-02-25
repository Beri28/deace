import { useState } from 'react'
import './App.css'
import Menu from './assets/components/Menu/Menu'
import Navbar from './assets/components/Navbar/Navbar'
import Hero from './assets/components/Hero/Hero'
import Section from './assets/components/Section/Section'
import Section2 from './assets/components/Section/Section2'
import Footer from './assets/components/Footer/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Details from './assets/components/Details/Details'
import InquireModal from './assets/components/InquireModal/InquireModal'
import Admin from './assets/components/Admin/Admin'
import Register from './assets/components/Register/Register'
import Login from './assets/components/Register/Login'
import Credits from './assets/components/Credits/Credits'
import ContactUs from './assets/components/ContactUs/ContactUs'



function App() {
  const [showMenu,setShowMenu]=useState(false)
  return (
    <>
    <Router>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu}/>
        {showMenu && <Menu setShowMenu={setShowMenu}/>}
        <Routes>
            <Route path='/' element={<>
              <Hero />
              <Section title="Popular"/>
              <Section2 title="Collections" id="collections" top="60%"/>
            </>} />
            <Route path='/about' element={
              <div>
                <p className='container p-4'>Coming soon</p>
              </div>
            } />
            <Route path='/details' element={<Details />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/credits' element={<Credits />} />
            <Route path='/collections' element={<Section2 title="Collections" id="collections" top="37%"/>} />
        </Routes>
        <Footer />
    </Router>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import Menu from './assets/components/Menu/Menu'
import Navbar from './assets/components/Navbar/Navbar'
import Hero from './assets/components/Hero/Hero'
import Section from './assets/components/Section/Section'
import Section2 from './assets/components/Section/Section2'
import Footer from './assets/components/Footer/Footer'
import { BrowserRouter as Router,Routes,Route, Link, useNavigate } from 'react-router-dom'
import Details from './assets/components/Details/Details'
import Admin from './assets/components/Admin/Admin'
import AdminEdit from './assets/components/Admin/AdminEdit'
import AdminDelete from './assets/components/Admin/AdminDelete'
import Register from './assets/components/Register/Register'
import Login from './assets/components/Register/Login'
import Credits from './assets/components/Credits/Credits'
import ContactUs from './assets/components/ContactUs/ContactUs'



function App() {
  const [showMenu,setShowMenu]=useState(false)
  const [temp,setTemp]=useState('')
  const [isAdmin,setIsAdmin]=useState(false)
  const [designs,setDesigns]=useState([])
  const [loading,setLoading]=useState(true)
  const [empty,setEmpty]=useState(false)
  // const [designs,setDesigns]=useState(JSON.parse(localStorage.getItem('deaceDesigns')))
  let user
  useEffect(()=>{
        fetch('http://localhost:5000/api/designs',{
          method:"GET"
        }).then(res=>{
          if(res.ok){
            return res.json()
          }
          throw Error("Couldn't fetch")
        }).then((data)=>{
          setLoading(false)
          setDesigns(data.designs)
          if(!data.designs[0]){
            setEmpty(true)
          }
        }).catch((err)=>{
          console.log(err)
        })
        let d=new Date()
        d.setTime(d.getTime())
        d=d.toISOString()
        user=JSON.parse(localStorage.getItem('deace'))
        if(user){
          if(user.expiresIn>d){
            setIsAdmin(user.admin)
            setTemp(user.user)
            return
          }else{
            localStorage.removeItem('deace')
          }
        }
  },[])
  return (
    <>
    <Router>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu}/>
        {showMenu && <Menu setShowMenu={setShowMenu}/>}
        <Routes>
            <Route path='/' element={<>
              <Hero />
              <Section title="Popular" designs={designs} loading={loading} empty={empty}/>
              <Section2 title="Collections" id="collections" top="60%"/>
            </>} />
            <Route path='/about' element={
              <div>
                <p className='container p-4'>Coming soon</p>
              </div>
            } />
            <Route path='/details/:designName' element={<Details designs={designs} />} />
            <Route path='/admin' element={<Admin isAdmin={isAdmin} username={temp}/>
              } />
            <Route path='/admin/edit' element={<AdminEdit isAdmin={isAdmin} username={temp} designs={designs} loading={loading} empty={empty}/>
              } />
            <Route path='/admin/delete' element={<AdminDelete isAdmin={isAdmin} username={temp} designs={designs} loading={loading} empty={empty}/>
              } />
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

import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Abinav from './pages/Abinav'
// import Akarsh from './pages/Akarsh'
// import Akshay from './pages/Akshay'
// import Anandhu from './pages/Anandhu'


function App() {


  return (
    <>
      <div className="App">
        <Header />
        
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/Abinav' element={<Abinav />} ></Route>
            {/* <Route path='/Akarsh' element={<Akarsh />}></Route>
            <Route path='/Akshay' element={<Akshay />}></Route>*/}
            <Route path='/Anandhu' element={<Anandhu />}></Route> 
          </Routes>
       
        <Footer />
      </div>
    </>
  )
}

export default App

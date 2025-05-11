import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './Home/MainPage'
import Footer from './Home/Footer'
import Login from './Login/Login'
import Singup from './RegisterSinUp/Singup'
import Prueba from './Paginaprueba/Prueba'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/Singup" element={<Singup></Singup>}></Route>
          <Route path="/Prueba" element={<Prueba></Prueba>}></Route>
        </Routes>
      </Router>
      <Footer></Footer>


    </div>

  )
}

export default App

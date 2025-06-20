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
import MainUsuario from './InfoUsuario/MainUsuario'
import InfoUsu from './InfoUsuario/InfoUsu'
import Rutinas from './Rutinas/Rutinas'
import Nutrifit from './Nutrifit/Nutrifit'
import AdsFit from './Nutrifit/AdsFit'
import Nutrifit1 from './Nutrifit/Nutrifit1'
import Nutrifit2 from './Nutrifit/Nutrifit2'
import Nutrifit3 from './Nutrifit/Nutrifit3'
import Nutrifit4 from './Nutrifit/Nutrifit4'



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
          <Route path="/MainUsuario" element={<MainUsuario></MainUsuario>}></Route>
          <Route path="/InfoUsu" element={<InfoUsu></InfoUsu>}></Route>
          <Route path="/Rutinas" element={<Rutinas></Rutinas>}></Route>
          <Route path="/Nutrifit" element={<Nutrifit></Nutrifit>}></Route>
          <Route path="/AdsFit" element={<AdsFit></AdsFit>}></Route>
          <Route path="/Nutrifit1" element={<Nutrifit1></Nutrifit1>}></Route>
          <Route path="/Nutrifit2" element={<Nutrifit2></Nutrifit2>}></Route>
          <Route path="/Nutrifit3" element={<Nutrifit3></Nutrifit3>}></Route>
          <Route path="/Nutrifit4" element={<Nutrifit4></Nutrifit4>}></Route>
        </Routes>
      </Router>
      <Footer></Footer>


    </div>

  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importar los componentes necesarios
import Home from '/src/views/Home.jsx';
import Prueba from '/src/views/Prueba.jsx';
import NewPregunta from '/src/views/NewPregunta';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="prueba" element={<Prueba />} />
          <Route path="nueva-pregunta" element={<NewPregunta/>} />
      </Route>
    </Routes>
    </BrowserRouter >

  )
}

export default App

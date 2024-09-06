import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Projects from './Component/Projects/Projects'
import Themes from './Component/Themes/Themes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Themes />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

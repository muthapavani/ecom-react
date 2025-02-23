
import { Route, Routes } from 'react-router-dom'
import Navbar from './comp/nav'
import Services from './comp/pages/Services'
import Home from './comp/pages/home'
import About from './comp/pages/about'
import Not from './comp/pages/notfound'
import Viewuser from './comp/pages/viewuser'
import Login from './comp/pages/login'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='*' element={<Not/>}/>
        <Route path='/viewuser/:id' element={< Viewuser/>}/>
        <Route path='/login' element={< Login/>}/>
      </Routes>
     
    </>
  )
}

export default App

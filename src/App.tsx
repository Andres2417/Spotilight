import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import Search from './pages/SearchPage'
import Info from './pages/InfoSong'
function App() {





  return (
    <div className='container'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/infosong/:id' element={<Info></Info>}></Route>
        <Route path='/Search/:id' element={<Search></Search>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

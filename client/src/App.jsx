import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from 'axios'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'

//imports of all component pages
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Router>
        {/* custom navar to show on all pages*/}
      <header>
        <a href='/' className='logo'>Nomad</a>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Sign up</Link></li>
          <li><a href='/'>Explore</a></li>
        </ul>
      </header>

        <Routes>
          <Route path=''  element= {<HomePage/>}/>
          <Route path='login/' element= {<LoginPage/>}/>
          <Route path='signup/' element= {<SignUpPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

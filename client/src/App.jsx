import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Navbar from 'react-bootstrap/NavBar'
import Container from 'react-bootstrap/Container'

//imports of all component pages
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import ExplorePage from './components/ExplorePage'


function App() {
  const [user, setUser] = useState(false)
  // Session cookies and axios authentication
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  const csrftoken = getCookie('csrftoken');
  axios.defaults.headers.common["X-CSRFToken"]=csrftoken


  function logout () {
    axios.post('/api/logout/')
    .then(response => {
      window.location.reload(false)
    })
  }
  
  function checkUserState() {
    axios.post('/api/isloggedin/').then(response => {
      setUser(response.data.IsLoggedIn)
    })
  }

  useEffect(() => {
    checkUserState()
  })

  return (
    <div className="App">  
      <Router>
        {/* custom navar to show on all pages*/}
      <header>
        <a href='/' className='logo'>Nomad</a>
        <ul>
          <li><a href='/'>Home</a></li>
            {user?
              <li><a href='/explore'>Explore</a></li>
              :
              <li><Link to='/signup'>Sign up</Link></li>
          }
            {user?
              <li><Button variant='dark' onClick={logout}>Logout</Button></li>
              :
              <li><Link to='/login'>Login</Link></li>
          }
      
        </ul>
      </header>

        <Routes>
          <Route path=''  element= {<HomePage/>}/>
          <Route path='login/' element= {<LoginPage/>}/>
          <Route path='signup/' element= {<SignUpPage/>}/>
          <Route path='explore/' element= {<ExplorePage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

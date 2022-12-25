import React from 'react'
import './LoginPage.css'
import axios from "../api/axios"
import { useEffect, useState, useRef } from "react"
import {useNavigate} from 'react-router-dom'

import Stars from '../assets/stars.png'
import Moon from '../assets/moon.png'
import MountainsBehind from '../assets/mountains_behind.png'
import MountainsFront from '../assets/mountains_front.png'

export default function LoginPage(props) {
    const navigate = useNavigate()
    const LOGIN_URL = '/api/login/'

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate('/', 0)
        }
    function login(){
        axios.post(LOGIN_URL, {email: user, password: password})
        .then( response => {
            console.log(user, password)
            console.log(response.data)
        })
    }

    return (
        <section>
            <img src={Stars} id='stars'/>
            <img src={Moon} id='moon'/>
            <img src={MountainsBehind} id='mountains_behind'/>
            <img src={MountainsFront} id='mountains_front'/>
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSubmit}>
                    <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Log In</h3>
                    <div className="form-group mt-3">
                        <label htmlFor='email'>Email address</label>
                        <input
                        id='email'
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor='password'>Password</label>
                        <input
                        id='password'
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={login}>
                        Submit
                        </button>
                    </div>
                    </div>
                </form>
            </div>
            
        </section>
    )
}
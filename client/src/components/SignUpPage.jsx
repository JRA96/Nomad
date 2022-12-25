import React from 'react'
import './SignUpPage.css'
import axios from "axios"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import os from 'os'

import Stars from '../assets/stars.png'
import Moon from '../assets/moon.png'
import MountainsBehind from '../assets/mountains_behind.png'
import MountainsFront from '../assets/mountains_front.png'

export default function SignUpPage(props) {
    const navigate = useNavigate()
    const SIGN_UP_URL = '/api/signup/'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        navigate('/login')
    }

    function addUser() {
        axios.post(SIGN_UP_URL, {email, password})
            .then(response =>{
                console.log(response)
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
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        value={email}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        value={password}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type='submit' className="btn btn-primary" onClick={addUser}>
                        Submit
                        </button>
                    </div>
                    </div>
                </form>
            </div>
            
        </section>
    )
}
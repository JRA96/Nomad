import React from 'react'
import './HomePage.css'
import axios from "axios"
import { useEffect, useState } from "react"
import {Link, useLocation} from 'react-router-dom'

import Stars from '../assets/stars.png'
import Moon from '../assets/moon.png'
import MountainsBehind from '../assets/mountains_behind.png'
import MountainsFront from '../assets/mountains_front.png'

export default function ExplorePage(props) {
    return (
        <section>
            <img src={Stars} id='stars'/>
            <img src={Moon} id='moon'/>
            <img src={MountainsBehind} id='mountains_behind'/>
            <img src={MountainsFront} id='mountains_front'/>
            <h1 className='greeting'>Explore</h1>
        </section>
        
    )
}
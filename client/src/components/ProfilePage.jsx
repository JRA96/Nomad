import React from 'react'
import './ProfilePage.css'

import Stars from '../assets/stars.png'
import Moon from '../assets/moon.png'
import MountainsBehind from '../assets/mountains_behind.png'
import MountainsFront from '../assets/mountains_front.png'

export default function ProfilePage(props) {
    let all_trips = props.trips

    if (all_trips) {
        all_trips.map((trip) => (
            console.log(trip.starting_location)
        ))
    }


    return (
        <section>
            <img src={Stars} id='stars'/>
            <img src={Moon} id='moon'/>
            <img src={MountainsBehind} id='mountains_behind'/>
            <img src={MountainsFront} id='mountains_front'/>
            <div className='profile-container'>
                <div className='container-content'>
                    <h1 className='user'>{props.name}</h1>
                    <div className='saved-trips'>
                        <label>
                            Trips:
                        </label>
                        <div className='trip-content'>
                            {all_trips?
                            <div>
                                {all_trips.map((trip) => (
                                    <ul>
                                        <p>
                                            {trip.starting_location} to {trip.end_location}
                                            
                                        </p>
                                    </ul>
                                ))}
                            </div>
                            :
                            <p>No saved trips</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
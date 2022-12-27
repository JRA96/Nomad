import React from "react"
import './Distance.css'

const secondsPerHour = 60 * 60

type DistanceProps = {
    leg: google.maps.DirectionsLeg
}

export default function Distance({leg}: DistanceProps) {
    if (!leg.distance || !leg.duration) return null;



    return (
        <ul>
            <p>Distance: {leg.distance.value / 1000}km</p>
            <p>Duration: {Math.floor(leg.duration.value / secondsPerHour)} hours</p>
        </ul>

    )
}
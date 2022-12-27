import React from 'react'
import './ExplorerPage.css'
import {LoadScript, GoogleMap, Marker, DirectionsRenderer} from '@react-google-maps/api'
import Button from 'react-bootstrap/Button';
import { useState, useMemo, useCallback, useRef } from "react"
import Places from './Places'
import Distance from './Distance'

import Stars from '../assets/stars.png'
import Moon from '../assets/moon.png'
import MountainsBehind from '../assets/mountains_behind.png'
import MountainsFront from '../assets/mountains_front.png'

export default function ExplorePage(props) {
    const [userLocation, setUserLocation] = useState()
    const [office, setOffice] = useState()
    const [directions, setDirections] = useState()
    const [nearbyLocations, setNearbyLocations] = useState()
    const mapRef = useRef()
    const center = useMemo(() => ({lat: 43, lng: -80}), [])
    const options = useMemo(() =>({
        mapId: '3b46d38663ef563d',
        disableDefaultUI: true,
        clickableIcons: false,
    }), [])
    const onLoad = useCallback(map => (mapRef.current = map), [])

    function fetchDirections(position) {
        if (!office) {
            return
        }
        const service = new google.maps.DirectionsService()
        service.route({
            origin: userLocation,
            destination: office,
            travelMode: google.maps.TravelMode.DRIVING
        },
        (result, status) => {
            if (status ==='OK' && result) {
                setDirections(result)
            }
        })
    }
    
    function nearbySearch(position) {
        if (!office || !userLocation) {
            return
        }
        const service = new google.maps.places.PlacesService()
        service.nearbySearch({
            location: office,
            radius: 10000
        },
        (result, status) => {
            if (status ==='OK' && result) {
                setNearbyLocations(result)
                console.log(result)
            }
            else{
                console.log(status)
            }
        })
    }

    return (
        
        <section>
            <img src={Stars} id='stars'/>
            <img src={Moon} id='moon'/>
            <img src={MountainsBehind} id='mountains_behind'/>
            <img src={MountainsFront} id='mountains_front'/>
            <div className='container'>
                <LoadScript googleMapsApiKey="AIzaSyCNDZg4aWfQRa1nRkPKZbNqMlAbhULI5Nw"
                libraries={['places']}>
                    <div className='controls'>
                        <h1>Search</h1>
                        <Places setOffice={(position) => {
                            setUserLocation(position)
                            mapRef.current.panTo(position)
                        }}/>
                        <Places setOffice={(position) => {
                            setOffice(position)
                            mapRef.current.panTo(position)
                        }}/>
                        <Button variant='primary' size='lg' active onClick={() => {
                            fetchDirections(userLocation)
                        }}>Get Directions</Button>
                        {directions && <Distance leg={directions.routes[0].legs[0]}/>}
                    </div>
                    <div className='map'>
                    <GoogleMap
                        mapContainerClassName='map-container'
                        center={center}
                        zoom={10}
                        options={options}
                        onLoad={onLoad}
                        >
                        {directions && <DirectionsRenderer directions={directions}/>}
                        {office && <Marker position={office}/>}
                        {userLocation && <Marker position={userLocation}/>}
                    </GoogleMap>
                    </div>
                </LoadScript>
            </div>
        </section>
        
    )
}
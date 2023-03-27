import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import Markers from '../components/Markers'
import places from '../assets/coordsZones.json'

const Locations = () => {
  const [state, setState] = useState({
    currentLocation: { lat: '36.09267309097239', lng: '-115.09530321913743' },
    zoom: 13,
  })

  const location = useLocation()

  useEffect(() => {
    if (location.state && location.state.latitude && location.state.longitude) {
      const currentLocation = {
        lat: location.state.latitude,
        lng: location.state.longitude,
      }
      setState({ ...state, currentLocation })
    }
  },[location.state,state])

  return (
    <MapContainer center={state.currentLocation} zoom={state.zoom} style={{ height: '100vh' }}>
      <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Markers places={places}  currentLocation={state.currentLocation} />
    </MapContainer>
  )
}

export default Locations

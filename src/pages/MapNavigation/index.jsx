import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Map, TileLayer, Popup, Marker, useLeaflet } from 'react-leaflet'
import L from 'leaflet'
import { renderToString } from 'react-dom/server'

import api from '../../services/api'

import Header from '../../components/Header'
import Menu from './Menu'
import { iconPerson } from './icon'

import 'leaflet/dist/leaflet.css'
import './style.css'

const MapNavigation = () => {
  const [initialPos, setInitialPos] = useState([0, 0])
  const [stores, setStores] = useState([{}])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      setInitialPos([latitude, longitude])
    })
  }, [])

  /*
  useEffect(() => {
    api
      .get('nearby_companies', {
        params: {
          latitude: initialPos[0],
          longitude: initialPos[1],
          distance: 100000,
        },
      })
      .then((response) => {
        setStores(response.data)
      })
  }, [])
  */

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords

      const tmp = [
        { name: '1', lat: latitude, lgn: longitude },
        { name: '2', lat: latitude + 0.1, lgn: longitude + 0.1 },
        { name: '3', lat: latitude + 0.2, lgn: longitude },
        { name: '4', lat: latitude, lgn: longitude + 0.2 },
        { name: '5', lat: latitude - 0.1, lgn: longitude - 0.2 },
      ]
      setStores(tmp)
    })
  }, [])

  function renderMarkers() {
    console.log(stores)

    return stores.map((store) => (
      <Marker
        position={[store.lat, store.lgn]}
        icon={iconPerson}
        key={store.name}
      >
        <Popup>{store.name}</Popup>
      </Marker>
    ))
  }

  return (
    <div id="map-navigation">
      <Header />

      <div className="leaflet-container" id="map">
        <Map center={initialPos} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          <Menu />

          {stores.length > 1 && renderMarkers()}
        </Map>
      </div>
    </div>
  )
}

export default MapNavigation

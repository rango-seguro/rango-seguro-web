import React, { useEffect, useState } from 'react'
import { Map, TileLayer, Popup, Marker } from 'react-leaflet'

import api from '../../services/api'

import Header from '../../components/Header'
import Menu from './Menu'
import { iconPerson } from './icon'

import 'leaflet/dist/leaflet.css'
import './style.css'

import cover1 from '../../assets/cover1.png'
import cover2 from '../../assets/cover2.png'
import cover3 from '../../assets/cover3.png'
import cover4 from '../../assets/cover4.png'
import cover5 from '../../assets/cover5.png'
import term from '../../assets/icon-term.png'
import masc from '../../assets/badges/masc.png'
import alcool from '../../assets/badges/alcool.png'
import cook from '../../assets/badges/cook-record.png'
import tapete from '../../assets/badges/tapete.png'
import lav from '../../assets/badges/lavat.png'

const MapNavigation = () => {
  const [initialPos, setInitialPos] = useState([-13.005849, -38.509502])
  const [stores, setStores] = useState([{}])

  /*
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      setInitialPos([latitude, longitude])
    })
  }, [])
  */

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
    const tmp = [
      {
        name: 'Sertão do Mar',
        lat: -13.008006,
        lgn: -38.509494,
        img: cover1,
        dist: 1,
        area: 150,
        covid: 0,
      },
      {
        name: 'Caranguejo de Ondina',
        lat: -13.008011,
        lgn: -38.508637,
        img: cover2,
        dist: 3,
        area: 200,
        covid: 1,
      },
      {
        name: 'Speed 24h',
        lat: -13.010243,
        lgn: -38.511212,
        img: cover3,
        dist: 5,
        area: 780,
        covid: 3,
      },
      {
        name: 'Chumbinho UFBA',
        lat: -13.002319,
        lgn: -38.509659,
        img: cover4,
        dist: 0.8,
        area: 620,
        covid: 0,
      },
      {
        name: 'Churros da Aninha',
        lat: -13.002406,
        lgn: -38.50666,
        img: cover5,
        dist: 2,
        area: 350,
        covid: 4,
      },
    ]
    setStores(tmp)
  }, [])

  function renderMarkers() {
    console.log(stores)

    return stores.map((store) => (
      <Marker
        position={[store.lat, store.lgn]}
        icon={iconPerson}
        key={store.name}
      >
        <Popup className="request-popup">
          <div className="p-1">
            <div className="row row-each">
              <img
                src={store.img}
                alt="imagem do restaurante"
                className="w-50 rounded-circle col-sm-5"
              />
              <div className="col-sm-3">
                <h6 className="text-info mb-0">{store.name}</h6>
                <b className="text-secondary"> Restaurante italiano</b>
                <br />
                <a
                  href="#"
                  alt="km de distância"
                  className="btn btn-outline-info btn-sm mt-3"
                >
                  {store.dist} km distância
                </a>
              </div>
            </div>

            <h4 className="px-1 pt-1 pb-0 text-secondary">
              <img src={term} width="8%" alt="" /> Rangômetro
            </h4>
            <br />
            <div className="row px-1 pt-0 text-center">
              <span
                class="fa-stack fa-2x badger"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Conquista Orgânicos"
              >
                <i class="fa fa-certificate fa-stack-2x golden-badge"></i>
                <img
                  src={masc}
                  alt=""
                  width="10%"
                  className="fa fa-sm fa-stack"
                />
              </span>
              <span
                class="fa-stack fa-2x badger"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Conquista Social"
              >
                <i class="fa fa-certificate fa-stack-2x silver-badge"></i>
                <img
                  src={alcool}
                  alt=""
                  width="5%"
                  className="fa fa-sm fa-stack"
                />
              </span>
              <span
                class="fa-stack fa-2x badger"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Conquista de Vendas"
              >
                <i class="fa fa-certificate fa-stack-2x bronze-badge"></i>
                <img
                  src={cook}
                  alt=""
                  width="5%"
                  className="fa fa-sm fa-stack"
                />
              </span>
              <span
                class="fa-stack fa-2x badger"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Conquista Social"
              >
                <i class="fa fa-certificate fa-stack-2x bronze-badge"></i>
                <img
                  src={lav}
                  alt=""
                  width="5%"
                  className="fa fa-sm fa-stack"
                />
              </span>

              <h4 className="p-1 ">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>{' '}
                {store.covid} Casos de Covid19 na vizinhança!
              </h4>
            </div>
            <h4 className="mt-1 btn btn-block btn-info">
              <i class="fa fa-cutlery" aria-hidden="true"></i> Cardápio
            </h4>
            <hr />
            <h6>Área do estabelecimento: {store.area}m²</h6>
            <h4 className="p-1 text-secondary">
              <i class="fa fa-users fa-2x" aria-hidden="true"></i> Lotação: 3 de
              10
            </h4>
            <div class="progress">
              <div
                class="progress-bar w-25 bg-info"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </Popup>
      </Marker>
    ))
  }

  return (
    <div id="map-navigation">
      <Header />

      <div className="leaflet-container" id="map">
        <Map center={initialPos} zoom={16}>
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

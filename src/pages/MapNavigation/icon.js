import L from 'leaflet'

const iconPerson = new L.Icon({
  iconUrl: require('../../assets/marker.svg'),
  iconRetinaUrl: require('../../assets/marker.svg'),
  iconAnchor: null,
  popupAnchor: [0, -20],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(40, 50),
  className: 'leaflet-div-icon',
})

export { iconPerson }

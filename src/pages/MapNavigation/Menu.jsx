import { useLeaflet } from 'react-leaflet'
import L from 'leaflet'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { renderToString } from 'react-dom/server'

const Menu = (props) => {
  const { map } = useLeaflet()

  useEffect(() => {
    const menu = L.control({ position: 'bottomright' })

    menu.onAdd = () => {
      const div = L.DomUtil.create('div', 'menu-container')

      //const reactLink = renderToString(<Link to="/outlet"> Lojas </Link>)

      div.innerHTML = `
        <a className="p-1" href="/outlet" data-toggle="tooltip" data-placement="top" title="Lojas"> <i class="fa fa-3x fa-cutlery"></i>  </a>
      `
      return div
    }

    menu.addTo(map)
  }, [])

  return null
}

export default Menu

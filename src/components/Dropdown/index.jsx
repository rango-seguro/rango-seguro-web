import React, { useState } from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './style.css'

const Dropdown = () => {
  const [open, setOpen] = useState(1)

  const items = [
    {
      name: 'login',
    },
    {
      name: 'cadastrar',
    },
  ]

  return (
    <div className="dd-wrapper">
      <div className="dd-header" tabIndex="-1">
        <div className="dd-header-title">
          <FiMoreVertical />
        </div>

        <ul className="dd-list">
          <Link to={items[0].name}>
            <li className="dd-list-item">{items[0].name}</li>
          </Link>
          <Link to={items[1].name}>
            <li className="dd-list-item">{items[1].name}</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown

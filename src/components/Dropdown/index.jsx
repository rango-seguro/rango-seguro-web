import React, { useState } from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import { Link } from 'react-router-dom'

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

  function toggleList() {
    if (open === 1) setOpen(0)
    else setOpen(1)
  }

  return (
    <div className="dd-wrapper">
      <div className="dd-header" onClick={() => toggleList()}>
        <div className="dd-header-title">
          <FiMoreVertical />
        </div>
      </div>
      {!open && (
        <ul className="dd-list">
          {items.map((item) => (
            <Link to={item.name}>
              <li className="dd-list-item" key={item.name}>
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown

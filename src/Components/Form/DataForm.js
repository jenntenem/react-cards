import React from 'react'

export default function List({name, lastname}) {

  return (
    <React.Fragment>
      <li className="list-group-item">{name + ' ' + lastname}</li>
    </React.Fragment>
  )
}

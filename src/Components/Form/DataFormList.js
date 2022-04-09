import React, {useState} from 'react'

import Data from './DataForm'

export default function List({listPerson}) {

  return (
    <div className="card col-sm-2" style={{width: "30rem"}}>
      <div className="card-header">
        Person List
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">as</li>
        {
          listPerson.map((item, index) => (
            <Data 
              key={index}
              name={item.name}
              lastname={item.lastname}
            />
          ))
        }
      </ul>
    </div>
  )
}

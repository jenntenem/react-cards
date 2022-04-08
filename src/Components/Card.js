import React from 'react'
import PropTypes from 'prop-types'

import './cards.css'

function Card({card}) {
  console.log(card)
  return (
    <div className='card text-center animate__animated animate__fadeInUp'>
      <div className="card-body">
        <div className='overflow-hidden'>
          <img src={card.image} alt='Card' className='img-responsive card-img-top' style={{height: '225px'}}/>
        </div>
          
        <h4 className='card-title'>{card.title}</h4>
        <p className='card-text text-secondary'>
          {card.text}
        </p>
        <a 
          className='btn btn-outline-secondary'
          href={card.url} 
          rel='noopener noreferrer'
          target='_blank'>
            Go to this WebSite
        </a>
      </div>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired
}

export default Card
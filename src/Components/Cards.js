import React from 'react'
import Card from './Card'

import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'

const cards = [
  {
    id: 1,
    title: 'Card 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit ipsum, officiis, laboriosam quae voluptas praesentium aperiam error fuga mollitia, voluptatem tempora laudantium deserunt quaerat in excepturi nulla ex adipisci.',
    image: card1,    
    url: 'https://www.javascripttutorial.net/',
  },
  {
    id: 2,
    title: 'Card 2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit ipsum, officiis, laboriosam quae voluptas praesentium aperiam error fuga mollitia, voluptatem tempora laudantium deserunt quaerat in excepturi nulla ex adipisci.',
    image: card2,
    url: 'https://www.javascripttutorial.net/',
  },
  {
    id: 3,
    title: 'Card 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit ipsum, officiis, laboriosam quae voluptas praesentium aperiam error fuga mollitia, voluptatem tempora laudantium deserunt quaerat in excepturi nulla ex adipisci.',
    image: card3,
    url: 'https://www.javascripttutorial.net/',
  },
  {
    id: 4,
    title: 'Card 4',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate velit ipsum, officiis, laboriosam quae voluptas praesentium aperiam error fuga mollitia, voluptatem tempora laudantium deserunt quaerat in excepturi nulla ex adipisci.',
    image: card4,    
    url: 'https://www.javascripttutorial.net/',
  }
] 
function Cards() {
  return (
    <div className='container d-flex justify-content-center h-100 align-items-center'>
      <div className="row">
        {
          cards.map( card => (
            <div className="col-md-3" key={card.id}>
              <Card card={card} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cards
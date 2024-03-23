import './Card.scss'

import React from 'react'

const Card = (props) => {
    const {image}=props
  return (
    <div className='card'><img src={image} alt="Description of Image 1" /></div>
  )
}

export default Card
import { useState } from 'react'
import Card from './Card'
import './CarouselSection.scss'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import img10 from '../../assets/img10.jpg'
import img11 from '../../assets/img11.jpg'

function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardArray = [<Card image={img1} />, <Card image={img2} />, <Card image={img3} />, <Card image={img4} />, <Card image={img5} />, <Card image={img6} />, <Card image={img7} />, <Card image={img8} />, <Card image={img9} />, <Card image={img10} />, <Card image={img11} />]

  const shiftRight = () => {
    setCurrentIndex((currentIndex - 1 + cardArray.length) % cardArray.length);
  }

  const shiftLeft = () => {
    setCurrentIndex((currentIndex + 1) % cardArray.length);
  }

  return (
    <>
      <div className='card-container'>
        <div className='All-Cards'>
          {cardArray[(currentIndex + 2) % cardArray.length]}
          {cardArray[(currentIndex + 3) % cardArray.length]}
          {cardArray[(currentIndex + 4) % cardArray.length]}
          {cardArray[(currentIndex + 5) % cardArray.length]}
          {cardArray[(currentIndex + 6) % cardArray.length]}
        </div>
      </div>
      <div className='buttons'>
        <button onClick={shiftLeft}>&lt;</button>
        <button onClick={shiftRight}>&gt;</button>
      </div>
    </>
  )
}

export default CarouselSection

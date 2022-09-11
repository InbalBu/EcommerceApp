import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import shoes2 from './shoes2.jpg'
import shoes3 from './shoes3.jpeg'
import shoes4 from './shoes4.jpg'
import shoes5 from './shoes5.png'
import shoes7 from './shoes7.png'
import shoes10 from './shoes10.png'


import styles from './Carousel.module.css'
const MyCarousel = () => {
    
  return (
    <Carousel className={styles.Carousel}>
    <Carousel.Item className={styles.carouselItem}>
      <img 
<<<<<<< HEAD
        width={900} height={650} 
=======
       width={900} height={650} 
>>>>>>> 5c25b9827f23b3325a9e7e7605fcc73850ad0148
        className="d-block w-100"
        src={shoes5}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className={styles.carouselHeader}></h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      width={900} height={650}
        className="d-block w-100"
        src={shoes7}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3 className={styles.carouselHeader}></h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      width={900} height={650}
        className="d-block w-100"
        src={shoes10}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3 className={styles.carouselHeader}></h3>
       
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default MyCarousel
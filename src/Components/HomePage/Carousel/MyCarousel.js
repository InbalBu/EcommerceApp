import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import shoes from './shoes.jpg'
import shoes2 from './shoes2.jpg'
import shoes3 from './shoes3.jpeg'
import shoes4 from './shoes4.jpg'
import styles from './Carousel.module.css'
const MyCarousel = () => {
    
  return (
    <Carousel className={styles.Carousel}>
    <Carousel.Item className={styles.carouselItem}>
      <img width={900} height={650} 
        className="d-block w-100"
        src={shoes4}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className={styles.carouselHeader}>Extra Sales</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      width={900} height={650}
        className="d-block w-100"
        src={shoes2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3 className={styles.carouselHeader}>60% OFF</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
      width={900} height={650}
        className="d-block w-100"
        src={shoes3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3 className={styles.carouselHeader}>Ecofriendly</h3>
       
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default MyCarousel
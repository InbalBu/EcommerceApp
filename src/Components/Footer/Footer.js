import React from 'react'
import styles from './Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
   <div>
<div className={styles.footer}>
  <div className={styles.contain}>
  <div className={styles.col}>
    <h1>ShoeStore World</h1>
    <ul>
      <li>About us</li>
      <li>Resources</li>
      <li>Contact</li>
      <li>Blog</li>
    </ul>
  </div>
  <div className={styles.col}>
    <h1>Products</h1>
    <ul>
      <li>Shoes</li>
      <li>Shirts</li>
      <li>Accessories</li>
    </ul>
  </div>
  <div className={styles.col}>
    <h1>Information</h1>
    <ul>
      <li>Help Center</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <div className={styles.col}>
    <h1>Support</h1>
    <ul>
      <li>Contact us</li>
      <li>Whatapp Chat</li>
      <li>Open Ticket</li>
    </ul>
  </div>



</div>

</div>
<div className={styles.row}>
    <ul>
      <li className={styles.facebook}><FacebookIcon/></li>
      <li className={styles.twitter}><TwitterIcon/></li>
      <li className={styles.instagram}><InstagramIcon/></li>
    </ul>
  </div>
       
   </div>
  )
}
export default Footer
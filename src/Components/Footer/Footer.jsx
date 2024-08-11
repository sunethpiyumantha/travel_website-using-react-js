import React from 'react'
import './footer.css'
import { GiCircleSparks } from 'react-icons/gi'
import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div id="contact" className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">

          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1 className="flex">
              <GiCircleSparks className='icon'/>
              Travel .
              </h1>
            </a>
          </div>

          <div className="socials flex">
            <ImFacebook className='icon'/>
            <BsTwitter className='icon'/>
            <AiFillInstagram className='icon'/>
          </div>

        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </div>




        <div className="footerLinks">
          <span className="linkTitle">
            Helpful Links
          </span>
          <li>
            <a href="#destination">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Conditon</a>
          </li>
          <li>
            <a href="#">Privecy</a>
          </li>
        </div>




        <div className="footerLinks">
          <span className="linkTitle">
            Contact Us
          </span>
          <span className="phone">+94 76 787 8909</span>
          <span className="email">suneth20p@gmail.com</span>

        </div>

      </div>
    </div>
  )
}

export default Footer
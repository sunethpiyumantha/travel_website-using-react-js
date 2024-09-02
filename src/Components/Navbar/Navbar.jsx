import React, {useState} from 'react'
import './navbar.css'
import { GiCircleSparks } from "react-icons/gi"
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'


const Navbar = () => {
// CODE TO TOGGLE/SHOW navBar
  const [active, setActive] = useState('navBar')
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }

//CODE TO REMOVE Navbar
  const removeNav =()=>{
    setActive('navBar')
  }

  const [transparent, setTransparent] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    }
    else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)



  return (
    <section className="navBarSection">
      <div className={transparent}>
        
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className='flex'><GiCircleSparks className="icon"/>
            Travel .
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#home" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#product" className="navLink">Product</a>
            </li>

            <li className="navItem">
              <a href="#resources" className="navLink">Resources</a>
            </li>

            <li className="navItem">
              <a href="#blog" className="navLink">Blog</a>
            </li>

            <li className="navItem">
              <a href="#contact" className="navLink">Contact</a>
            </li>

            

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="#">Login</a>
              </button>
              <button className="btn">
                <a href="#">Sign Up</a>
              </button>
            </div>

          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </div>
    </section>
  )
}

export default Navbar
import React from 'react'
import './popular.css'
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from 'react-icons/bs'

import img from '../../Assets/p1.jpg'
import img2 from '../../Assets/p2.jpg'
import img3 from '../../Assets/p3.jpg'
import img4 from '../../Assets/p4.webp'
import img5 from '../../Assets/p5.jpg'
import img6 from '../../Assets/p6.jpg'
import img7 from '../../Assets/p7.jpg'
import img8 from '../../Assets/p8.jpg'

const Data = [
  {
    id:1,
    imgSrc:img,
    destTitle: 'Sigiriya',
    location: 'Central Province',
    grade: 'CuLTURAL RELAX',
  },

  {
    id:2,
    imgSrc:img2,
    destTitle: 'Kandy',
    location: 'ACentral Province',
    grade: 'CuLTURAL RELAX',
  },

  {
    id:3,
    imgSrc:img3,
    destTitle: 'Ella',
    location: 'Uva Province',
    grade: 'CuLTURAL RELAX',
  },

  {
    id:4,
    imgSrc:img4,
    destTitle: 'Galle',
    location: 'Southern Province',
    grade: 'CuLTURAL RELAX',
  },

  {
    id:5,
    imgSrc:img5,
    destTitle: 'Nuwara Eliya',
    location: 'Central Province',
    grade: 'CuLTURAL RELAX',
  },

  {
    id:6,
    imgSrc:img6,
    destTitle: 'Yala National Park',
    location: 'Southeastern region',
    grade: 'CuLTURAL RELAX',
  },

  {
    id:7,
    imgSrc:img7,
    destTitle: 'Anuradhapura',
    location: 'North Central Province',
    grade: 'CuLTURAL RELAX',
  },

  {
    id:8,
    imgSrc:img8,
    destTitle: 'Mirissa',
    location: 'Southern Province',
    grade: 'CuLTURAL RELAX',
  },
]

const Popular = () => {
  return (
    <section id="destination" className="popular section container">
      <div className="secContainer">

        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              From historical cities to natural specteculars, come see the best of the world!
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon'/>
          </div>
        </div>

        <div className="mainContent grid">

        {
          Data.map(({id,imgSrc,destTitle,location,grade})=>{
            return(
              <div className="singleDestination">
            <div className="destImage">

              <img src={imgSrc} alt="Image title"/>

              <div className="overlayarInfo">
                <h3>{destTitle}</h3>
                <p>
                  {location}
                </p>

                <BsArrowRightShort className='icon'/>
              </div>
            </div>
            <div className="destFooter">
              <div className="number">
                0{id}
              </div>

              <div className="destText flex">
                <h6>
                {destTitle}
                </h6>
                <span className="flex">
                  <span className="dot">
                    <BsDot className='icon'/>
                  </span>
                  Travel
                </span>
              </div>
            </div>
          </div>
            )
          })
        }
        
        </div>
        
      </div>
    </section>
  )
}

export default Popular
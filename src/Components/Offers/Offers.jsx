import React from 'react'
import './offers.css'
import { MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'


import img2 from '../../Assets/06.jpg'
import img3 from '../../Assets/07.jpg'
import img4 from '../../Assets/10.jpg'
import img5 from '../../Assets/09.jpg'
import img6 from '../../Assets/11.jpg'
import img7 from '../../Assets/11.jpg'

const Offer = [
  {
    id:1,
    imgSrc: img2,
    destTitle: 'Anuradhapura',
    location: 'Anuradhapura',
    price: '$1000'
  },
  {
    id:1,
    imgSrc: img3,
    destTitle: 'Anuradhapura',
    location: 'Anuradhapura',
    price: '$1000'
  },
  {
    id:1,
    imgSrc: img4,
    destTitle: 'Anuradhapura',
    location: 'Anuradhapura',
    price: '$1000'
  },
  {
    id:1,
    imgSrc: img5,
    destTitle: 'Anuradhapura',
    location: 'Anuradhapura',
    price: '$1000'
  },
  {
    id:1,
    imgSrc: img6,
    destTitle: 'Anuradhapura',
    location: 'Anuradhapura',
    price: '$1000'
  },
  {
    id:1,
    imgSrc: img7,
    destTitle: 'Anuradhapura',
    location: 'Anuradhapura',
    price: '$1000'
  },
]

const Offers = () => {
  return (
    <section id="product" className="offer container section">
      <div className="secContainer">

        <div className="secIntro">
          <h2 className="secTitle">
            Spacial Offers
          </h2>
          <p>
            From historical cities to natural specteculars, come see the best of the world!
          </p>
        </div>
        <div className="mainContent grid">

          {
            Offer.map(({id, imgSrc, destTitle, location, price})=>{
              return(
                <div className="singleOffer">
            <div className="destImage">
              <img src={imgSrc} alt={destTitle}/>
              <span className="discount">
                30% off
              </span>
            </div>
            <div className="offerBody">
              <div className="price flex">
                <h4>
                  {price}
                </h4>
                <span className="status">
                  For Rent
                </span>
              </div>

              <div className="amenities flex">

                <div className="singleAmentity flex">
                  <MdKingBed className='icon'/>
                  <small>2 Beds</small>
                </div>

                <div className="singleAmentity flex">
                  <MdBathtub className='icon'/>
                  <small>1 Bath</small>
                </div>

                <div className="singleAmentity flex">
                  <FaWifi className='icon'/>
                  <small>Wi-Fi</small>
                </div>

                <div className="singleAmentity flex">
                  <MdAirportShuttle className='icon'/>
                  <small>Shuttle</small>
                </div>
              </div>

              <div className="location flex">
                <MdLocationOn className='icon'/>
                <small>#450 Bank Town,{location}</small>
              </div>

              <button className="btn flex">
                View Details
                <BsArrowRightShort className='icon'/>
              </button>
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

export default Offers
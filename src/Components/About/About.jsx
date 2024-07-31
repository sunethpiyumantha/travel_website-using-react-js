import React from 'react'
import './about.css'

import img1 from '../../Assets/10.jpg'
import img2 from '../../Assets/11.jpg'
import img3 from '../../Assets/12.jpg'

import video from '../../Assets/video01.mp4'


const About = () => {
  return (
    <section id="resources" className="about section">
      <div className="secContainer">
        <h2 className="title">
          Why Hikings?
        </h2>
        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img1} alt="Image Name"/>

            <h3>100+ Mountains</h3>

            <p>
            Travel to your favourite city with respectful of the environment.Travel to your favourite city with respectful of the environment.
            </p>
          </div>

          <div className="singleItem">
            <img src={img2} alt="Image Name"/>

            <h3>1000+ Hikings</h3>

            <p>
            Travel to your favourite city with respectful of the environment.Travel to your favourite city with respectful of the environment.
            </p>
          </div>

          <div className="singleItem">
            <img src={img3} alt="Image Name"/>

            <h3>10000+ Customers</h3>

            <p>
            Travel to your favourite city with respectful of the environment.Travel to your favourite city with respectful of the environment.
            </p>
          </div>

        </div>

        <div className="videoCard container">
          <div className="cardContent grid">

            <div className="cardText">
              <h2>Wonderful House experiece in there!</h2>
              <p>The Advenchure subranking is based on an equally weighted average of scores from five country.</p>
            </div>

            <div className="cardVideo">
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
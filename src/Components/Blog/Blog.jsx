import React from 'react'
import './blog.css'
import { BsArrowRightShort } from 'react-icons/bs'

import img from '../../Assets/07.jpg'
import img2 from '../../Assets/08.jpg'
import img3 from '../../Assets/09.jpg'
import img4 from '../../Assets/10.jpg'


const Posts = [
  {
    id: 1,
    postImage: img,
    title: 'Beautiful Moroco,let us travel!',
    desc: 'The kindom of moroco is muslim country in in western North Africa.' ,
  },

  {
    id: 1,
    postImage: img2,
    title: 'Beautiful Moroco,let us travel!',
    desc: 'The kindom of moroco is muslim country in in western North Africa.' ,
  },

  {
    id: 1,
    postImage: img3,
    title: 'Beautiful Moroco,let us travel!',
    desc: 'The kindom of moroco is muslim country in in western North Africa.' ,
  },

  {
    id: 1,
    postImage: img4,
    title: 'Beautiful Moroco,let us travel!',
    desc: 'The kindom of moroco is muslim country in in western North Africa.' ,
  },

]


const Blog = () => {
  return (
    <section id="blog" className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Our Best Blog?
          </h2>
          <p>
            An insight to the incredible in the world.
          </p>
        </div>

        <div className="mainContainer grid">
          {
            Posts.map(({id,postImage,title,desc})=>{
              return(
                <div className="singlePost grid">
            <div className="imgDiv">
              <img src={postImage} alt="Image Name"/>
            </div>
            <div className="postDetails">
              <h3>
                {title}
              </h3>
              <p>
                {desc}
              </p>
            </div>
            <a href="#" className="flex">
              Read More
              <BsArrowRightShort className='icon'/>
            </a>
          </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Blog
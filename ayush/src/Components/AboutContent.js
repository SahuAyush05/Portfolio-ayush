import './AboutContent.css';
import React from 'react'
import { Link } from 'react-router-dom';
import Image1 from '../assets/Reactimg.jpeg';
import Image2 from '../assets/Reactimg2.jpeg';
const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who I am?</h1>
            <p>Iam a React Front-End Developer and a Competitive Programmer</p>
            <Link to={"/contact"}>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <div className='img-stack top'>
                        <img className="img" src={Image1} alt='Image1' />
                    </div>
                    <div className='img-stack bottom'>
                        <img className="img" src={Image2} alt='Image2' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;
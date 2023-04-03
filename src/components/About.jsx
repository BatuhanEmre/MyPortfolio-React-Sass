import React from 'react'
import './styles/About.scss';
import man1 from "./assets/man1.png";
import { Link } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';


const About = () => {
  return (
    <div className='about'>
        <Link to='/'>
                <ArrowBack className='arrow'/>
        </Link>

        <div className="about__container">


        <div className="about__text">
            <h2> About Me ! </h2>
            <p> I am Batuhan Emre Kopan I'm 24 I just graduated at Baskent University Department of 
            Management İnformation Systems GPA | 3.01. I did ınternshıp in ankara. as a frontend Developer.
            Bites and Teknoser.
            I am Batuhan Emre Kopan I'm 24 I just graduated at Baskent University Department of 
            Management İnformation Systems GPA | 3.01. I did ınternshıp in ankara. as a frontend Developer.
            Bites and Teknoser    
            I am Batuhan Emre Kopan I'm 24 I just graduated at Baskent University Department of 
            Management İnformation Systems GPA | 3.01. I did ınternshıp in ankara. as a frontend Developer.
            Bites and Teknoser.    
             </p>
        </div>

        <div className="about__img">
            <img src={man1} alt="" />
        </div>


        </div>


    </div>
  )
}

export default About
import React from 'react'
import man1 from './assets/man1.png';
import './styles/Section.scss';

const Section = () => {
  return (
    <div className='section'>

        <div className="section__container">


        <div className="section__img">
            <img src={man1} alt="" />
        </div>

        <div className="section__content">
                    <h1>Who is Batuhan Emre</h1>
                    <p>2 years experience in Web Development</p>
                    <p>2 years experience in Programming</p>
                    <p>Javascript Developer</p>
                    <p>React js Developer</p>
                </div>



        </div>

    </div>
  )
}

export default Section
import React from 'react'
import './Possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
        <div className="gpt3__possibility-image">
          <img src={possibilityImage} alt="possiblity" />
        </div>
        <div className="gpt3__possibility-content">
          <h4>Request Early Access for our Product</h4>
          <h1 className='gradient__text'>Possibilites of our products are endless</h1>
          <p>Words to fill the void of this text box. Filler words for this text box. Testing text for this text box.</p>
          <h4>Test text for this area</h4>
        </div>
    </div>
  )
}

export default Possibility
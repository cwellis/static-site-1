import React from 'react'
import './Header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className="gpt3__header-content">
          <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
          <p>This is sample text. Sample text for a static front end website/ application. Sample text is fun and easy to write, try it sometime.</p>

          <div className='gpt3__header-content__input'>
            <input type="email" placeholder='Your Email Address' />
            <button type='button'>Get Started</button>
          </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt='Showcasing how many users one this platform' />
          <p>1,111 people requested access in last 24 hours </p>
        </div>
      </div>

        <div className="gpt3__header-image">
          <img src={ai} alt='ai' />
        </div>

    </div>
  )
}

export default Header
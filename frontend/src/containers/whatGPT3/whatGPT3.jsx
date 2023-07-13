import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const whatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
        <div className="gpt3__whatgpt3-feature">
          <Feature title='What is GPT-3' text="This is sample text. It's even more fun now! Look at all this sample text here. Joyful isn't it." />
        </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <p>Explore the Library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
          <Feature title="Chatbots" text="Here you can find information regarding the product. And what we have to offer as a company." />
          <Feature title="Knowledgebase" text="Here you can find information on our knowledgebase. Read more, it's fun." />
          <Feature title="Education" text="Here you can find educational pieces on our products, and how to use them properly." />
        </div>
    </div>
  )
}

export default whatGPT3
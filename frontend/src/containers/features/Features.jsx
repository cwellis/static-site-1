import React from 'react'
import './Features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'Title for our product features 1',
    text: 'Text to showcase our products features 1'
  },
  {
    title: 'Title for our product features 2',
    text: 'Text to showcase our products features 2'
  },
  {
    title: 'Title for our product features 3',
    text: 'Text to showcase our products features 3'
  },
  {
    title: 'Title for our product features 4',
    text: 'Text to showcase our products features 4'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          This is a title to showcase our websites exciting new product. Continue reading to learn more.
        </h1>
        <p>If you like our products, join to have an opportunity at early access</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  )
}

export default Features
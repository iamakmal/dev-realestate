import React from 'react'
import Agent from './Agent'
import BestPlace from './BestPlace'
import Blog from './Blog'
import Deal from './Deal'
import Demo from './Demo'
import Requests from './Requests'
import Testimonial from './Testimonial'
import Hero from './Hero'
import Navbar from './Navbar'

export default function Home() {
  return (
    <>
      <div className="relative">
        <Hero />
        <div className="absolute inset-x-0 top-0 z-10">
          {/* <Navbar /> */}
        </div>
      </div>
      <BestPlace />
      <Demo />
      <Deal />
      <Agent />
      <Testimonial />
      <Requests />
      <Blog />
    </>
  )
}

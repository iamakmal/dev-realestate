import React from 'react'

export default function Hero() {
  return (
    <>
    <div className="relative h-screen flex items-center justify-end">
      <img src="hero.png" className="absolute inset-0 object-cover w-full h-full" />
      <div className="z-10 mr-48 mt-16">
        <h1 className="text-xl font-medium text-white text-center leading-[70px]">All Type Properties Are Published Here</h1>
        <h1 className="text-5xl font-medium text-white text-center font-prata">Find The Best Place To Be</h1>
        <div className="flex justify-center">
        <button className="btn bg-main text-white border-0 px-10 rounded-md">Start Exploring</button>
        </div>
      </div>
    </div>
  </>
  )
}

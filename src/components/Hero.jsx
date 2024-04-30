import React from 'react'

export default function Hero() {
  return (
    <>
    <div className="relative h-screen flex items-center justify-end">
      <img src="hero.jpg" className="absolute inset-0 object-cover w-full h-full" />
      <div className="z-10 mr-48 mt-16">
        <h1 className="text-xl font-medium text-white text-center leading-[70px]">All Type Properties Are Published Here</h1>
        <h1 className="text-5xl font-medium text-white text-center font-prata">Find The Best Place To Be</h1>
        <div className="flex justify-center">
        <button className="btn bg-main text-white border-0 px-8 rounded-md ">Start Exploring</button>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 bg-main text-white h-20">
        <div className="flex justify-center items-center ">
            <p className="">Don't See The City You Were Looking For? Help Us Out By Suggesting!</p>
        </div>
        <div className="flex justify-center items-center">
            <button className="btn btn-outline w-40 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            Suggest City
            </button>
        </div>
    </div>
  </>
  )
}

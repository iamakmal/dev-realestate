import React from 'react'

export default function Demo() {
  return (
    <>
       <h1 className="text-3xl text-center font-prata leading-[50px] mb-10">Eye Catching XStore Real Estate Demo</h1>
       <div className="grid md:grid-cols-4 justify-items-center">

        <div className="flex flex-col items-center text-center w-56">
            <img src="demo1.png"/>
            <h1 className="font-prata text-xl mt-5 mb-5">Develop Objective</h1>
            <p className="text-gray-400">Vestibulum lacinia arcu nulla. Class aptent tacitit sociasqu litr torquent per conubia</p>
        </div>

        <div className="flex flex-col items-center text-center w-56">
            <img src="demo2.png"/>
            <h1 className="font-prata text-xl mt-5 mb-5">Determine Resource</h1>
            <p className="text-gray-400">Ontry to pular belief Loram not simply random text has rot classical Latien litera</p>
        </div>

        <div className="flex flex-col items-center text-center w-56">
            <img src="demo3.png"/>
            <h1 className="font-prata text-xl mt-5 mb-5">Create A Timeline</h1>
            <p className="text-gray-400">There are many variations ofen passages of Lorem Ipsum avaible majority have suffered</p>
        </div>

        <div className="flex flex-col items-center text-center w-56">
            <img src="demo4.png"/>
            <h1 className="font-prata text-xl mt-5 mb-5">Finalize Plan</h1>
            <p className="text-gray-400">Iten is a long established fact that a reader will be distracted by the readable content</p>
        </div>

       </div>

       <div className="grid grid-cols-2 bg-main text-white h-20 mt-10">
        <div className="flex justify-center items-center ">
            <p className="text-2xl font-prata">Gorgeous Home For Sale In Greenville</p>
        </div>
        <div className="flex justify-center items-center">
            <div className="flex mx-10">
            <div>
            <img src="demoavatar.png"/>
            </div>
            <div className="ml-4">
                <p className="text-base">Martin Miller</p>
                <p className="text-sm">Our Agent</p>
            </div>
            </div>
            <button className="btn w-50 font-normal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            Discover More
            </button>
        </div>
    </div>
    </>
  )
}

import React from 'react'

export default function Deal() {
  return (
    <>
    <h1 className="text-3xl text-center font-prata leading-[50px] pt-10">Special Deal On Properties</h1>
    <h1 className="text-md text-center text-gray-400 mb-16">Properties are selected for discount. Choose any property from Deals</h1>
    <div className="grid md:grid-cols-2 justify-items-center">
    <div className="p-10 px-28 ">
        <div className="badge bg-main text-white rounded-none">30% OFF</div>
        <h1 className="text-2xl mb-5">Gorgeous Historic House For Sale</h1>
        <h1 className="text-xl text-main mb-5"><span className=" text-gray-500 text-lg line-through"> $6750.00 </span>&nbsp; $5500.00 </h1>
        <p className="text-gray-400 text-sm mb-5">Just steps away from QM2 express bus to Manhattan and locals buses; only minutes from the LIRR. Walkings distances to Bay Terrace Shopping Centers, Baybridge Common Shopping Center, pool clubs, movie theaters and tennis courts.</p>
        <button className="btn bg-main text-white font-normal border-0 px-5 rounded-sm mb-20">Order Now</button>
    </div>
    <div>
        <img src="deal.jpg" className="h-80 rounded-md"/>
    </div>
    </div>
    </>
  )
}

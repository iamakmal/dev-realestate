import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid';

export default function Details() {
  return (
    <>
      <div className="flex m-10 justify-around">
        <div className="card w-[900px] bg-base-100 shadow-xl">
          <figure><img src="d1.jpg" alt="villa" /></figure>
          <div className="card-body">
            <h2 className="text-3xl text-center font-prata">Historical Grand Family Villa Rio</h2>

          </div>
        </div>
        <div className="flex card w-96 bg-base-100 shadow-xl flex-col gap-5 text-xl p-10 h-fit">
        <div className="flex justify-center flex-row-reverse">
          <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
          <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
          <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
          <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
          <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
        </div>
        <p className="text-main flex justify-center"><span className="line-through"> $18,600.00 </span>&nbsp; $16,500.00 </p>
        <div className="flex justify-between text-gray-400">
            <p className="">BEDROOM:</p>
            <p className="">7 Rooms</p>
        </div>

        <div className="divider mt-1"></div>

        <div className="flex justify-between text-gray-400 -mt-4">
            <p className="">SQUARE FEET:</p>
            <p className="">3226</p>
        </div>

        <div className="divider mt-1"></div>

        <div className="flex justify-between text-gray-400 -mt-4">
            <p className="">LOCATION:</p>
            <p className="">89th St, London</p>
        </div>
        </div>
      </div>
    </>
  )
}

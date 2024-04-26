import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid';

export default function BestPlace() {

    return (
        <div className="bg-[#F9F9F9] mb-20">
            <h1 className="text-3xl text-center font-prata leading-[50px]">Searching For The Best Places?</h1>
            <h1 className="text-md text-center text-gray-400 mb-10">Handpicked properties by our Agents</h1>
            <div className="grid md:grid-cols-3 justify-items-center">

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="bp1.jpg" alt="house1" className="w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-lg text-center font-prata">Historical Grand Family Villa Rio</h2>
                        <div className="flex justify-center flex-row-reverse">
                            <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
                            <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
                            <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
                            <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
                            <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
                        </div>
                        <p className="text-main flex justify-center"><span className="line-through"> $18,600.00 </span>&nbsp; $16,500.00 </p>
                        <div className="flex text-gray-400">
                            <p className="flex justify-start">BEDROOM:</p>
                            <p className="flex justify-end">7 Rooms</p>
                        </div>
                        <div className="divider mt-1"></div>
                        <div className="flex text-gray-400 -mt-4">
                            <p className="flex justify-start">SQUARE FEET:</p>
                            <p className="flex justify-end">3226</p>
                        </div>
                        <div className="divider mt-1"></div>
                        <div className="flex text-gray-400 -mt-4">
                            <p className="flex justify-start">LOCATION</p>
                            <p className="flex justify-end">89th St, London</p>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="bp2.jpg" alt="house2" className="w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-lg text-center font-prata">Luxury Villa In Rego Park</h2>
                        <div className="flex justify-center flex-row-reverse">
                            <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
                            <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
                            <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
                            <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
                            <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
                        </div>
                        <p className="text-main flex justify-center">$125,000.00</p>
                        <div className="flex text-gray-400">
                            <p className="flex justify-start">BEDROOM:</p>
                            <p className="flex justify-end">8 Rooms</p>
                        </div>
                        <div className="divider mt-1"></div>
                        <div className="flex text-gray-400 -mt-4">
                            <p className="flex justify-start">SQUARE FEET:</p>
                            <p className="flex justify-end">2256</p>
                        </div>
                        <div className="divider mt-1"></div>
                        <div className="flex text-gray-400 -mt-4">
                            <p className="flex justify-start">LOCATION</p>
                            <p className="flex justify-end">54th St, London</p>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="bp3.jpg" alt="house1" className="w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-lg text-center font-prata">Boutique Space Greenville</h2>
                        <div className="flex justify-center flex-row-reverse">
                            <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
                            <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
                            <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
                            <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
                            <StarIcon className="h-5 w-5 peer peer-hover:text-yellow hover:text-yellow" />
                        </div>
                        <p className="text-main flex justify-center">$115,000.00 </p>
                        <div className="flex text-gray-400">
                            <p className="flex justify-start">BEDROOM:</p>
                            <p className="flex justify-end">6 Rooms</p>
                        </div>
                        <div className="divider mt-1"></div>
                        <div className="flex text-gray-400 -mt-4">
                            <p className="flex justify-start">SQUARE FEET:</p>
                            <p className="flex justify-end">4556</p>
                        </div>
                        <div className="divider mt-1"></div>
                        <div className="flex text-gray-400 -mt-4">
                            <p className="flex justify-start">LOCATION</p>
                            <p className="flex justify-end">81st St, London</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-center mt-10">
                <button className="btn bg-main text-white border-0 px-5 rounded-md mb-20">Load More</button>
            </div>
        </div>
    )
}

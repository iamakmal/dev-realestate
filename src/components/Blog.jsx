import React from 'react'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline'

export default function Blog() {
    return (
        <>
        <div className="bg-[#F9F9F9] pt-20 pb-20">
            <h1 className="text-3xl text-center font-prata leading-[50px] mb-10">Our Blog</h1>
            <div className="flex flex-wrap gap-10 justify-center pb-10">

                <div className="card w-96 bg-base-100 rounded-none">
                    <figure>
                        <img src="blog1.jpg" alt="blog1" className="w-full" />
                    </figure>
                    <div className="card-body pt-4">
                        <h2 className="text-lg text-center font-prata">10 Quick Tips About Business</h2>
                        <div className="flex text-gray-500 justify-center px-20">
                        <CalendarDaysIcon className="size-6"/>
                        <p> June 8, 2021 </p>
                        <ChatBubbleLeftIcon className="size-6"/> <span className="text-sm align-text-top">0</span>
                        </div>
                        <p className="text-gray-500 text-base text-center">There are variations of passages of Lorems Ipsums available, but then majority.</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 rounded-none">
                    <figure>
                        <img src="blog2.jpg" alt="blog2" className="w-full" />
                    </figure>
                    <div className="card-body pt-4">
                        <h2 className="text-lg text-center font-prata">Learn The Truth Real Estate</h2>
                        <div className="flex text-gray-500 justify-center px-20">
                        <CalendarDaysIcon className="size-6"/>
                        <p> June 8, 2021 </p>
                        <ChatBubbleLeftIcon className="size-6"/> <span className="text-sm align-text-top">0</span>
                        </div>
                        <p className="text-gray-500 text-base text-center">It is long established fact that a reader will distracted by the readable content.</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 rounded-none">
                    <figure>
                        <img src="blog3.jpg" alt="blog3" className="w-full" />
                    </figure>
                    <div className="card-body pt-4">
                        <h2 className="text-lg text-center font-prata">Skills Learn In Real Estate</h2>
                        <div className="flex text-gray-500 justify-center px-20">
                        <CalendarDaysIcon className="size-6"/>
                        <p> June 8, 2021 </p>
                        <ChatBubbleLeftIcon className="size-6"/> <span className="text-sm align-text-top">0</span>
                        </div>
                        <p className="text-gray-500 text-base text-center">There are many variations of passages ofen Ipsum available majority to suffered.</p>
                    </div>
                </div>
            </div>
            </div>    
        </>
    )
}

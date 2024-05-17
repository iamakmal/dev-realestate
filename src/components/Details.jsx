import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid';

export default function Details() {
  return (
    <>
      <div className="flex m-10 justify-around">
        <div className="card w-[900px] bg-base-100 shadow-xl">
          <figure><img src="d1.jpg" alt="villa" /></figure>
          <div className="card-body">
            <h2 className="text-3xl text-center font-prata mb-5">Historical Grand Family Villa Rio</h2>
            <div role="tablist" class="tabs tabs-bordered">
              <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Description" checked />
              <div role="tabpanel" class="tab-content p-10">
                <p className="text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, magni. Perspiciatis ad eum repellat, fugiat eos explicabo libero reprehenderit, necessitatibus expedita, enim neque fugit? Sed quae id veritatis iusto et?</p>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus culpa cupiditate laboriosam! Nihil, ducimus debitis praesentium incidunt vero eos blanditiis dolores sint molestias odit, veritatis dolorum ab pariatur, libero veniam.</p>
              </div>

              <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Review" />
              <div role="tabpanel" class="tab-content p-10">
                <div className="chat chat-start">
                  <div className="chat-image avatar placeholder">
                  <div className="bg-warning text-black rounded-full w-12">
                  <span className="text-xl">JP</span>
                  </div>                    
                  </div>
                  <div className="chat-header">
                    John Parker
                    <time className="text-xs opacity-50">&nbsp; 2 hours ago</time>
                  </div>
                  <div className="chat-bubble chat-bubble-warning">I am really impressed by this villa. I think this villa is worth the price as it is located in the beautiful countryside.</div>
                </div>
              </div>

            </div>

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
          <div className="flex justify-between ">
            <p className="">BEDROOM:</p>
            <p className="text-gray-400">7 Rooms</p>
          </div>

          <div className="divider mt-1"></div>

          <div className="flex justify-between -mt-4">
            <p className="">SQUARE FEET:</p>
            <p className="text-gray-400">3226</p>
          </div>

          <div className="divider mt-1"></div>

          <div className="flex justify-between -mt-4">
            <p className="">LOCATION:</p>
            <p className="text-gray-400">89th St, London</p>
          </div>
        </div>
      </div>
    </>
  )
}

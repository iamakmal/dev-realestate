import React from 'react'

export default function Requests() {
    return (
        <div className="bg-cover bg-center text-white" style={{ backgroundImage: 'url("request.jpg")' }}>
            <h1 className="text-3xl text-center font-prata leading-[50px] pt-10">Requests Your Property Valuation</h1>
            <div className="flex flex-col w-[790px] mx-auto">
                <h1 className="text-left">Personal Information:</h1>
                <select className="select bg-transparent border-white w-full mb-10">
                    <option disabled selected className="text-black">Select I'm A ...</option>
                    <option className="text-black">Buyer</option>
                    <option className="text-black">Seller</option>
                    <option className="text-black">Agent</option>
                </select>
                <div className="flex gap-5 mb-10">
                <input type="text" placeholder="Your Name" className="input bg-transparent border-white placeholder-white w-full justify-start" />
                <input type="email" placeholder="Email Address" className="input bg-transparent border-white placeholder-white w-full justify-end" />
                </div>
                <h1 className="text-left">Property Information:</h1>
                <select className="select bg-transparent border-white w-full mb-10">
                    <option disabled selected className="text-black">Select Type ...</option>
                    <option className="text-black">House</option>
                    <option className="text-black">Villa</option>
                    <option className="text-black">Mansion</option>
                </select>
                <div className="flex gap-5">
                <select className="select bg-transparent border-white w-full mb-10 justify-start">
                    <option disabled selected className="text-black">Select City ...</option>
                    <option className="text-black">Colombo</option>
                    <option className="text-black">Gampaha</option>
                    <option className="text-black">Kaluthara</option>
                </select>
                <select className="select bg-transparent border-white w-full mb-10 justify-end">
                    <option disabled selected className="text-black">Your Budget ...</option>
                    <option className="text-black">Below 1 Million</option>
                    <option className="text-black">Between 1 and 5 Million</option>
                    <option className="text-black">More than 5 Million</option>
                </select>
                </div>
                <div className="flex gap-5">
                <select className="select bg-transparent border-white w-full mb-10 justify-start">
                    <option disabled selected className="text-black">Number Of Beds ...</option>
                    <option className="text-black">1</option>
                    <option className="text-black">2</option>
                    <option className="text-black">3</option>
                </select>
                <select className="select bg-transparent border-white w-full mb-10 justify-end">
                    <option disabled selected className="text-black">Minimum Size (Sq Ft)</option>
                    <option className="text-black">10Sq Ft</option>
                    <option className="text-black">Between 10 and 20Sq Ft</option>
                    <option className="text-black">More than 20Sq Ft</option>
                </select>
                </div>
                <button className="btn bg-white border-0 px-5 rounded-md mb-20 w-full font-normal">Submit Inquiry</button>
            </div>
        </div>
    )
}

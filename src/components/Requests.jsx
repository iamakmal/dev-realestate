import React from 'react'

export default function Requests() {
    return (
        <div className="bg-cover bg-[#168771] bg-center bg-blend-luminosity text-white" style={{ backgroundImage: 'url("testimonial.jpg")' }}>
            <h1 className="text-3xl text-center font-prata leading-[50px] pt-10">Requests Your Property Valuation</h1>
            <div className="flex flex-col w-[790px] mx-auto">
                <h1 className="text-left">Personal Information:</h1>
                <select className="select bg-transparent border-white w-full mb-10">
                    <option disabled selected>Select I'm A ...</option>
                    <option>Buyer</option>
                    <option>Seller</option>
                    <option>Agent</option>
                </select>
                <div className="flex gap-5 mb-10">
                <input type="text" placeholder="Your Name" className="input bg-transparent border-white placeholder-white w-full justify-start" />
                <input type="email" placeholder="Email Address" className="input bg-transparent border-white placeholder-white w-full justify-end" />
                </div>
                <h1 className="text-left">Property Information:</h1>
                <select className="select bg-transparent border-white w-full mb-10">
                    <option disabled selected>Select Type ...</option>
                    <option>House</option>
                    <option>Villa</option>
                    <option>Mansion</option>
                </select>
                <div className="flex gap-5">
                <select className="select bg-transparent border-white w-full mb-10 justify-start">
                    <option disabled selected>Select City ...</option>
                    <option>Colombo</option>
                    <option>Gampaha</option>
                    <option>Kaluthara</option>
                </select>
                <select className="select bg-transparent border-white w-full mb-10 justify-end">
                    <option disabled selected>Your Budget ...</option>
                    <option>Below 1 Million</option>
                    <option>Between 1 and 5 Million</option>
                    <option>More than 5 Million</option>
                </select>
                </div>
                <div className="flex gap-5">
                <select className="select bg-transparent border-white w-full mb-10 justify-start">
                    <option disabled selected>Number Of Beds ...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <select className="select bg-transparent border-white w-full mb-10 justify-end">
                    <option disabled selected>Minimum Size (Sq Ft)</option>
                    <option>10Sq Ft</option>
                    <option>Between 10 and 20Sq Ft</option>
                    <option>More than 20Sq Ft</option>
                </select>
                </div>
                <button className="btn bg-white border-0 px-5 rounded-md mb-20 w-full font-normal">Submit Inquiry</button>
            </div>
        </div>
    )
}

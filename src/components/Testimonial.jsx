import React from 'react'

export default function Testimonial() {
    return (
        <>
            <div className="bg-cover bg-center" style={{backgroundImage:'url("testimonial.jpg")'}}>
                <div>
                <h1 className="text-3xl text-center font-prata leading-[50px] pt-10">Client's Testimonials</h1>
                <h1 className="text-md text-center text-gray-400 mb-16">Lorem ipsum dolor sit amet, conectur adipscing elitsed do eiusmod</h1>
                <div className="flex flex-wrap gap-10 justify-center pb-10">

                    <div className="card bg-base-100 w-[590px] rounded-2xl flex-row p-10">
                        <img src="client1.jpg" alt="client1" className="h-20" />
                        <div className="relative ml-5 z-10">
                            <p className="text-gray-500 mb-3 text-sm">This is by far the best theme on Themeforest, It adapts to a lot of the plugins, and their customer support is great. I really love this theme!</p>
                            <p className="font-prata ">JUDITH MCKINNEY</p>
                            <p className="text-gray-500 text-sm">Seychelles</p>
                        </div>
                        <div className="absolute top-6 right-0 text-[#EEEEEE]">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="75"
                                width="75"
                            >
                                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 106.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1017.5 10z" />
                            </svg>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-[590px] rounded-2xl flex-row p-10">
                        <img src="client2.jpg" alt="client2" className="h-20" />
                        <div className="relative ml-5 z-10">
                            <p className="text-gray-500 mb-3 text-sm">As always a 5 star! I bought this theme the third or fourth time so far...really loving it. The new update from 6.0 is awesome</p>
                            <p className="font-prata ">HAROLD NGUYEN</p>
                            <p className="text-gray-500 text-sm">Syrian Arab Republic</p>
                        </div>
                        <div className="absolute top-6 right-0 text-[#EEEEEE]">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="75"
                                width="75"
                            >
                                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 106.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1017.5 10z" />
                            </svg>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </>
    )
}

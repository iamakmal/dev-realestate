import React from 'react'

export default function Agent() {
    const renderSocialMedia = () => {
        return(
            <div className="flex text-gray-400 justify-evenly px-20">
            <svg
                viewBox="0 0 500 1000"
                fill="currentColor"
                height="20"
                width="20"
            >
                <path d="M500 206H358c-9.333 0-17.667 5-25 15-7.333 10-11 22.333-11 37v102h178v148H322v442H152V508H0V360h152v-86c0-62.667 19.667-115.667 59-159s88.333-65 147-65h142v156" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" fill="currentColor" viewBox="0 0 50 50">
                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>

            <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="20"
                width="20"
            >
                <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
            </svg>

            <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="20"
                width="20"
            >
                <path d="M883.7 578.6c4.1-22.5 6.3-45.5 6.3-68.5 0-51-10-100.5-29.7-147-19-45-46.3-85.4-81-120.1a375.79 375.79 0 00-120.1-80.9c-46.6-19.7-96-29.7-147-29.7-24 0-48.1 2.3-71.5 6.8A225.1 225.1 0 00335.6 113c-59.7 0-115.9 23.3-158.1 65.5A222.25 222.25 0 00112 336.6c0 38 9.8 75.4 28.1 108.4-3.7 21.4-5.7 43.3-5.7 65.1 0 51 10 100.5 29.7 147 19 45 46.2 85.4 80.9 120.1 34.7 34.7 75.1 61.9 120.1 80.9 46.6 19.7 96 29.7 147 29.7 22.2 0 44.4-2 66.2-5.9 33.5 18.9 71.3 29 110 29 59.7 0 115.9-23.2 158.1-65.5 42.3-42.2 65.5-98.4 65.5-158.1.1-38-9.7-75.5-28.2-108.7zm-370 162.9c-134.2 0-194.2-66-194.2-115.4 0-25.4 18.7-43.1 44.5-43.1 57.4 0 42.6 82.5 149.7 82.5 54.9 0 85.2-29.8 85.2-60.3 0-18.3-9-38.7-45.2-47.6l-119.4-29.8c-96.1-24.1-113.6-76.1-113.6-124.9 0-101.4 95.5-139.5 185.2-139.5 82.6 0 180 45.7 180 106.5 0 26.1-22.6 41.2-48.4 41.2-49 0-40-67.8-138.7-67.8-49 0-76.1 22.2-76.1 53.9s38.7 41.8 72.3 49.5l88.4 19.6c96.8 21.6 121.3 78.1 121.3 131.3 0 82.3-63.3 143.9-191 143.9z" />
            </svg>
        </div>
        )
    }

    return (
        <>
            <div className="bg-[#F9F9F9] pt-20">
                <h1 className="text-3xl text-center font-prata mb-16">Agents Make The Difference</h1>
                <div className="flex flex-wrap gap-10 justify-center pb-10">

                    <div className="card w-96 bg-base-100 rounded-none">
                        <figure>
                            <img src="agent1.jpg" alt="agent1" className="w-full" />
                        </figure>
                        <div className="card-body pt-4">
                            <h2 className="text-lg text-center font-prata">Trevor Walsh</h2>
                            <h2 className="text-lg text-center font-prata text-main">Commercial Broker</h2>
                            {renderSocialMedia()}
                            <p className="text-gray-400 text-sm text-center">There are many variations of passages ofen Ipsum available mahority to suffered.</p>                            
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 rounded-none">
                        <figure>
                            <img src="agent2.jpg" alt="agent2" className="w-full" />
                        </figure>
                        <div className="card-body pt-4">
                            <h2 className="text-lg text-center font-prata">Trevor Walsh</h2>
                            <h2 className="text-lg text-center font-prata text-main">Commercial Broker</h2>
                            {renderSocialMedia()}
                            <p className="text-gray-400 text-sm text-center">There are many variations of passages ofen Ipsum available mahority to suffered.</p>                            
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 rounded-none">
                        <figure>
                            <img src="agent3.jpg" alt="agent3" className="w-full" />
                        </figure>
                        <div className="card-body pt-4">
                            <h2 className="text-lg text-center font-prata">Trevor Walsh</h2>
                            <h2 className="text-lg text-center font-prata text-main">Commercial Broker</h2>
                            {renderSocialMedia()}
                            <p className="text-gray-400 text-sm text-center">There are many variations of passages ofen Ipsum available mahority to suffered.</p>                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

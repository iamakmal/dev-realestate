import React from 'react'

export default function Footer() {

    const renderSocialMedia = () => {
        return (
            <div className="flex text-white justify-center gap-5">
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
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="20"
                    width="20"
                >
                    <path d="M13.601 2.326A7.854 7.854 0 007.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 003.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0013.6 2.326zM7.994 14.521a6.573 6.573 0 01-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 01-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 014.66 1.931 6.557 6.557 0 011.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 00-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
                <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="20"
                    width="20"
                >
                    <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
                </svg>
            </div>
        )
    }

    return (
        <>
            <footer className="footer p-10 bg-[#333333] text-gray-300">
                <nav>
                    <h6 className="text-lg font-semibold mb-5 font-prata text-white">Popular Search</h6>
                    <a className="link link-hover">Apartment For Rent</a>
                    <a className="link link-hover">Apartment Low To Hide</a>
                    <a className="link link-hover">Offices For Buy</a>
                    <a className="link link-hover">Offices For Rent</a>
                    <a className="link link-hover">Townhome For Rent</a>
                    <a className="link link-hover">Townhome For Buy</a>
                    <a className="link link-hover">Shop For Rent</a>
                </nav>
                <nav>
                    <h6 className="text-lg font-semibold mb-5 font-prata text-white">Homepress Market</h6>
                    <a className="link link-hover">Las Vegas Office</a>
                    <a className="link link-hover">Sacramento Townhome</a>
                    <a className="link link-hover">New York Apartment</a>
                    <a className="link link-hover">Philadelphia Office</a>
                    <a className="link link-hover">London Townhome</a>
                    <a className="link link-hover">Los Angeles Apartment</a>
                </nav>
                <nav>
                    <h6 className="text-lg font-semibold mb-5 font-prata text-white">Quick Links</h6>
                    <a className="link link-hover">Pricing Plans</a>
                    <a className="link link-hover">Xstore Services</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Terms & Condition</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Get Rewarded</a>
                    <a className="link link-hover">Contact Us</a>
                </nav>
                <form>
                    <h6 className="text-lg font-semibold mb-5 font-prata text-white">Sign Up For Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label mb-5">
                            <span className="label-text text-xs text-gray-300">Enter your email below to receive a $30 coupon, special offers, exclusive discounts and more!</span>
                        </label>
                        <div className="join mb-2">
                            <input type="text" placeholder="Your email address" className="input input-bordered join-item rounded-sm" />
                            <button className="btn bg-white join-item rounded-sm font-normal">SIGN UP</button>
                        </div>
                    </fieldset>
                    <p className="font-prata text-base text-white">Follow Us</p>
                    {renderSocialMedia()}
                </form>
            </footer>
            <footer className="bg-[#333333] text-gray-300">
                <div className=''>
                    <ul className="flex justify-center gap-5">
                        <li><a>Home</a></li>
                        <li><a>Blog</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Contact Us</a></li>
                        <li><a>Properties</a></li>
                        <li><a>WishList</a></li>
                    </ul>
                </div>
                <div class="divider before:bg-gray-300 after:bg-gray-300 px-5"></div>

                <div className="flex justify-between items-center px-5 pb-5">
                    <p>Copyright &copy; 2024 <span className="text-white">R-State</span>, Solution By <span className="text-white">R-State</span></p>
                    <img src="payment.png" alt="Payment" />
                </div>
            </footer>
        </>
    )
}

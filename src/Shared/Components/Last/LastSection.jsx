import React from 'react'
import { Link } from 'react-router-dom'

function LastSection() {
    return (
        <>
            <section className=" max-w-[90rem] md:py-20 py-10  mx-auto">
                <div className="flex flex-col gap-4">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:gap-10">
                        <div className="text-center flex flex-col md:gap-4 gap-2">
                            {/* <div className="  px-4 py-4 bg-blue-600 w-fit rounded-full mx-auto">
                                <i className="fi fi-rs-land-layer-location text-white flex items-center  text-2xl md:text-3xl" />
                            </div> */}
                            <div className=" px-4 py-4 bg-[#0000ff]  w-fit rounded-full mx-auto">
                                <i className="fi fi-rs-land-layer-location text-white flex items-center text-2xl md:text-3xl " />
                            </div>
                            <div className="md:text-lg text-sm">
                                <p>International Convention Center</p>
                                <p>Chennai, India</p>
                            </div>
                        </div>
                        <div className="text-center flex flex-col md:gap-4 gap-2">
                            <div className=" px-4 py-4 bg-[#14AE5C] w-fit rounded-full mx-auto">
                                <i className="fi fi-rr-clock text-white flex items-center text-2xl md:text-3xl " />
                            </div>
                            <div className="md:text-lg text-sm">
                                <p>September 26-27, 2025</p>
                                <p>9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                        <div className="text-center flex flex-col md:gap-4 gap-2">
                            <div className=" px-4 py-4 bg-[#1B1F3B] w-fit rounded-full mx-auto">
                                <i className="fi fi-ss-envelope text-white flex items-center text-2xl md:text-3xl "></i>
                            </div>
                            <div className="md:text-lg text-sm">
                                <p>info.icbdcc@gmail.com</p>
                                <p>Chennai, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 px-3">
                        <p className="text-center md:p-4 p-3 bg-[#1B1F3B] rounded-xl text-white md:text-lg text-sm  relative overflow-hidden">
                            <div className="absolute -top-2 -right-1 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#F2CB51] border-r-transparent rounded-tr-xl 2xl:block hidden"></div>
                            Join leading researchers, academics, and industry experts from around the world. Be part of the future of Big Data and Cloud innovation.</p>
                        <div className="text-center">
                            <Link to='/paper-submission'>
                                <button className="py-2 bg-[#14AE5C] px-6 rounded-full text-white mx-auto cursor-pointer md:text-lg   hover:border border   text-sm hover:duration-300 hover:border-[#F2CB51] border-[#F2CB51] hover:border-dashed">Register</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LastSection

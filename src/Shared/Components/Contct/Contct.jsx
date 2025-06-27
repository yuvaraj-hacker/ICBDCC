import React from 'react'

function Contct() {
    return (
        <>
            <section className=" max-w-[90rem] py-10 md:py-20  mx-auto">
                <div className="flex flex-col gap-4">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 items-center">
                        <div className="text-center flex flex-col md:gap-4 gap-2">
                            <div className="  px-4 py-4 bg-[#0000ff] w-fit rounded-full mx-auto">
                                <i className="fi fi-rs-marker text-white flex items-center   text-2xl md:text-3xl " />
                            </div>
                            <div className="md:text-lg text-sm">
                                {/* <p>International Convention Center</p> */}
                                <p>Beijing, China</p>
                            </div>
                        </div>
                        <div className="text-center flex flex-col md:gap-4 gap-2">
                            <div className=" px-4 py-4 bg-[#14AE5C] w-fit rounded-full mx-auto">
                                <i className="fi fi-rr-clock text-white flex items-center    text-2xl md:text-3xl " />
                            </div>
                            <div className="md:text-lg text-sm" >
                                <p>September 26-27, 2025</p>
                                <p>9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                        <div className="text-center flex flex-col md:gap-4 gap-2">
                            <div className=" px-4 py-4 bg-[#1B1F3B] w-fit rounded-full mx-auto">
                                <i className="fi fi-ss-envelope text-white flex items-center   text-2xl md:text-3xl "></i>
                            </div>
                            <div className="md:text-lg text-sm">
                                <p>info.icbdcc@gmail.com</p>
                                {/* <p>Chennai, India</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contct

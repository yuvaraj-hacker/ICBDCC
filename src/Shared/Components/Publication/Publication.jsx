import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'

function Publication() {
    return (
        <>
            <section className="flex flex-col md:gap-20 gap-10   max-w-[90rem] py-10 md:py-20  mx-auto md:px-5 px-3">
                <div className=''>
                    <h1 className="bg-[#F2CB51] text-[#1B1F3B] text-center w-fit mx-auto rounded-full px-6 py-2 font-semibold lg:text-2xl text-lg md:mb-5 mb-5">
                        Key Dates
                    </h1>
                    <p className=" text-center  mb-4">
                        We invite researchers, scholars, and industry professionals to mark their calendars for the important dates associated with <strong>ICBDCC 2025</strong>. Timely submissions and registrations are essential to ensure smooth participation in the conference.
                        Authors are encouraged to prepare high-quality, original submissions aligned with the themes of Big Data, Cloud Computing, and their interdisciplinary applications. The conference committee has outlined the following important deadlines to guide your participation.
                        Kindly adhere to these dates to benefit from early reviews, publication opportunities, and smooth registration. Please note that deadlines will be strictly enforced to maintain the integrity and quality of the conference.

                    </p>


                    <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-0 max-w-[85rem] mx-auto">
                        {[
                            {
                                date: "29-09-2025",
                                event: "Full Paper Submission Deadline",
                            },
                            {
                                date: "4-10-2025",
                                event: "Notification of Decision",
                            },
                            {
                                date: "13-10-2025",
                                event: "Deadline for Submitting Revised Full Paper",
                            },
                            {
                                date: "20-10-2025",
                                event: "Notification of Acceptance",
                            },
                            {
                                date: "25-10-2025",
                                event: "Camera-Ready Paper Submission",
                            },
                            {
                                date: "01-11-2025",
                                event: "Last Date for Registration / Payment",
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-100 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300">
                                <p className="text-[#1B1F3B] text-xl font-bold mb-2">{item.date}</p>
                                <p className="text-gray-700 text-sm">{item.event}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className=''>
                    <h1 className="bg-[#F2CB51] text-[#1B1F3B] text-center w-fit mx-auto rounded-full px-6 py-2 font-semibold lg:text-2xl text-lg md:mb-10 mb-5">
                        Registration Details
                    </h1>
                    <div className="max-w-xl mx-auto border border-gray-200 rounded-xl shadow-md md:p-6 p-3 bg-white">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Bank Account Details</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                            <div>
                                <p className="font-medium text-gray-600">Account Name</p>
                                <p className="text-gray-900">XXXXXXXX</p>
                            </div>

                            <div>
                                <p className="font-medium text-gray-600">Account Number</p>
                                <p className="text-gray-900">XXXXXXXX</p>
                            </div>

                            <div>
                                <p className="font-medium text-gray-600">Branch</p>
                                <p className="text-gray-900">XXXXXXXX</p>
                            </div>

                            <div>
                                <p className="font-medium text-gray-600">IFSC Code</p>
                                <p className="text-gray-900">XXXXXXXX</p>
                            </div>

                            <div>
                                <p className="font-medium text-gray-600">MICR</p>
                                <p className="text-gray-900">XXXXXXXX</p>
                            </div>
                        </div>
                    </div>

                </div> */}
            </section>
            <section className=" ">
                <h1 className="bg-[#3E8000] h-[2px] w-full" />
            </section>
            <LastSection />

        </>
    )
}

export default Publication


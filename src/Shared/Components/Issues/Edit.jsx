import { Briefcase, MapPin, User } from 'lucide-react'
import React from 'react'

function Edit({ position, Name, location }) {
    return (
        <>
            {/* <section className="border-2 border-gray-200 rounded-xl shadow-sm p-4 w-full bg-white  mx-auto hover:shadow-md transition duration-300">
                <div className="text-center space-y-2">
                    <div className='flex items-center gap-4'>
                        <i class="fi fi-rr-circle-user flex items-center"></i>
                        <h3 className="text-lg font-semibold text-gray-800">{Name}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{position}</p>
                    <p className="text-sm text-gray-500">{location}</p>
                </div>
            </section> */}
            <div className=" relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 transform hover:-translate-y-2 overflow-hidden">
                {/* Decorative gradient overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 -hover:opacity-100 transition-opacity duration-500"></div> */}
                {/* Content */}
                <div className="relative z-10 text-center space-y-4">
                    {/* Profile Icon with animated ring */}
                    <div className="relative mx-auto w-14 h-14 mb-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse opacity-20"></div>
                        <div className="relative flex items-center justify-center w-full h-full bg-[#1B1F3B] rounded-full shadow-lg">
                            <User className="w-7 h-7 text-white" />
                        </div>
                        {/* Animated ring */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-0 -hover:opacity-30  "></div>
                    </div>

                    {/* Name */}
                    <div>
                        <h3 className="md:text-lg font-bold text-gray-800 -hover:text-blue-600 transition-colors duration-300">
                            {Name}
                        </h3>
                    </div>

                    {/* Position */}
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                        <Briefcase className="w-4 h-4 text-blue-500" />
                        <p className="text-sm font-medium">{position}</p>
                    </div>

                    {/* Location */}
                    <div className="flex items-center justify-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4 text-[#14AE5C]" />
                        <p className="text-sm">{location}</p>
                    </div>

                    {/* Decorative line */}
                    {/* <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto opacity-60 -hover:w-16 -hover:opacity-100 transition-all duration-300"></div> */}
                </div>

                {/* Corner decoration */}
                {/* <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full transform translate-x-6 -translate-y-6 -hover:scale-110 transition-transform duration-500"></div> */}
            </div>
        </>
    )
}

export default Edit

import { Briefcase, MapPin, User } from 'lucide-react'
import React from 'react'

function Edit({ position, Name, location, university }) {
    return (
        <>

            <div className=" relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-lg transition-all duration-500 p-6 overflow-hidden">
                <div className="relative z-10 text-center space-y-4">
                    <div>
                        <h3 className="md:text-lg font-bold text-gray-800 -hover:text-blue-600 transition-colors duration-300">
                            Dr. {Name}
                        </h3>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                        <p className="text-sm font-medium">{position}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                        <p className="text-sm font-medium">{university}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4 text-[#14AE5C]" />
                        <p className="text-sm">{location}</p>
                    </div>
                </div>
            </div>
{/*
            <div className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-lg transition-all duration-500 p-6   overflow-hidden group">
                <div className="relative z-10 text-center space-y-4">

                    <div>
                        <h3 className="md:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                            Dr. {Name}
                        </h3>
                    </div>


                    <div className="flex items-center justify-center gap-2 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">{position}</p>
                    </div>


                    <div className="flex items-center justify-center gap-2 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">{university}</p>
                    </div>


                    <div className="flex items-center justify-center gap-2 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <MapPin className="w-4 h-4 text-[#14AE5C]" />
                        <p className="text-sm">{location}</p>
                    </div>
                </div>
            </div> */}


        </>
    )
}

export default Edit

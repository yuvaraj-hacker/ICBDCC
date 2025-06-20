import React from 'react'
import EditTeam from './EditTeam'
import { Link } from 'react-router-dom';
import LastSection from '../Last/LastSection';

function EditorialBoard({ position, Name, location }) {
    const Tech = [
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },

    ];
    return (
        <>
            <section className="flex flex-col md:gap-10 gap-5 max-w-[90rem]  md:px-5 px-3 mx-auto  md:py-20 py-10" >
                <h1 className="bg-[#F2CB51] text-[#1B1F3B] text-center rounded-full px-4 py-2 w-fit mx-auto font-semibold lg:text-2xl text-lg">
                    Technical Committee
                </h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                    {Tech.map((member, index) => (
                        <EditTeam
                            key={index}
                            position={member.position}
                            Name={member.Name}
                            location={member.location}
                            dataAos="flip-left"
                        />
                    ))}
                </div>
            </section>
            <section className=" ">
                <h1 className="bg-[#3E8000] h-[2px] w-full" />
            </section>
                <LastSection />

        </>
    )
}

export default EditorialBoard

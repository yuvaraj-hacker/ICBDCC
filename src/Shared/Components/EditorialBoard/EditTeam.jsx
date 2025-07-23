import React from 'react'

function EditTeam({ position, Name, location , dataAos }) {
    return (
        <>
            <section className='border-2 rounded-xl  overflow-hidden '>
                <div className='p-2 bg-[#1B1F3B] text-white text-center  '>
                    {position}
                </div>
                <div className='p-4 text-center'>
                    <img data-aos={dataAos} src="/assets/Images/members.jpg" className='w-32 mx-auto' alt="" loading='lazy' />
                    <div className='flex flex-col space-y-2'>
                        <p>{Name}</p>
                        <p className="
                    ">{location}</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default EditTeam

import React from 'react'

function Edit({ position, Name, location }) {
    return (
        <>
            <section className='border-2 rounded-xl  '>
                <div className='p-4 text-center'>
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

export default Edit

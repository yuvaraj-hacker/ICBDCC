import React from 'react'

function KeyDates({ Dates, Title }) {
    return (
        <>
            <section className='p-3 bg-[#1B1F3B] flex gap-4 items-center rounded-xl'>
                <div className='p-2 rounded-xl bg-white w-fit whitespace-nowrap'>
                    {Dates}
                </div>
                <div className='text-white md:text-lg text-sm'>
                    {Title}
                </div>
            </section>
        </>
    )
}

export default KeyDates

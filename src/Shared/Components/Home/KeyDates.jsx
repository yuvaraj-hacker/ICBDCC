// import React from 'react'

// function KeyDates({ Dates, Title }) {
//     return (
//         <>
//             <section className='md:p-4 p-3 bg-[#1B1F3B] flex gap-4 items-center rounded-xl'>
//                 <div className='p-2 rounded-xl bg-white w-fit whitespace-nowrap'>
//                     {Dates}
//                 </div>
//                 <div className='text-white md:text-base text-sm'>
//                     {Title}
//                 </div>
//             </section>
//         </>
//     )
// }

// export default KeyDates

import React from 'react';

function KeyDates({ Dates, Title }) {
    return (
        <section className="relative bg-gradient-to-br from-[#1B1F3B] to-[#2c2f53] p-5 rounded-b-2xl shadow-lg group transition-transform hover:scale-[1.02] overflow-hidden">
            {/* Corner Cut Shape */}
            <div className="absolute -top-1 -right-1 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#F2CB51] border-r-transparent rounded-tr-xl md:block hidden"></div>
            <div className="flex items-center gap-5 z-10 relative">
                <div className="bg-white text-[#1B1F3B] font-semibold px-4 py-2 rounded-b-lg text-sm md:text-base shadow-md whitespace-nowrap">
                    {Dates}
                </div>
                <div className="text-white md:text-lg text-sm font-medium">
                    {Title}
                </div>
            </div>
        </section>
    );
}

export default KeyDates;


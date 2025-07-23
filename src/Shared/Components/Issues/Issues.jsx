import React from 'react'
import Edit from './Edit';
import { Link } from 'react-router-dom';
import LastSection from '../Last/LastSection';

function Issues({ position, Name, location }) {
    const Tech = [
        { Name: 'R. Gayathri', position: 'Department of Computer Science & Engineering', university: 'PSNA College of Engineering & Technology', location: 'India' },
        { Name: 'A. Antonidoss', position: 'Department of Computer Science & Business Systems', university: 'Hindustan Institute of Technology', location: 'India' },
        { Name: 'Mujtaba Korai', position: 'Department of Computer Science & Engineering', university: 'Gachon University', location: 'South Korea' },
        { Name: 'C. Karthik', position: 'Department of Mechatronics Engineering', university: 'Jyothi Engineering College', location: 'India' },
        { Name: 'T. Ananth Kumar', position: 'Department of Computer Science & Engineering', university: 'IFET College of Engineering', location: 'India' },
        { Name: 'Ali Rizwan', position: 'Department of Industrial Engineering', university: 'King Abdulaziz University', location: 'Saudi Arabia' },
        { Name: 'G. Vinodhini', position: 'Department of Information Technology', university: 'Annamalai University', location: 'India' },
        { Name: 'Alamu Olumide', position: 'Department of Electrical and Electronics Engineering', university: 'University of Lagos', location: 'Nigeria' },
        { Name: 'V. Mageshwari', position: 'Department of Computer Science & Engineering', university: 'PSGR Krishnammal College for Women', location: 'India' },
        { Name: 'K. Karthika', position: 'Department of Computer Science & Engineering', university: 'Sri Sairam College of Engineering', location: 'India' },
        { Name: 'Huiliang Zhao', position: 'Department of product design', university: 'Guizhou Minzu University', location: 'China' },
        { Name: 'D. Angeline Benitta', position: 'Department of computer Applications', university: 'Hindustan Institute of Technology and Science', location: 'India' },
        { Name: 'M. Sathish kumar', position: 'Department of computer application', university: 'Hindustan Institute of Technology and Science', location: 'India' },
        { Name: 'Asad Aziz', position: 'Department of Geography', university: 'University of Gujrat', location: 'Pakistan' },
        { Name: 'C. B. Sivaparthipan', position: 'Department of Computer Science & Engineering', university: ' Adhiyamaan College of Engineering', location: 'India' },
        { Name: 'V. Nagaraju', position: 'Department of Electrical and Electronics Engineering', university: 'Anna University', location: 'India' },
        { Name: 'Leo John Baptist', position: 'Department of Information Technology', university: 'BOTHO University', location: 'Botswana' },
        { Name: 'P.Tamizharasi', position: 'Department of Electrical and Electronics Engineering', university: 'Adhiparasakthi Engineering College', location: 'India' },
        { Name: 'T. Kalaikumaran', position: 'Department of Artificial Intelligence and Data Science', university: 'VSB College of Engineering Technical Campus', location: 'India' },
        { Name: 'Badamasi Sani Mohammed', position: 'Department of Economics', university: 'Al-Qalam University Katsina', location: 'Nigeria' },
        { Name: 'Awder Omar Abdulqadir', position: 'Department of mathematical physics', university: 'University of Halabja', location: 'Iraq' },
        { Name: 'S. Gopinath', position: 'Department of Computer Science & Engineering', university: 'Gnanamani College of Technology', location: 'India' },
        { Name: 'Sakthivel Velusamy', position: ' Department of Aerospace Information Engineering', university: 'Konkuk University', location: 'South Korea' },
        { Name: 'Nguyen Van Thieu', position: 'Department of Computer Science & Engineering', university: 'PHENIKAA University', location: 'Viet Nam' },
        

    ];
    return (
        <>
            <section className="flex flex-col md:gap-10 gap-5 max-w-[90rem]  md:px-5 px-3 mx-auto  md:py-20 py-10" >
                <h1 className="bg-[#F2CB51] text-[#1B1F3B] text-center rounded-full px-4 py-2 w-fit mx-auto font-semibold lg:text-2xl text-lg">
                    Editorial Board
                </h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                    {Tech.map((member, index) => (
                        <Edit key={index} position={member.position} university={member.university} Name={member.Name} location={member.location} />
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

export default Issues;

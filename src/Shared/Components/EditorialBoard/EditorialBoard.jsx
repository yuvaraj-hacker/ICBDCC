import React from 'react'
import EditTeam from './EditTeam'
import { Link } from 'react-router-dom';
import LastSection from '../Last/LastSection';
import Edit from '../Issues/Edit';

function EditorialBoard({ position, Name, location }) {
    // const Tech = [
    //     { Name: 'Name', position: 'position', location: 'location' },
    //     { Name: 'Name', position: 'position', location: 'location' },
    //     { Name: 'Name', position: 'position', location: 'location' },
    //     { Name: 'Name', position: 'position', location: 'location' },

    // ];
    const Tech = [
        { Name: 'R. Gayathri', position: 'Department of Computer Science & Engineering', university: 'PSNA College of Engineering & Technology', location: 'India' },
        { Name: 'A. Antonidoss', position: 'Department of Computer Science & Business Systems', university: 'Hindustan Institute of Technology', location: 'India' },
        { Name: 'Mujtaba Korai', position: 'Department of Computer Science & Engineering', university: 'Gachon University', location: 'South Korea' },
        { Name: 'C. Karthik', position: 'Department of Mechatronics Engineering', university: 'Jyothi Engineering College', location: 'India' },
        { Name: 'Ali Rizwan', position: 'Department of Industrial Engineering', university: 'King Abdulaziz University', location: 'Saudi Arabia' },
        { Name: 'Alamu Olumide', position: 'Department of Electrical and Electronics Engineering', university: 'University of Lagos', location: 'Nigeria' },
        { Name: 'V. Mageshwari', position: 'Department of Computer Science & Engineering', university: 'PSGR Krishnammal College for Women', location: 'India' },
        { Name: 'K. Karthika', position: 'Department of Computer Science & Engineering', university: 'Sri Sairam College of Engineering', location: 'India' },
        { Name: 'Huiliang Zhao', position: 'Department of Product Design', university: 'Guizhou Minzu University', location: 'China' },
        { Name: 'D. Angeline Benitta', position: 'Department of computer Applications', university: 'Hindustan Institute of Technology and Science', location: 'India' },
        { Name: 'G. Vinodhini', position: 'Department of Information Technology', university: 'Annamalai University', location: 'India' },
        { Name: 'M. Sathish kumar', position: 'Department of Computer Application', university: 'Hindustan Institute of Technology and Science', location: 'India' },
        { Name: 'Asad Aziz', position: 'Department of Geography', university: 'University of Gujrat', location: 'Pakistan' },
        { Name: 'C. B. Sivaparthipan', position: 'Department of Computer Science & Engineering', university: ' Adhiyamaan College of Engineering', location: 'India' },
        { Name: 'V. Nagaraju', position: 'Department of Electrical and Electronics Engineering', university: 'Anna University', location: 'India' },
        { Name: 'Leo John Baptist', position: 'Department of Information Technology', university: 'BOTHO University', location: 'Botswana' },
        { Name: 'P. Tamizharasi', position: 'Department of Electrical and Electronics Engineering', university: 'Adhiparasakthi Engineering College', location: 'India' },
        { Name: 'T. Kalaikumaran', position: 'Department of Artificial Intelligence and Data Science', university: 'VSB College of Engineering Technical Campus', location: 'India' },
        { Name: 'Badamasi Sani Mohammed', position: 'Department of Economics', university: 'Al-Qalam University Katsina', location: 'Nigeria' },
        { Name: 'T. Ananth Kumar', position: 'Department of Computer Science & Engineering', university: 'IFET College of Engineering', location: 'India' },

        { Name: 'Awder Omar Abdulqadir', position: 'Department of Mathematical Physics', university: 'University of Halabja', location: 'Iraq' },
        { Name: 'S. Gopinath', position: 'Department of Computer Science & Engineering', university: 'Gnanamani College of Technology', location: 'India' },
        { Name: 'Sakthivel Velusamy', position: ' Department of Aerospace Information Engineering', university: 'Konkuk University', location: 'South Korea' },
        { Name: 'Nguyen Van Thieu', position: 'Department of Computer Science & Engineering', university: 'PHENIKAA University', location: 'Viet Nam' },


    ];
    return (
        <>
            <section className="flex flex-col md:gap-10 gap-5 max-w-[90rem]  md:px-5 px-3 mx-auto  md:py-20 py-10" >
                <h1 className="bg-[#F2CB51] text-[#1B1F3B] text-center rounded-full px-4 py-2 w-fit mx-auto font-semibold lg:text-2xl text-lg">
                    Organizing Committee
                </h1>
                {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                    {Tech.map((member, index) => (
                        <EditTeam
                            key={index}
                            position={member.position}
                            Name={member.Name}
                            location={member.location}
                            dataAos="flip-left"
                        />
                    ))}
                </div> */}
                <div className='md:text-base text-sm'>
                    The Organizing Committee of the International Conference on Big Data and Cloud Computing comprises distinguished academicians, industry experts, and research professionals dedicated to ensuring the success of the conference. Their commitment is instrumental in coordinating logistics, managing submissions, ensuring quality review processes, and creating a rich technical and cultural experience for all attendees.
                </div>
                <section id="organizing-committee" class=" ">
                    <div class=" mx-auto">
                        <h1 className="bg-[#F2CB51] text-[#1B1F3B] text-center rounded-full px-4 py-2 w-fit mx-auto font-semibold lg:text-2xl text-lg">
                            Key Roles and Responsibilities
                        </h1>
                        <div class="space-y-6">
                            <div>
                                <h3 class="text-xl font-semibold  ">Conference Chair(s):</h3>
                                <p>Provide overall leadership, strategic direction, and oversight of the entire conference organization. They ensure the vision and objectives of the conference are successfully met.</p>
                            </div>

                            <div>
                                <h3 class="text-xl font-semibold  ">Program Chair(s):</h3>
                                <p>Coordinate the technical program, oversee the paper review process, and ensure high-quality sessions. They collaborate with reviewers and track chairs to maintain academic integrity.</p>
                            </div>

                            <div>
                                <h3 class="text-xl font-semibold  ">Technical Program Committee:</h3>
                                <p>Composed of domain experts who review and evaluate submitted papers, helping to build a strong and diverse technical agenda.</p>
                            </div>

                            <div>
                                <h3 class="text-xl font-semibold  ">Publication Chair:</h3>
                                <p>Manages the compilation and formatting of accepted papers and coordinates with the publisher to ensure timely publication in the proceedings.</p>
                            </div>

                            <div>
                                <h3 class="text-xl font-semibold  ">Finance Chair:</h3>
                                <p>Handles budgeting, sponsorships, and financial planning to ensure the sustainability of the conference.</p>
                            </div>

                            <div>
                                <h3 class="text-xl font-semibold  ">Publicity Chair(s):</h3>
                                <p>Responsible for promoting the conference via social media, academic networks, and mailing lists to attract high-quality submissions and global participation.</p>
                            </div>

                            <div>
                                <h3 class="text-xl font-semibold  ">Local Arrangements Chair:</h3>
                                <p>Organizes the venue, accommodations, transportation, and on-site logistics to ensure a smooth experience for attendees.</p>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold  ">Web and IT Chair:</h3>
                                <p>Manages the conference website, online submission systems, and virtual platform (if hybrid/online), ensuring seamless digital experience.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="flex flex-col md:gap-10 gap-5 max-w-[90rem]  md:px-5 px-3 mx-auto  md:py-10 py-10" >
                    <h1 className="bg-[#F2CB51] text-[#1B1F3B] text-center rounded-full px-4 py-2 w-fit mx-auto font-semibold lg:text-2xl text-lg">
                        Editorial Board
                    </h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                        {Tech.map((member, index) => (
                            <Edit key={index} position={member.position} university={member.university} Name={member.Name} location={member.location} />
                        ))}
                    </div>
                </section> */}

            </section>
            <section className=" ">
                <h1 className="bg-[#3E8000] h-[2px] w-full" />
            </section>
            <LastSection />

        </>
    )
}

export default EditorialBoard

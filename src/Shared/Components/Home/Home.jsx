import React from "react";
import { Link } from "react-router-dom";
import TeamMemberCard from "./TeamMemberCard";
import KeyDates from "./KeyDates";
import LastSection from "../Last/LastSection";

export const Home = () => {
  const team = [
    {
      image: '/assets/Images/members.jpg',
      name: 'John Doe',
      position: 'Chairperson',
    },
    {
      image: '/assets/Images/members.jpg',
      name: 'Jane Smith',
      position: 'Coordinator',
    },
    {
      image: '/assets/Images/members.jpg',
      name: 'Alex Johnson',
      position: 'Technical Head',
    },
    {
      image: '/assets/Images/members.jpg',
      name: 'Alex Johnson',
      position: 'Technical Head',
    },
  ];

  const date = [
    { Dates: '22-07-2025', Title: 'Full Paper Submission Deadline' },
    { Dates: '22-07-2025', Title: 'Notification of Decision' },
    { Dates: '22-07-2025', Title: 'Deadline for Submitting Revised Full Paper' },
    { Dates: '22-07-2025', Title: 'Notification of Acceptance' },
    { Dates: '22-07-2025', Title: 'Camera-Ready Paper Submission' },
    { Dates: '22-07-2025', Title: 'Last Date for Registration / Payment' },
  ];

  return (
    <>
      <section className="relative w-full lg:h-[70vh] bg-[url('/assets/Images/conf.jpg')] bg-cover md:bg-fixed bg-no-repeat flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <section className="relative z-10 grid md:grid-cols-2 grid-cols-1 gap-5 md:py-10 items-center max-w-[90rem] py-5 md:px-5 px-3 mx-auto">
          <div className="">
            <img src="/assets/Images/renamed.png" className="mx-auto md:w-auto w-56" alt="Conference Logo" />
          </div>
          <div className="flex flex-col justify-evenly md:gap-5 gap-3 text-white">
            <button className="md:py-2 py-1 rounded-full bg-[#F2CB51] font-semibold md:text-base text-xs text-[#1B1F3B] duration-300 md:w-[170px] w-[100px]">
              ICBDCC
            </button>
            <p className=" md:text-5xl text-2xl font-bold">
              International Conference on Big Data and Cloud Computing
            </p>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
              <div className="detail-card md:text-base text-sm w-full flex flex-col gap-2  mx-auto">
                <div className="flex items-center gap-4">
                  <div className="detail-icon">📅</div>
                  <div className="detail-title">Conference Dates</div>
                </div>
                <div className="detail-text">May 16–18, 2025</div>
              </div>
              <div className="detail-card md:text-base text-sm  w-full  mx-auto  flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <div className="detail-icon">🌏</div>
                  <div className="detail-title">Location</div>
                </div>
                <div className="detail-text">Singapore</div>
              </div>
              {/* <div className="detail-card">
                <div className="detail-icon">🎯</div>
                <div className="detail-title">Format</div>
                <div className="detail-text">Keynotes • Panels • Posters</div>
              </div> */}
            </div>
            <div className="flex items-center gap-4 ">
              {/* <Link to="/paper-submission">
                <button className="md:p-3 p-2 bg-[#14AE5C]   hover:border border md:text-base text-sm hover:duration-300 hover:border-[#F2CB51] border-[#F2CB51] hover:border-dashed text-white duration-300 cursor-pointer md:w-[170px]">
                  Submit Now
                </button>
              </Link> */}
              <Link to="/contact">
                <button className="py-2 bg-[#14AE5C]  px-6 text-white duration-300 md:text-base text-sm cursor-pointer md:w-[170px] hover:border border hover:duration-300 hover:border-[#F2CB51] border-[#F2CB51] hover:border-dashed">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>

      <section className="flex flex-col gap-5 max-w-[90rem] py-10 md:py-20 mx-auto md:px-5 px-3">
        <div className="relative">
          <section className="flex flex-col md:gap-20 gap-10">

            {/* Hero Section */}
            {/* About Section */}
            <section className="grid md:grid-cols-5 grid-cols-1 md:gap-5 gap-3 items-start">
              <div className='col-span-2'>
                <h1 className="bg-[#F2CB51] text-[#1B1F3B] text-center w-fit mx-auto rounded-full px-6 py-2 font-semibold lg:text-2xl text-lg">
                  About the Conference
                </h1>
                {/* <img className="h-72 mx-auto" src="/assets/Images/27211.jpg" alt="" /> */}
                <div className="relative max-w-md mx-auto overflow-hidden ">
                  <img
                    className="w-full h-64 sm:h-72 object-contain"
                    src="/assets/Images/27211.jpg"
                    alt="Conference Visual"
                  />

                  {/* Stronger and always-visible overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end justify-center text-center">
                    <p className="text-white text-sm font-medium text-center" data-aos="fade-up"  >Discover Innovations in Big Data & Cloud</p>
                  </div>
                </div>


              </div>
              <div className="col-span-3 flex flex-col space-y-4">
                <p className="text-justify md:text-lg text-sm leading-7">
                  We are pleased to welcome researchers, academicians, industry professionals, and students from around the world to the International Conference on Big Data and Cloud Computing (ICBDCC)—a globally recognized platform dedicated to the advancement of knowledge and innovation in the fields of big data and cloud technologies. ICBDCC serves as a convergence point for thought leaders, domain experts, and emerging scholars to share novel insights, discuss transformative research, and explore pioneering solutions that drive the future of intelligent systems and scalable computing. The conference encourages interdisciplinary collaboration and high-quality contributions that address both theoretical frameworks and real-world applications across a spectrum of critical areas including data analytics, distributed computing, cloud-native architectures, edge and fog computing, machine learning, cybersecurity, and scalable storage systems.
                </p>
                <Link to='/about' className="w-fit">
                  <button className=" py-2 bg-[#14AE5C] px-6  hover:border border md:text-base text-sm hover:duration-300 hover:border-[#F2CB51] border-[#F2CB51] hover:border-dashed text-white  duration-300 cursor-pointer">
                    Read More
                  </button>
                </Link>
              </div>
            </section>

            {/* Scope Section */}
            <section className="flex flex-col md:gap-10 gap-5">
              <h1 className="bg-[#F2CB51] text-[#1B1F3B] text-center rounded-full  px-6 py-2 w-fit mx-auto font-semibold lg:text-2xl text-lg">
                Scope of the Conference
              </h1>
              <div className="p-5 bg-[#1B1F3B] text-white rounded-xl">
                <p className="text-justify md:text-lg text-sm leading-7">
                  The scope of the International Conference on Big Data and Cloud Computing (ICBDCC) encompasses cutting-edge research and innovations that address the growing complexities and opportunities in handling massive datasets and delivering scalable computing services. The conference invites contributions that explore foundational theories, methodologies, and real-world applications in Big Data analytics, artificial intelligence integration, machine learning at scale, and intelligent decision-making systems. It also emphasizes advances in cloud infrastructure, including distributed systems, virtualization, container orchestration, microservices architecture, serverless computing, and hybrid/multi-cloud environments. Furthermore, the conference covers emerging paradigms such as edge and fog computing, mobile cloud ecosystems, and real-time IoT-cloud convergence. A strong focus is placed on data security, privacy preservation, regulatory compliance, and ethical data governance within large-scale systems. ICBDCC aims to foster collaboration among academia, industry, and government sectors to shape the future of data-driven innovation across domains such as healthcare, finance, smart cities, manufacturing, education, agriculture, and beyond.
                </p>
              </div>
            </section>

            {/* Key Invites Section */}
            <section className="flex flex-col md:gap-10 gap-5">
              <h1 className="bg-[#F2CB51] text-[#1B1F3B] text-center rounded-full px-6 py-2 w-fit mx-auto font-semibold lg:text-2xl text-lg">
                Key Invites
              </h1>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 md:gap-10 gap-5">
                {team.map((member, index) => (
                  <TeamMemberCard
                    key={index}
                    image={member.image}
                    name={member.name}
                    position={member.position}
                    dataAos="flip-left"
                  />
                ))}
              </div>
            </section>

            {/* Key Dates Section */}
            <section className="flex flex-col md:gap-10 gap-5">
              <h1 className="bg-[#F2CB51] text-[#1B1F3B] text-center rounded-full px-6 py-2 w-fit mx-auto font-semibold lg:text-2xl text-lg">
                Key Dates
              </h1>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                {date.map((item, index) => (
                  <KeyDates key={index} Dates={item.Dates} Title={item.Title} />
                ))}
              </div>
            </section>

            {/* Divider */}


            {/* Venue/Contact Info */}


          </section>
        </div>
      </section>
      <section className=" ">
        <h1 className="bg-[#3E8000] h-[4px] w-full" />
      </section>
      <LastSection />
    </>
  );
};

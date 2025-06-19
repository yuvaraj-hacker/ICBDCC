import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'

function About() {
  return (
    <>

      <section className="flex flex-col  md:gap-20 gap-10  max-w-[90rem]  md:py-20 py-10 mx-auto md:px-5 px-3   flex items-center justify-center">
        <section className="grid md:grid-cols-5 grid-cols-1 md:gap-5 gap-3 items-center">
          <div className='col-span-2'>
            <h1 className="bg-[#F2CB51] text-[#1B1F3B] text-center w-fit mx-auto rounded-full px-6 py-2 font-semibold lg:text-2xl text-lg">
              About the Conference
              </h1>
            {/* <img className="h-72 mx-auto" src="/assets/Images/27211.jpg" alt="" /> */}
            <div className="relative group max-w-md mx-auto overflow-hidden  ">
              <img
                className="h-72 w-full object-contain transform transition duration-500  scale-105"
                src="/assets/Images/27211.jpg"
                alt="Conference Visual"
              />
              {/* Optional Overlay Content */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 opacity-100 transition duration-500">
                <p className="text-white text-sm font-medium text-center"  data-aos="fade-up" >Discover Innovations in Big Data & Cloud</p>
              </div>
            </div>
    
          </div>
          <div className="col-span-3 flex flex-col space-y-4">
            <p className="text-justify md:text-lg text-sm leading-7">
              The International Conference on Big Data and Cloud Computing (ICBDCC) is a premier academic platform dedicated to bringing together leading researchers, academicians, industry professionals, and students to share their knowledge and insights on recent advances in Big Data, Cloud Computing, and related technologies.
            </p>
            <p className="text-justify md:text-lg text-sm leading-7">
              ICBDCC provides a dynamic forum for discussing cutting-edge innovations, challenges, and future trends in the data-driven world. The conference fosters collaboration and promotes interdisciplinary research across key areas such as artificial intelligence, machine learning, Internet of Things (IoT), edge/fog computing, cybersecurity, and data analytics.            </p>
          </div>
        </section>
        <section className=" ">
          <h1 className="bg-[#F2CB51] text-[#1B1F3B] text-center w-fit mx-auto rounded-full px-6 py-2 font-semibold lg:text-2xl text-lg md:mb-10 mb-5" >
            Scope of the Conference
          </h1>

          <div className="  mx-auto   text-justify text-gray-700 space-y-4 text-sm md:text-lg leading-7">
            <p className='leading-7'>
              The International Conference on Big Data and Cloud Computing (ICBDCC) aims to explore the transformative impact of big data technologies and cloud infrastructure on various domains. The conference provides a global platform for researchers, academicians, and professionals to present and discuss innovative advancements, practical applications, and future trends.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                Big Data frameworks, tools, and platforms for real-time and batch processing.
              </li>
              <li>
                Cloud computing architectures, virtualization, and resource management.
              </li>
              <li>
                Integration of Artificial Intelligence and Machine Learning in Big Data analytics.
              </li>
              <li>
                Cloud security, privacy, compliance, and governance challenges and solutions.
              </li>
              <li>
                Data storage, retrieval, and management techniques in distributed cloud systems.
              </li>
              <li>
                Edge and Fog Computing approaches in scalable data-driven environments.
              </li>
              <li>
                Case studies of cloud-based applications in healthcare, finance, and smart cities.
              </li>
              <li>
                Internet of Things (IoT) and its synergy with cloud and big data infrastructures.
              </li>
              <li>
                Blockchain and its integration into secure and decentralized cloud systems.
              </li>
              <li>
                Performance evaluation, benchmarking, and energy-efficient computing in big data and cloud.
              </li>
            </ul>
          </div>
        </section>

      </section>

      <section className=" ">
        <h1 className="bg-[#3E8000] h-[4px] w-full" />
      </section>
            <LastSection />

    </>
  )
}

export default About

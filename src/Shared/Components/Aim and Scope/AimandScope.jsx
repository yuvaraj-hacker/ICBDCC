import React from 'react';
import { Link } from 'react-router-dom';
import LastSection from '../Last/LastSection';

function AimandScope() {
    return (
        <>

            <section className="flex flex-col md:gap-20 gap-10  max-w-[90rem] md:py-20 py-10 mx-auto md:px-5 px-3  ">
                {/* Scope Header and Image Section */}
                <section className=' flex flex-col md:gap-10 gap-5'>
                    <h1 className="bg-[#F2CB51] text-[#1B1F3B] text-center w-fit mx-auto rounded-full px-6 py-2 font-semibold lg:text-2xl text-lg">
                        Scope of the Conference
                    </h1>
                    <section className="grid md:grid-cols-5 grid-cols-1 md:gap-5 gap-3 items-center">
                        <div className="col-span-2">
                            <div className="relative group overflow-hidden rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
                                <img
                                    className="h-72 w-full object-cover transform group-hover:scale-105 transition duration-500"
                                    src="/assets/Images/compute.jpg"
                                    alt="Conference Scope Visual" loading='lazy'
                                />
                                {/* Optional overlay or label */}
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4">
                                    <p className="text-white text-sm font-semibold"  data-aos="fade-up" >Empowering Innovation in Big Data & Cloud Computing</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-3 flex flex-col space-y-4">
                            <p className="text-justify md:text-base text-sm leading-7">
                                The International Conference on Big Data and Cloud Computing (ICBDCC)
                                aims to provide a comprehensive platform for researchers, practitioners,
                                and academicians to explore the vast and evolving landscape of data-centric
                                and cloud-based technologies. The scope of the conference encompasses
                                theoretical foundations, practical implementations, and innovative
                                applications that address modern challenges in computing, connectivity, and intelligence.
                            </p>
                            <p className="text-justify md:text-base text-sm leading-7">
                                ICBDCC provides a dynamic forum for discussing cutting-edge innovations,
                                challenges, and future trends in the data-driven world. The conference
                                fosters collaboration and promotes interdisciplinary research across key
                                areas such as artificial intelligence, machine learning, Internet of Things (IoT),
                                edge/fog computing, cybersecurity, and data analytics.
                            </p>
                        </div>
                    </section>
                </section>
                {/* Detailed Topics Section */}
                <section className="flex flex-col gap-4">
                    <p className="md:text-base text-sm text-justify leading-7">
                        The conference focuses on innovations in managing and analyzing massive datasets.
                        Topics include data mining, real-time analytics, data lakes, and high-performance computing.
                        Emphasis is placed on scalable architectures and distributed data processing tools like Hadoop and Spark.
                        Research on data cleaning, integration, and visualization is also welcomed.
                        Applications in healthcare, finance, social media, and more are encouraged.
                    </p>
                    <p className="md:text-base text-sm text-justify leading-7">
                        Explore the latest advancements in cloud service models such as IaaS, PaaS, and SaaS.
                        Topics include resource allocation, virtualization, cloud automation, and orchestration.
                        Sessions will highlight edge computing, fog computing, and hybrid cloud environments.
                        Scalability, fault tolerance, and performance optimization in cloud systems are core areas.
                        Researchers can also present work on cloud platforms like AWS, Azure, and GCP.
                    </p>
                </section>
            </section>


            <section className=" ">
                <h1 className="bg-[#3E8000] h-[2px] w-full" />
            </section>
            <LastSection />

        </>
    );
}

export default AimandScope;

import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'

function PeerReview() {
    return (
        <>
            <section className="flex flex-col md:gap-10 gap-5 max-w-[90rem] py-10 md:py-20  mx-auto md:px-5 px-3">
                <h1 className="bg-[#F2CB51] text-[#1B1F3B] text-center w-fit mx-auto rounded-full px-6 py-2 font-semibold lg:text-2xl text-lg">
                    Conference Tracks
                </h1>

                <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
                    {[
                        {
                            title: "Big Data Analytics and Machine Learning",
                            desc: "Exploring tools and techniques to analyze vast datasets and apply predictive, prescriptive, and descriptive models using ML algorithms.",
                        },
                        {
                            title: "Cloud Infrastructure and Virtualization",
                            desc: "Designing and managing scalable cloud platforms with virtualized environments, containers, and orchestration tools like Kubernetes.",
                        },
                        {
                            title: "IoT and Cloud Integration",
                            desc: "Integration of Internet of Things devices with cloud platforms for real-time processing, analytics, and automation.",
                        },
                        {
                            title: "Data Mining and Predictive Modeling",
                            desc: "Innovations in pattern recognition, feature extraction, and building predictive systems for decision-making support.",
                        },
                        {
                            title: "Blockchain in Cloud Environments",
                            desc: "Decentralized architectures for secure data exchange and trustless transactions within cloud-based ecosystems.",
                        },
                        {
                            title: "Edge, Fog, and Distributed Computing",
                            desc: "Leveraging computing at the edge and fog layers to enhance data processing closer to data sources.",
                        },
                        {
                            title: "Cloud Security, Privacy, and Compliance",
                            desc: "Solutions for securing cloud data, ensuring regulatory compliance, and protecting user privacy.",
                        },
                        {
                            title: "AI-Driven Cloud Applications",
                            desc: "Applying AI models and deep learning within cloud platforms to enhance automation, NLP, vision, and other smart services.",
                        },
                        {
                            title: "Scalable Data Storage and Retrieval",
                            desc: "Techniques for efficient storage, indexing, and querying of massive datasets on cloud-native databases and file systems.",
                        },
                        {
                            title: "Serverless Computing and Containerization",
                            desc: "Exploring FaaS, serverless architectures, microservices, and the role of containers in cloud-native development.",
                        },
                        {
                            title: "Smart Cities and Cloud-Enabled Services",
                            desc: "Cloud-backed smart infrastructure in urban development, transportation, governance, and environmental monitoring.",
                        },
                        {
                            title: "High-Performance and Green Cloud Computing",
                            desc: "Optimizing cloud systems for speed and energy-efficiency, and designing sustainable infrastructure solutions.",
                        },
                    ].map((track, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300 border border-gray-100"  >
                            <h2 className=" font-semibold text-[#333] mb-2 md:text-lg text-base">{track.title}</h2>
                            <p className="text-sm text-gray-600 md:text-base">{track.desc}</p>
                        </div>
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

export default PeerReview


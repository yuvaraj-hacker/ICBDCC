
import React, { useState } from 'react'
import Contct from '../Contct/Contct'
import { toast } from 'react-toastify';

function Abstracting() {
    const [formData, setFormData] = useState({ paperTitle: "", name: "", email: "", number: "", institution: "", paper: null, Paper_Track: "" });
    const [uploadFile, setUploadFile] = useState(null);
    const [status, setStatus] = useState('');

    const handleRemoveFile = () => {
        setUploadFile(null);
        document.getElementById("upload-paper").value = ""; // Clear input
    };

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('paperTitle', formData.paperTitle);
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('number', formData.number);
            formDataToSend.append('institution', formData.institution);
            formDataToSend.append('Paper_Track', formData.Paper_Track);

            if (formData.paper) {
                formDataToSend.append('paper', formData.paper);
            }

            const response = await fetch('http://192.168.29.175/my-react-app/send_mail.php', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({
                    paperTitle: '',
                    name: '',
                    email: '',
                    number: '',
                    institution: '',
                    paper: null,
                    Paper_Track: ''
                });
                document.getElementById('paper').value = '';
                toast.success("Paper submitted successfully!");
                console.log("success")
            } else {
                setStatus('Failed to send submission. Please try again.');
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <section className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0  py-10 md:py-20 ">
                <div className="lg:flex md:flex  gap-8 ">
                    <div className="max-w-[90rem] mx-auto w-full ">
                        <div className=' text-center mx-auto flex justify-center md:mb-10 mb-5'>
                            <h1 className="  text-center py-2 w-fit bg-[#F2CB51] px-6  text-[#1B1F3B] rounded-full  font-semibold  lg:text-2xl   text-lg ">
                                New Paper Submission
                            </h1>
                        </div>
                        <div className='grid lg:grid-cols-3 gap-4  items-center'>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-6    mx-auto  ">
                                {/* Submission Guidelines */}
                                <div className="bg-white md:p-5 p-3 rounded-lg border-l-4 border-[#14AE5C] shadow-sm">
                                    <h3 className="text-lg md:text-xl font-semibold text-[#14AE5C] mb-3">Submission Guidelines</h3>
                                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                                        <li>Original and unpublished research papers only</li>
                                        <li>Submit in PDF or DOCX format</li>
                                        <li>Maximum file size: 10 MB</li>
                                        <li>Paper should follow the IEEE format</li>
                                        <li>Include author details on the first page</li>
                                        <li>Ensure all author details are correctly filled</li>
                                        <li>Upload a PDF or Word document of the paper</li>
                                        <li>Only one submission per author will be accepted</li>
                                        <li>Follow the formatting guidelines provided</li>
                                    </ul>
                                </div>
                                {/* Important Notes */}
                                <div className="bg-white md:p-5 p-3 rounded-lg border-l-4 border-[#14AE5C] shadow-sm">
                                    <h3 className="text-lg md:text-xl font-semibold text-[#14AE5C] mb-3">Important Notes</h3>
                                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                                        <li>Verify the accuracy of the contact details before submission.</li>
                                        <li>The first author will be contacted for further correspondence.</li>
                                        <li>Submissions must be made before the deadline date.</li>
                                        <li>Late submissions may not be considered for review.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:max-w-4xl max-w-xl w-full mx-auto col-span-2 ">
                                <div className="  :bg-gray-900 lg:px-20   md:px-5   ">
                                    <div className="    mx-auto max-w-screen-xl  bg-white md:p-6  border-2 rounded-xl  p-3 ">
                                        <form className="w-full   grid lg:grid-cols-2 grid-cols-1 md:gap-5" ngNativeValidate onSubmit={handleSubmit}>
                                            <div className=' '>
                                                <label for="paperTitle" className="block mb-2 text-sm   text-[#1B1F3B]   mt-4 ">
                                                    Paper Title
                                                </label>
                                                <input type="text" ngModel id="paperTitle" name="paperTitle" value={formData.paperTitle} onChange={handleChange} className="shadow-sm bg-white  border  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4" placeholder="Enter Your Name" required />
                                            </div>
                                            <div>
                                                <label for="name" className="block mb-2 text-sm text-[#1B1F3B] mt-4">
                                                    Name
                                                </label>
                                                <input type="text" name="name" id="name" ngModel value={formData.name} onChange={handleChange} className="shadow-sm bg-white  border  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4        "
                                                    placeholder="Enter Your Name" required />
                                            </div>
                                            <div>
                                                <label for="email" className="block mb-2 text-sm   text-[#1B1F3B]   mt-4  ">
                                                    Email
                                                </label>
                                                <input type="email" name="email" id="email" value={formData.email} ngModel onChange={handleChange} className="shadow-sm bg-white border  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4 "
                                                    placeholder="name@gmail.com" required />
                                            </div>
                                            <div>
                                                <label for="number" className="block mb-2 text-sm   text-[#1B1F3B]   mt-4 "  >
                                                    Contact Number
                                                </label>
                                                <input type="text" name="number" id="number" value={formData.number} ngModel onChange={handleChange} className="shadow-sm bg-white    border  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4  "
                                                    placeholder="Enter Your Mobile Number" required
                                                />
                                            </div>
                                            <div>
                                                <label for="institution" className="block mb-2 text-sm   text-[#1B1F3B]   mt-4 "  >
                                                    Institution Name
                                                </label>
                                                <input type="text" name="institution" id="institution" value={formData.institution} ngModel onChange={handleChange} className="shadow-sm bg-white border  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mt-4" placeholder="Enter Your Mobile Number" required />
                                            </div>
                                            <div>
                                                <label for="institution" className="block mb-2 text-sm   text-[#1B1F3B]   mt-4 "  >
                                                    Institution Name
                                                </label>
                                                <select name="Paper_Track" id="Paper_Track" value={formData.Paper_Track || ""}
                                                    onChange={handleChange}
                                                    required
                                                    className="shadow-sm bg-white border  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2 mt-4"                                                >
                                                    <option value=""  >Select Category</option>
                                                    <option value="BigData">Big Data Analytics</option>
                                                    <option value="CloudComputing">Cloud Computing</option>
                                                    <option value="EdgeComputing">Edge & Fog Computing</option>
                                                    <option value="IoT">Internet of Things (IoT)</option>
                                                    <option value="AI">Artificial Intelligence</option>
                                                    <option value="ML">Machine Learning</option>
                                                    <option value="DataScience">Data Science</option>
                                                    <option value="CyberSecurity">Cyber Security in Cloud</option>
                                                    <option value="Blockchain">Blockchain for Data Security</option>
                                                    <option value="DevOps">DevOps and Cloud Infrastructure</option>
                                                    <option value="5G">5G and Cloud Integration</option>
                                                    <option value="QuantumComputing">Quantum Computing in Cloud</option>

                                                </select>                                            </div>

                                            <div className="md:col-span-2 mt-5">
                                                <label className="block mb-2 text-sm text-[#1B1F3B]">Upload Paper</label>
                                                {/* <div className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-white hover:border-[#6366f1] transition duration-300">
                                                    <input type="file"
                                                        accept=".pdf,.doc,.docx" id="upload-paper" name="paper" className="hidden" onChange={handleChange} />
                                                    <label htmlFor="upload-paper" className="flex flex-col items-center justify-center w-full h-full text-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-indigo-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"   >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" />
                                                        </svg>
                                                        <p className="text-gray-700">Click or Drag to Upload Paper</p>
                                                    </label>
                                                </div> */}
                                                <input
                                                    type="file"
                                                    id="paper"
                                                    name="paper"
                                                    onChange={handleChange}
                                                    accept=".pdf,.doc,.docx"
                                                    required
                                                    className="w-full p-2 border border-[#0B4F8E] rounded-lg ring-1 ring-transparent bg-white focus:ring-[#0B4F8E] focus:outline-none"
                                                />
                                            </div>
                                            {uploadFile && (
                                                <div className="mt-4 bg-white p-3 rounded shadow flex justify-between items-center">
                                                    <div className="text-sm text-gray-800 truncate w-full pr-4">{uploadFile.name}</div>
                                                    <button onClick={handleRemoveFile} className="text-red-500 hover:text-red-700 transition cursor-pointer" title="Remove file"   >
                                                        ✕
                                                    </button>
                                                </div>
                                            )}
                                            <div className="text-center mx-auto mt-5  md:col-span-2">
                                                <button type="submit" disabled={status === 'Sending...'}
                                                    className="py-3 px-5 text-sm  bg-primary-blue-color  text-center hover:border border hover:duration-300 hover:border-[#F2CB51] border-[#F2CB51] hover:border-dashed  bg-[#14AE5C]   cursor-pointer hover:text-primary-blue-color  text-white   bg-primary-red-color sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300    " >
                                                    {status === 'Sending...' ? 'Submitting...' : 'Submit Paper'}

                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className=" ">
                <h1 className="bg-[#3E8000] h-[2px] w-full" />
            </section>
            <Contct />
        </>
    )
}

export default Abstracting


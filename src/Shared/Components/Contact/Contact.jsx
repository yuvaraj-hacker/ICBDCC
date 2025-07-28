
import React, { useState } from 'react'
import Contct from '../Contct/Contct'
import { toast } from 'react-toastify';

function Contact() {

    const [formData, setFormData] = useState({ firstname: "", email: "", number: "", message: "" });
    const [status, setStatus] = useState('');
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('firstname', formData.firstname);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('number', formData.number);
            formDataToSend.append('message', formData.message);
            const response = await fetch('https://icbdcc.com/api/message_mail.php', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({
                    firstname: '',
                    email: '',
                    number: '',
                    message: '',
                });
                toast.success("submitted successfully!");
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
            <section className='bg-gradient-to-br to-[#e7f3ec] via-[#f8fafc] from-[#ffffff]'>
                <section className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0  py-10 md:py-20 ">
                    <div className="lg:flex md:flex  gap-8 ">
                        <div className="max-w-full w-full ">
                            <div className="lg:max-w-3xl max-w-xl w-full mx-auto  ">
                                <div className="  :bg-gray-900 lg:px-20   md:px-5     ">
                                    <div className=' text-center mx-auto flex justify-center  md:mb-10 mb-5 '>
                                        <h1 className="text-center py-2 bg-[#F2CB51] px-6  text-[#1B1F3B] rounded-full   font-semibold  lg:text-2xl   text-lg ">
                                            Contact
                                        </h1>
                                    </div>
                                    <div className="mx-auto max-w-screen-md  border-2 bg-white border-gray-200 md:p-6 rounded-xl p-3">
                                        <form onSubmit={handleSubmit} className="w-full space-y-4  " ngNativeValidate>
                                            <div>
                                                <label for="email" className="block mb-2 text-sm mt-4 ">
                                                    Name
                                                </label>
                                                <input type="text" name="firstname" id="firstname"
                                                    value={formData.firstname}
                                                    onChange={handleChange}
                                                    ngModel className="shadow-sm   border text-sm  rounded-md border-gray-300  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  mt-4" placeholder="Enter Your Name" required />
                                            </div>
                                            <div>
                                                <label for="email" className="block mb-2 text-sm mt-4">
                                                    Email
                                                </label>
                                                <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} ngModel className="shadow-sm  border rounded-md border-gray-300    text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4 "
                                                    placeholder="name@gmail.com" required />
                                            </div>
                                            <div>
                                                <label for="email" className="block mb-2 text-sm      mt-4 "  >
                                                    Contact Number
                                                </label>
                                                <input type="text" name="number" id="number" onChange={handleChange} value={formData.number} ngModel className="shadow-sm  border rounded-md border-gray-300    text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4  "
                                                    placeholder="Enter Your Mobile Number" required />
                                            </div>
                                            <div className="sm:col-span-2 mt-4">
                                                <label for="message" className="block mb-2 text-sm ">
                                                    Your Message
                                                </label>
                                                <textarea id="message" name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    ngModel
                                                    rows="4"
                                                    className="block p-2.5 w-full text-sm shadow-sm border rounded-md border-gray-300   focus:ring-primary-500 focus:border-primary-500   mt-4 "
                                                    placeholder="Leave a Message..."
                                                ></textarea>
                                            </div>
                                            <div className="text-center md:mt-0 mt-5 ">
                                                <button type="submit" className="py-3 px-5 text-sm hover:border border rounded-full hover:duration-300 hover:border-[#F2CB51] border-[#F2CB51] hover:border-dashed  bg-primary-blue-color  text-center   bg-[#14AE5C]  text-white  cursor-pointer hover:text-primary-blue-color     bg-primary-red-color sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300    " >

                                                    {status === 'Sending...' ? 'Submitting...' : 'Send message'}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </section>
            {/* <section className=" ">
                <h1 className="bg-[#3E8000] h-[2px] w-full" />
            </section> */}
            <Contct />
        </>
    )
}

export default Contact


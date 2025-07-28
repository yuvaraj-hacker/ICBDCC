
import React, { useState } from 'react'
import Contct from '../Contct/Contct'
import { toast } from 'react-toastify';

function Abstracting() {
    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    });
    const [fileName, setFileName] = useState('Choose Your File');
    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;


        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };
    const [status, setStatus] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const journalName = 'icbdcc';
        // Generate unique ID: journalName + YYYYMMDD + HHMMSS
        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
        const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, ''); // HHMMSS
        const uniqueId = `${journalName}_${dateStr}_${timeStr}`;

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Submission_ID', uniqueId);
            formDataToSend.append('Paper_Title', formData.Paper_Title);
            formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Institution_Name', formData.Institution_Name);
            formDataToSend.append('Paper_Track', formData.Paper_Track);

            if (formData.Paper_File) {
                formDataToSend.append('Paper_File', formData.Paper_File);
            }

            const googleSheetsParams = new URLSearchParams();
            googleSheetsParams.append('Submission_ID', uniqueId);
            googleSheetsParams.append('journal_name', journalName);
            googleSheetsParams.append('Paper_Title', formData.Paper_Title);
            googleSheetsParams.append('Author_FUll_Name', formData.Author_FUll_Name);
            googleSheetsParams.append('Email_Address', formData.Email_Address);
            googleSheetsParams.append('Institution_Name', formData.Institution_Name);
            googleSheetsParams.append('Paper_Track', formData.Paper_Track);

            const mailPromise = fetch('https://icbdcc.com/api/send_mail.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const sheetsPromise = fetch('https://script.google.com/macros/s/AKfycbwZ_TtKUqAfcue9TNCKy57hTrCKDUP5dTQnWbpSxBDzlRMllEuOoaxzRDl0kQPah5pZ/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: googleSheetsParams.toString(),
            });

            const [mailResponse, sheetsResponse] = await Promise.allSettled([mailPromise, sheetsPromise]);

            const mailSuccess = mailResponse.status === 'fulfilled' && mailResponse.value.ok;
            const sheetsSuccess = sheetsResponse.status === 'fulfilled';

            if (sheetsResponse.status === 'rejected') {
                console.error('Sheets request failed:', sheetsResponse.reason);
            }

            if (mailSuccess && sheetsSuccess) {
                setStatus(`Submission successful! Data sent to both email and Google Sheets (${journalName}). Submission ID: ${uniqueId}`);

                setFormData({
                    Paper_Title: '',
                    Author_FUll_Name: '',
                    Email_Address: '',
                    Institution_Name: '',
                    Paper_Track: '',
                    Paper_File: null,
                });
                setFileName('')
                const fileInput = document.getElementById('Paper_File');
                if (fileInput) {
                    fileInput.value = '';
                } else {
                    console.error('Element with ID "Paper_File" not found.');
                }
                toast.success(`Paper submitted successfully!`);

            } else if (mailSuccess && !sheetsSuccess) {
                setStatus('Email sent successfully, but there might be an issue with Google Sheets.');
                toast.warning('Email sent successfully. Please check if data was saved to Google Sheets.');

            } else if (!mailSuccess && sheetsSuccess) {
                setStatus('Data likely saved to Google Sheets, but failed to send email.');
                toast.warning('Data might be saved to Google Sheets, but failed to send email.');

            } else {
                setStatus('There might be issues with the submission. Please check manually.');
                toast.error('Submission completed, but please verify the results manually.');
            }

        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred during submission. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    }

    return (
        <>
            <section className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0  py-10 md:py-20 ">
                <div className="lg:flex md:flex  gap-8 ">
                    <div className="max-w-[70rem] mx-auto w-full ">
                        <div className='text-center mx-auto flex justify-center md:mb-10 mb-5'>
                            <h1 className="text-center py-2 w-fit bg-[#F2CB51] px-6  text-[#1B1F3B] rounded-full  font-semibold lg:text-2xl text-lg ">
                                New Paper Submission
                            </h1>
                        </div>
                        <div className='grid lg:grid-cols-3 md:gap-4  gap-4 items-center'>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mx-auto  ">
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

                            <div className="  w-full ml-auto col-span-2 ">
                                <div className="  :bg-gray-900   ml-auto w-full  ">
                                    <div className="    mx-auto max-w-screen-xl  bg-white  border-2 border-gray-300 rounded-xl   ">
                                        <form className="w-full   grid lg:grid-cols-2 grid-cols-1 md:gap-5 bg-gradient-to-br to-[#e7f3ec] p-3   md:p-6 rounded-xl via-[#f8fafc] from-[#ffffff]" ngNativeValidate onSubmit={handleSubmit}>
                                            <div className=' '>
                                                <label for="Paper_Title" className="block mb-2 text-sm   text-[#1B1F3B]   mt-4 ">
                                                    Paper Title
                                                </label>
                                                <input type="text" ngModel id="Paper_Title" name="Paper_Title" value={formData.Paper_Title} onChange={handleFileInputChange} className="shadow-sm bg-white  border border-gray-200 rounded-md  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4" placeholder="Enter the Paper Title" required />
                                            </div>
                                            <div>
                                                <label for="Author_FUll_Name" className="block mb-2 text-sm text-[#1B1F3B] mt-4">
                                                    Name
                                                </label>
                                                <input type="text" name="Author_FUll_Name" id="Author_FUll_Name" ngModel value={formData.Author_FUll_Name} onChange={handleFileInputChange} className="shadow-sm bg-white  border  text-black text-sm   border-gray-200 rounded-md  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4        "
                                                    placeholder="Enter Your Name" required />
                                            </div>
                                            <div>
                                                <label for="Email_Address" className="block mb-2 text-sm   text-[#1B1F3B]   mt-4  ">
                                                    Email
                                                </label>
                                                <input type="Email_Address" name="Email_Address" id="Email_Address" value={formData.Email_Address} ngModel onChange={handleFileInputChange} className="shadow-sm bg-white border  text-black text-sm  border-gray-200 rounded-md  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4 "
                                                    placeholder="name@gmail.com" required />
                                            </div>
                                            {/* <div>
                                                <label for="number" className="block mb-2 text-sm   text-[#1B1F3B]   mt-4 "  >
                                                    Contact Number
                                                </label>
                                                <input type="text" name="number" id="number" value={formData.number} ngModel onChange={handleFileInputChange} className="shadow-sm bg-white    border  text-black text-sm  border-gray-200 rounded-md      focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4  "
                                                    placeholder="Enter Your Mobile Number" required
                                                />
                                            </div> */}
                                            <div>
                                                <label for="Institution_Name" className="block mb-2 text-sm   text-[#1B1F3B]   mt-4 "  >
                                                    Institution Name
                                                </label>
                                                <input type="text" name="Institution_Name" id="Institution_Name" value={formData.Institution_Name} ngModel onChange={handleFileInputChange} className="shadow-sm bg-white border  border-gray-200 rounded-md text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mt-4" placeholder="Enter Your Institute" required />
                                            </div>
                                            <div>
                                                <label for="Paper_Track" className="block mb-2 text-sm   text-[#1B1F3B]   mt-4 "  >
                                                    Paper Track
                                                </label>
                                                <select name="Paper_Track" id="Paper_Track" value={formData.Paper_Track || ""}
                                                    onChange={handleFileInputChange}
                                                    required
                                                    className="shadow-sm bg-white border  text-black text-sm  border-gray-200 rounded-md    focus:ring-primary-500 focus:border-primary-500 block w-full p-2 mt-4"                                                >
                                                    <option  >Select Category</option>
                                                    <option  >Big Data Analytics</option>
                                                    <option  >Cloud Computing</option>
                                                    <option  >Edge & Fog Computing</option>
                                                    <option  >Internet of Things (IoT)</option>
                                                    <option  >Artificial Intelligence</option>
                                                    <option  >Machine Learning</option>
                                                    <option  >Data Science</option>
                                                    <option  >Cyber Security in Cloud</option>
                                                    <option  >Blockchain for Data Security</option>
                                                    <option  >DevOps and Cloud Infrastructure</option>
                                                    <option  >5G and Cloud Integration</option>
                                                    <option  >Quantum Computing in Cloud</option>
                                                </select>
                                            </div>

                                            <div className="md:col-span-2 mt-5">
                                                <label className="block mb-2 text-sm text-[#1B1F3B]">Upload Paper</label>
                                                {/* <div className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-white hover:border-[#6366f1] transition duration-300">
                                                    <input type="file"
                                                        accept=".pdf,.doc,.docx" id="upload-paper" name="paper" className="hidden" onChange={handleFileInputChange} />
                                                    <label htmlFor="upload-paper" className="flex flex-col items-center justify-center w-full h-full text-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-indigo-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"   >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" />
                                                        </svg>
                                                        <p className="text-gray-700">Click or Drag to Upload Paper</p>
                                                    </label>
                                                </div> */}
                                                <input
                                                    id='Paper_File'
                                                    name='Paper_File'
                                                    accept=".pdf,.doc,.docx"
                                                    type="file"
                                                    onChange={handleFileInputChange}
                                                    className="w-full p-2 border  border-gray-200 rounded-md border-[#0B4F8E] rounded-lg ring-1 ring-transparent bg-white focus:ring-[#0B4F8E] focus:outline-none"

                                                />
                                                <p className=" text-xs mt-3">* Maximum File Size: 10 MB</p>
                                                {/* <p className="z-0">{fileName || "Click to Upload Paper"}</p> */}

                                            </div>
                                            {/* {uploadFile && (
                                                <div className="mt-4 bg-white p-3 rounded shadow flex justify-between items-center">
                                                    <div className="text-sm text-gray-800 truncate w-full pr-4">{uploadFile.Paper_File}</div>
                                                    <button onClick={handleRemoveFile} className="text-red-500 hover:text-red-700 transition cursor-pointer" title="Remove file"   >
                                                        ✕
                                                    </button>
                                                </div>
                                            )} */}
                                            <div className="text-center mx-auto mt-5  md:col-span-2">
                                                <button type="submit" disabled={status === 'Sending...'}
                                                    className="py-3 px-5 text-sm  bg-primary-blue-color  text-center hover:border rounded-full border hover:duration-300 hover:border-[#F2CB51] border-[#F2CB51] hover:border-dashed  bg-[#14AE5C]   cursor-pointer hover:text-primary-blue-color  text-white   bg-primary-red-color sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300    " >
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


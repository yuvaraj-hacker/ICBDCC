import React from 'react';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-[92rem] mx-auto px-5 lg:py-10 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* Brand Section */}
          <div className="text-center  md:text-left mx-auto flex flex-col gap-4">
            {/* <h3 className="text-2xl font-bold mb-2">ICBDCC</h3> */}
            <img className='w-40 mx-auto md:mx-0 bg-white p-2 rounded-md'  src="/assets/Images/ICBDCC.png" alt="" />
            <p className="text-sm text-gray-200">
              International Conference on Big Data and Cloud Computing.
            </p>
          </div>

          {/* Pages */}
          <div className="text-center md:text-left  mx-auto">
            <h4 className="text-lg font-semibold mb-2">Pages</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About the Conference</Link></li>
              <li><Link to="/scope" className="hover:underline">Scope of the Conference</Link></li>
            </ul>
          </div>

          {/* Conference Info */}
          <div className="text-center md:text-left  mx-auto">
            <h4 className="text-lg font-semibold mb-2">Conference Info</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="/key-dates" className="hover:underline">Registration Details</Link></li>
              <li><Link to="/paper-submission" className="hover:underline">Paper Submission</Link></li>
            </ul>
          </div>

          {/* Optional Contact or Social Media */}
          <div className="text-center md:text-left mx-auto">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <ul className="space-y-1 text-sm">
              <li>Email: <a href="mailto:info@icbdcc.org" className="underline">info.icbdcc@gmail.com</a></li>
              <li>Location: Beijing, China</li>
            </ul>
          </div>
        </div>

        {/* Divider and Footer Bottom */}
        <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} ICBDCC. All rights reserved.
        </div>
      </div>
    </footer>

  );
};
export default Footer;

import React, { useEffect } from "react";
import Approuter from "./Router/Approuter";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Approuter />
      {/* Example content
      <section>
        <div>
          <p className="">Yuvaraj</p>
        </div>
      </section>
      */}
    </>
  );
}

export default App;

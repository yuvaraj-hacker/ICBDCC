import React from "react";
import {Home} from "../Shared/Components/Home/Home";
import HelmetComponent from "./Helmet/HelmetProvider";

function Homes() {
  return (
    <>
      <HelmetComponent canonical={'https://icbdcc.com/'} />
      <Home />
    </>
  );
}

export default Homes;

import React from 'react'
import About from '../Shared/Components/About/About'
import HelmetComponent from './Helmet/HelmetProvider'

function Abouts() {
  return (
    <>
      <HelmetComponent title="About - International Journal of Advanced Trends in Robotics and Automation" />
      <About />
    </>
  )
}

export default Abouts
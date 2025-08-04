import React from 'react'
import About from '../Shared/Components/About/About'
import HelmetComponent from './Helmet/HelmetProvider'

function Abouts() {
  return (
    <>
      <HelmetComponent title="About - International Conference on Big-Data and Cloud Computing" canonical={'https://icbdcc.com/about'} />
      <About />
    </>
  )
}

export default Abouts
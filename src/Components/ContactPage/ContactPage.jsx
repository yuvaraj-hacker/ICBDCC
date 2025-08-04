import React from 'react'
import Contact from '../../Shared/Components/Contact/Contact'
import HelmetComponent from '../Helmet/HelmetProvider'

function ContactPage() {
    return (
        <>
            <HelmetComponent title="Contact Us - International Conference on Big-Data and Cloud Computing" canonical={'https://icbdcc.com/contact'} />
            <Contact />
        </>
    )
}

export default ContactPage

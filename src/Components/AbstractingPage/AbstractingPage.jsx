import React from 'react'
import Abstracting from '../../Shared/Components/Abstracting/Abstracting'
import HelmetComponent from '../Helmet/HelmetProvider'

function AbstractingPage() {
    return (
        <>
            <HelmetComponent title="Paper Submission - International Conference on Big-Data and Cloud Computing" canonical={'https://icbdcc.com/paper-submission'} />
            <Abstracting />
        </>
    )
}

export default AbstractingPage

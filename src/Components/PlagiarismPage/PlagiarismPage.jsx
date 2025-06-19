import React from 'react'
import Plagiarism from '../../Shared/Components/Plagiarism/Plagiarism'
import HelmetComponent from '../Helmet/HelmetProvider'

function PlagiarismPage() {
    return (
        <>
            <HelmetComponent title="Plagiarism - International Journal of Advanced Trends in Robotics and Automation" />
            <Plagiarism />
        </>
    )
}

export default PlagiarismPage

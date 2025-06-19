import React from 'react'
import MalPractice from '../../Shared/Components/MalPractice/MalPractice'
import HelmetComponent from '../Helmet/HelmetProvider'

function MalPracticePage() {
    return (
        <>
            <HelmetComponent title="Malpractice - International Journal of Advanced Trends in Robotics and Automation" />
            <MalPractice />
        </>
    )
}

export default MalPracticePage

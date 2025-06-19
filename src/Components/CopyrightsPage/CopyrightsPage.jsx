import React from 'react'
import Copyrights from '../../Shared/Components/Copyrights/Copyrights'
import HelmetComponent from '../Helmet/HelmetProvider'

function CopyrightsPage() {
    return (
        <>
            <HelmetComponent title="Copyrights - International Journal of Advanced Trends in Robotics and Automation" />
            <Copyrights />
        </>
    )
}

export default CopyrightsPage

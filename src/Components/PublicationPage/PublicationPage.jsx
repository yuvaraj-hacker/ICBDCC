import React from 'react'
import Publication from '../../Shared/Components/Publication/Publication'
import HelmetComponent from '../Helmet/HelmetProvider'

function PublicationPage() {
    return (
        <>
              <HelmetComponent title="Publication Ethics - International Journal of Advanced Trends in Robotics and Automation" />
            <Publication />
        </>
    )
}

export default PublicationPage

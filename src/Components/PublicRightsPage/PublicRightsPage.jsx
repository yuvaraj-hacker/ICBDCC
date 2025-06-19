import React from 'react'
import PublicRights from '../../Shared/Components/PublicationRights/PublicRights'
import HelmetComponent from '../Helmet/HelmetProvider'

function PublicRightsPage() {
    return (
        <>
            <HelmetComponent title="Publication Rights - International Journal of Advanced Trends in Robotics and Automation" />
            <PublicRights />
        </>
    )
}

export default PublicRightsPage

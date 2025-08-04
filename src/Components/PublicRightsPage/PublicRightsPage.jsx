import React from 'react'
import PublicRights from '../../Shared/Components/PublicationRights/PublicRights'
import HelmetComponent from '../Helmet/HelmetProvider'

function PublicRightsPage() {
    return (
        <>
            <HelmetComponent title="Publication Rights - International Conference on Big-Data and Cloud Computing" />
            <PublicRights />
        </>
    )
}

export default PublicRightsPage

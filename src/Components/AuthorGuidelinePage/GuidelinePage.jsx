import React from 'react'
import Guideline from '../../Shared/Components/AuthorGuideline/Guideline'
import HelmetComponent from '../Helmet/HelmetProvider'

function GuidelinePage() {
    return (
        <>
            <HelmetComponent title="Author Guidelines - International Conference on Big-Data and Cloud Computing" />
            <Guideline />
        </>
    )
}

export default GuidelinePage

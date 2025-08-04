import React from 'react'
import AimandScope from '../../Shared/Components/Aim and Scope/AimandScope'
import HelmetComponent from '../Helmet/HelmetProvider'

function AimScopePage() {
    return (
        <>
            <HelmetComponent title="Scope - International Conference on Big-Data and Cloud Computing" canonical={'https://icbdcc.com/scope'} />
            <AimandScope />
        </>
    )
}

export default AimScopePage

import React from 'react';
import * as APIUtil from '../../util/sessionAPIUtil';
import SignupForm from './SignupForm';

const SessionModal = ({sessionModal} ) => {
    
    const displayedForm = sessionModal === 'signup' ? <SignupForm/> : null

    return(
        <div className= "absolute flex column top-25percent left-40percent bg-yellow z-2 w-25percent h-fit border-rad-5">
            {displayedForm}
        </div>
    )
}
export default SessionModal;
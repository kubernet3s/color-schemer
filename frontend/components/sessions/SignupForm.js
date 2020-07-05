import React, {useState} from 'react';
import {signup} from '../../util/sessionAPIUtil';

const SignupForm = () => {
    let [emailAddress, setEmailAddress] = useState( "" );
    let [secondEmail, setSecondEmail] = useState( "" );
    let [password, setPassword] = useState( "" );
    let [secondPassword, setSecondPassword] = useState( "" );
    let [errors, setErrors] = useState([])

    const handleChange = (stateChangeFunction) =>{
        return (e) => {
            stateChangeFunction(e.target.value);
        };
    }

    const errorCheck = () =>{
        let currentErrors = [];
        if(emailAddress != secondEmail){
            currentErrors.push("Passwords must match")
        }
        if(password != secondPassword){
            currentErrors.push("Emails must match")
        }
        setErrors(currentErrors);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        errorCheck();
        if (errors.length === 0){
            const user = {
                email: emailAddress,
                password: password
            }
            signup(user)
        }
    }

    return(
        <div>
            <header className="bg-red shadow padding-20 bold white border-rad-5">Sign Up Today!</header>
            <form className="flex column padding-20 align-center" onSubmit={handleSubmit}>
                <label for="email" className="margin-b-5">Email Address</label>
                <input id="email" className="w-80percent margin-b-20" 
                    type="email" 
                    value={emailAddress} 
                    onChange={handleChange(setEmailAddress)}
                />

                <label for="reenterEmail" className="margin-b-5">Re-enter Email Address</label>
                <input id="reenterEmail" className="w-80percent margin-b-20" 
                    type="email" 
                    value={secondEmail} 
                    onChange={handleChange(setSecondEmail)}
                />
                
                <label for="password" className="margin-b-5">Password</label>
                <input id="password" className="w-80percent margin-b-20" 
                    type="password" 
                    value={password} 
                    onChange={handleChange(setPassword)}
                />

                <label for="reenterPassword" className="margin-b-5">Re-enter Password</label>
                <input id="reenterPassword" className="w-80percent margin-b-20" 
                    type="password" 
                    value={secondPassword} 
                    onChange={handleChange(setSecondPassword)}
                />
                <button className="bg-red border-rad-5 white align-self-center padding-5 w-25percent">Submit</button>
            </form>
        </div>
    )
}
export default SignupForm;
import React, { useContext, useState } from 'react';

import firebase from 'firebase/app'
import { UserContext } from '../context/UserContext';
import { Redirect } from 'react-router';
import { toast } from 'react-toastify';

const Signup = () => {

    const context = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res)
                context.setUser({ email: res.user.email, uid: res.user.uid })
            })
            .catch(error => {
                console.log(error)
                toast(error.message, {
                    type: "error"
                })
            })
    }

    return (
        <div>
            <h1>Signup Page</h1>
        </div>
    );
}

export default Signup;
import axios from "axios";
import instance from "./instance";

const signup =async(credentials) =>{
    try
    {
        console.log('Signing up User...');
        const response = await instance.authInstance.post('/signup',credentials);
        console.log('Signup successful...');
        console.log(response.data.message);
    }
    catch(error)
    {
        console.log('Signup Failed', error);
    }
}

const signin = async(credentials)=>{
    try{
        console.log('Signing in User...');
        const response = await instance.authInstance.post('/signin',credentials);
        console.log('Signin successful...');
        console.log(response.data);
    }
    catch(error)
    {
        console.log('SignIn Failed...')
    }
}

export default {signup,signin};
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import login from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
        const {signUpWithEmailPass}=useContext(AuthContext)
        const signupHandler =event=>{
            event.preventDefault();
            const form =event.target;
            const name =form.name.value;
            const email =form.email.value;
            const password =form.password.value;
            console.log(email,password,name);

            signUpWithEmailPass(email,password)
            .then(result=>{
                const loggedUser =result.user;
                console.log(loggedUser);
                toast('SignUp Success')
            })
            .catch((error) => {
                
                const errorMessage = error.message;
                console.log(errorMessage);
                toast(errorMessage)
              });
            
        }
    return (
        <div className="grid grid-cols-2 m-10 ">
            <div className="mt-28 ml-10">
                <img src={login} alt="" />
            </div>
            <div className="border rounded-lg p-20">

                <form onSubmit={signupHandler} className="mb-8">
                    <h1 className="text-center mb-12 text-4xl font-bold text-[#444444]">Sign Up</h1>
                    <div>
                        <label className="font-semibold text-lg " htmlFor="name">name</label><br />
                        <input className="border rounded-lg px-6 py-3 w-full mt-5" type="text" name='name' placeholder="Your Name" />
                    </div>
                    <div className="my-7">
                        <label className="font-semibold text-lg " htmlFor="email">Email</label><br />
                        <input className="border rounded-lg px-6 py-3 w-full mt-5" type="email" name='email'placeholder="Your Email" />
                    </div>
                    <div className="my-7">
                        <label className="font-semibold text-lg " htmlFor="password">Password</label><br />
                        <input className="border rounded-lg px-6 py-3 w-full mt-5" type="password" name='password' placeholder="Your Password" />
                    </div>
                    <input className="rounded-lg px-6 py-4 text-white font-bold w-full mt-5 bg-[#FF3811]" type="submit" value="Sign Up" />
                </form>
                <h3 className="text-center text-lg font-medium">Or Sign In with</h3>
                <div className="text-center mt-8">
                    <button className="text-6xl mr-4"><FcGoogle></FcGoogle></button>
                    <button className="text-6xl mr-4 text-red-400 p-1"><BsGithub /></button>
                    <button className="text-6xl text-blue-700 p-1"><BsFacebook /></button>
                    <p className="mt-12 text-[#737373] text-lg ">Already have an account? <Link className="text-[#FF3811] font-semibold" to="/login">LogIn</Link> </p>
                </div>
                
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import login from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const { googleSignIn, gitHubSignIn,facebookSignin,logInWithEmailPass } = useContext(AuthContext);


    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const facebookProvider =new FacebookAuthProvider();
    const googlHander = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                toast("signIn with Google Success")
            })
            .catch(error => {
                console.log(error.massage)
            })

    };
    const gitHandler = () => {
        gitHubSignIn(gitProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast("signIn with GitHub Success")
            })
            .catch(error => {
                console.log(error.massage);
            })
    };
    const faceBookHandler =()=>{
        facebookSignin(facebookProvider)
        .then(result=>{
            const loggedUser =result.user
            console.log(loggedUser);
            toast("signIn with FaceBook Success");
        })
        .catch(error=>{
            console.log(error);
        })
    };

    const logInHandler =event=>{
        event.preventDefault();
        const form =event.target;
        const email =form.email.value;
        const password =form.password.value;
        console.log(email,password);

        logInWithEmailPass(email,password)
        .then(result=>{
            const loggedUser =result.user
            console.log(loggedUser);
            toast("LogIn Success")
        })
        .catch(error=>{
            console.log(error);
            toast("error.message")
        })
    }


    return (
        <div className="grid grid-cols-2 m-10 ">
            <div className="mt-28 ml-10">
                <img src={login} alt="" />
            </div>
            <div className="border rounded-lg p-20">

                <form onSubmit={logInHandler} className="mb-8">
                    <h1 className="text-center mb-12 text-4xl font-bold text-[#444444]">Login</h1>
                    <div>
                        <label className="font-semibold text-lg " htmlFor="email">Email</label><br />
                        <input className="border rounded-lg px-6 py-3 w-full mt-5" type="email" name="email" placeholder="Inter Your Email" />
                    </div>
                    <div className="my-7">
                        <label className="font-semibold text-lg " htmlFor="password">Password</label><br />
                        <input className="border rounded-lg px-6 py-3 w-full mt-5" type="password" name="password" placeholder="Inter Your Password" />
                    </div>
                    <input className="rounded-lg px-6 py-4 text-white font-bold w-full mt-5 bg-[#FF3811]" type="submit" value="Login" />
                </form>
                <h3 className="text-center text-lg font-medium">Or Sign In with</h3>
                <div className="text-center mt-8">
                    <button onClick={googlHander} className="text-6xl mr-4"><FcGoogle></FcGoogle></button>
                    <button onClick={gitHandler} className="text-6xl mr-4 text-red-400 p-1"><BsGithub /></button>
                    <button onClick={faceBookHandler} className="text-6xl text-blue-700 p-1"><BsFacebook /></button>
                    <p className="mt-12 text-[#737373] text-lg ">Do not have any account? <Link className="text-[#FF3811] font-semibold" to="/signup">Sign Up</Link> </p>
                </div>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default Login;
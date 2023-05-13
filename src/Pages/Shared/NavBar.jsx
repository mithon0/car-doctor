import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const NavBar = () => {

    const {email,user,logOut}=useContext(AuthContext);

    const logOutHandlar=()=>{
        logOut()
    }
    const navLink = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        
        {
            !user?<li><Link to="/login">Login</Link></li>:<li><Link to="/booking">Bookings</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 h-24 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {navLink}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className=" w-28 h-20" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end flex">
               {
                user? <a onClick={logOutHandlar} className="btn">logOut</a>:<></>
               }
                <h2>{email}</h2>
            </div>
        </div>
    );
};

export default NavBar;
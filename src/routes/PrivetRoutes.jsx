import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";





const PrivetRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);

    console.log(loading);
    if(loading){
        return<progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }
   
    
  
};

export default PrivetRoutes;
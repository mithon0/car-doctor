import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import SrFooter from "./SrFooter";


const Sevices = () => {
    const [services,setServices]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div>
            <div className="text-center mt-32">
                <h6 className="text-[#FF3811] font-bold text-xl">Service</h6>
                <h1 className="text-[#151515] font-bold text-6xl mt-5">Our Service Area</h1>
                <p className="text-[#737373]  w-[717px] mx-auto mt-5 mb-14">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-3">
            {
                services.map(service=><ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
            </div>
           <div className="mx-auto text-center mt-12">
           <button className="btn btn-outline btn-error ">More Services</button>
           </div>
           <div>
            <SrFooter></SrFooter>
           </div>
        </div>
    );
};

export default Sevices;
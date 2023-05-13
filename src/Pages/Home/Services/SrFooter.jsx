import { FaCalendarAlt } from "react-icons/fa";
import { BsTelephonePlusFill,BsGeoAltFill } from "react-icons/bs";
const SrFooter = () => {
    return (
        <footer className=" grid grid-cols-3 mt-8 mb-8 rounded-lg p-14 bg-[#151515] text-white">
        <div className="flex ">
          <div className=" justify-center my-auto">
            <FaCalendarAlt className="w-10 text-5xl mr-5"/>
          </div>
         <div>
         <a className=" text-sm">We are open monday-friday</a>
          <h1 className="text-2xl">7:00 am - 9:00 pm</h1>
         </div>
        </div> 
        <div  className="flex ">
          <div className=" justify-center my-auto">
            <BsTelephonePlusFill  className="w-10 text-5xl mr-5"/>
          </div>
          <div>
          <a className="text-sm">Have a question?</a>
          <h1 className="text-2xl">+2546 251 2658</h1>
          </div>
        </div> 
        <div className="flex">
          <div className="justify-center my-auto">
          <BsGeoAltFill className="w-10 text-5xl mr-5"></BsGeoAltFill>
          </div>
          <div className="">
          <a className="text-sm">Need a repair? our address</a>
          <h1 className="text-2xl">Liza Street, New York</h1>
          </div>
        </div>
      </footer>
    );
};

export default SrFooter;
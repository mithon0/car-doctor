
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
    const {_id, title, img, price } = service;
    console.log(service);

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-6">
                <figure><img src={img} alt="" /></figure>
                <div className=" flex justify-between">
                    <div>
                        <h2 className="text-[#444444] text-2xl font-bold mt-5">{title}</h2>
                        <p className="text-[#FF3811] font-bold text-xl mt-5">Price: {price}</p>
                    </div>
                    <div className="  ">
                        <Link to={`/bookings/${_id}`}><button className="p-2 bg-red-200 rounded-full mt-16"><FaArrowRight></FaArrowRight></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
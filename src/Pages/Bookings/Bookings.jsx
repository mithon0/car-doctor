
import { useLoaderData } from "react-router-dom";
import CheckoutHeader from "../Shared/CheckoutHeader";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';


const Bookings = () => {
    const {title,price,service_id,_id,img}=useLoaderData();
    const {user}=useContext(AuthContext);

    const handleBookService =(event)=>{
        event.preventDefault();
        const form =event.target;
        const name =form.name.value;
        const email =user?.email;
        const date =form.date.value;
        const serviceId =service_id;
        const booking ={
            customarName:name,
            title,
            email,
            date,
            img,
            serviceId,
            price,
            services_id: _id
        };
        console.log(booking);

        fetch('http://localhost:4000/bookings',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(booking)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        toast('Booking success')
    }

    return (
        <div>
            <CheckoutHeader></CheckoutHeader>
            <div>
                <div className="border bg-[#F3F3F3] rounded-lg p-20">
        <h1 className="text-6xl text-center text-red-600">{title}</h1>
                    <form onSubmit={handleBookService} className="mb-8">

                        <div className="grid md:grid-cols-2 grid-cols-1 mb-5">
                            <div>
                                <input className=" rounded-lg px-6 py-3 w-full mt-5" type="text" name='name' placeholder="Name" defaultValue={user?.displayName} />
                            </div>
                            <div className="ml-6">
                                <input className=" rounded-lg px-6 py-3 w-full mt-5" type="date" name='date' placeholder="date" required />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 mb-5">
                            <div>
                                <input className=" rounded-lg px-6 py-3 w-full mt-5" type="text" name='email' placeholder="Your Email" defaultValue={user?.email} />
                            </div>
                            <div className="ml-6">
                                <input className=" rounded-lg px-6 py-3 w-full mt-5" type="text" name='amount' placeholder="Due Amount" defaultValue={'$'+price} readOnly />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 mb-5">
                            <div>
                                <input className=" rounded-lg px-6 py-3 w-full mt-5" type="text" name='serviceId' placeholder="service_id" defaultValue={service_id} readOnly/>
                            </div>
                            
                        </div>
                        <input className="btn border-none rounded-lg px-6 py-4 text-white font-bold w-full mt-5 bg-[#FF3811]" type="submit" value="Order Confirm" />
                    </form>
                    <ToastContainer/>
                </div>
            </div>
        </div>
    );
};

export default Bookings;
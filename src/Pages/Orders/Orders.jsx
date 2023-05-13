import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingList from "./BookingList";


const Orders = () => {
    const [booking,setBooking]=useState([]);
    const{user}=useContext(AuthContext);
    useEffect(()=>{
        fetch(`http://localhost:4000/bookings?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setBooking(data);
        })
    });

   const handleDelete=(id)=>{
    console.log(id);
    const proceed=confirm('are you sure want to delete?');
    if(proceed){
        fetch(`http://localhost:4000/bookings/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount >0){
                alert('deleted success');
                const remaining=booking.filter(book=>book._id !==id);
                setBooking(remaining)
            }
        })
    }
   }
    return (
        <div>
            <h2 className="text-4xl text-center m-2">Bookings:{booking.length}</h2>
          <div className=" w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr className="text-xl pl-5 ">
        <th></th>
        <th className="">Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    {
        booking.map(book=><BookingList
        key={book._id}
        book={book}
        handleDelete={handleDelete}
        ></BookingList>)
    }
  </table>
</div>
        </div>
    );
};

export default Orders;


const BookingList = ({book,handleDelete}) => {


const {title,img,price,date ,_id}=book;
    return (
       
            <tbody>
      {/* row 1 */}
      <tr>
      <td>
        <h1 className="font-bold"><button onClick={()=>handleDelete(_id)} className="btn rounded-full">x</button></h1>
        </td>
        <td>
          <div className="m-0 ">
            <div className="avatar">
              <div className="w-40 h-40">
                <img className="rounded-xl  " src={img}  />
              </div>
            </div>
            
          </div>
        </td>
        <td>
        <h1 className="font-bold"> {title}</h1>
        </td>
        <td>${price}</td>
        <th>
         <h6>{date}</h6>
        </th>
        <th>
          <button className="btn bg-[#FF3811] border-none">Pending</button>
        </th>
      </tr>
      </tbody>
      
    );
};

export default BookingList;
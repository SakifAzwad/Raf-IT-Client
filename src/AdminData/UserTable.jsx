/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";


const UserTable = ({user,idx,refetch}) => {

    const axiosPublic = useAxiosPublic();
    const {_id,name,role,image}=user;
    const handleMakeAdmin = () =>{
        axiosPublic.patch(`/users/${_id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is a HR Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }


    
    return (
        <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              
            </div>
          </div>
        </td>
        <td>
          {role}
        </td>
        <td>
            {
                role==="HR" ? <button disabled className="btn ">Make HR</button> : <button onClick={handleMakeAdmin} className="btn ">Make HR</button>
            }
            
        </td>
        <th>
        <button className="btn ">Fire</button>
        </th>
      </tr>
    );
};

export default UserTable;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";

const UserTable = ({ user, idx, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const { _id, name, role, image,isFire } = user;
  const handleMakeAdmin = () => {
    axiosPublic.patch(`/users/role/${_id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} is a HR Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Fire ${name}? `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Fire",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.patch(`/users/fire/${_id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} is a fired!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

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
      <td>{role}</td>
      <td>
        {role === "HR" ? (
          <button disabled className="btn ">
            Make HR
          </button>
        ) : (
          <button onClick={handleMakeAdmin} className="btn ">
            Make HR
          </button>
        )}
      </td>
      <td>
        {
            isFire===false ? (<button  onClick={handleDeleteUser} className="btn px-8">
            Fire
          </button>) : (<button disabled onClick={handleDeleteUser} className="btn px-8 ">
          Fired
        </button>)
        }
        
      </td>
    </tr>
  );
};

export default UserTable;

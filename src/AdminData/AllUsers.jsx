/* eslint-disable no-unused-vars */
import useUsers from "../hooks/useUsers";
import UserTable from "./UserTable";


const AllUsers = () => {
    const [users, ,refetch] = useUsers();
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Designation</th>
        <th>Make HR</th>
        <th>Fire</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,idx)=>
            user.role==="admin" || <UserTable user={user} refetch={refetch} idx={idx} key={user._id}></UserTable>
        )
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;
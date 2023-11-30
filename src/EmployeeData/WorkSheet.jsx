/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthCon } from "../Provider/AuthProv";
import useUsers from "../hooks/useUsers";
import useAxiosPublic from "../hooks/useAxiosPublic";
import swal from "sweetalert";
import useWork from "../hooks/useWork";
import DataTable from "react-data-table-component";
import EmpTable from "./EmpTable";


const WorkSheet = () => {
    const { user} = useContext(AuthCon);
    const [users, , ] = useUsers();
    const [works, , refetch]= useWork();
    
    const axiosPublic = useAxiosPublic();
    const {email}=user;
    const foundUser = users.find(user => user?.email === email);

    const [formData, setFormData] = useState({
        task: 'sales',
        hours: '',
        date: ''
      });

      const handleChange = (e) => {
        e.preventDefault()
        
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

    const workadd =(e) => {
    
        e.preventDefault();
        console.log('Form submitted:', formData);

        const userInfo = {
            name: foundUser.name,
            email: foundUser.email,
            task:formData.task,
            hours:formData.hours,
            date:formData.date,
          };
          axiosPublic.post("/worksheet", userInfo).then((res) => {
            if (res.data.insertedId) {
                refetch();
              swal(
                `Data Added!`,
                ``,
                "success"
              );
            }
          });
    }
    return (
        <div>
           <form onSubmit={workadd} className="card-body">
        <div className="flex justify-center items-center gap-x-12">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Tasks</span>
          </label>
          <select className="input input-bordered" id="task" name="task" value={formData.task} onChange={handleChange}>
            <option value="sales">Sales</option>
            <option value="support">Support</option>
            <option value="content">Content</option>
            <option value="paperwork">Paperwork</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Hours Worked</span>
          </label>
          <input value={formData.hours} onChange={handleChange} placeholder="Hours" type="number" id="hours" name="hours" min="1" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input value={formData.date} onChange={handleChange} type="date" id="date" name="date" placeholder="Date" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Submit</span>
          </label>
          <button className="btn hover:bg-white hover:text-col1 bg-col1 border-1 text-white text-lg ">Submit</button>
        </div>
        </div>
        
      </form>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Task</th>
              <th>Hours</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {works.map(
              (user, idx) =>
                user.email === email && (
                  <EmpTable
                    user={user}
                    refetch={refetch}
                    idx={idx}
                    key={user._id}
                  ></EmpTable>
                )
            )}
          </tbody>
        </table>
      </div>

        </div>
    );
};

export default WorkSheet;
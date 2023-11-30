/* eslint-disable no-unused-vars */
import DataTable from "react-data-table-component";
import useUsers from "../hooks/useUsers";

import { IoMdClose, IoMdCheckmark } from "react-icons/io";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";
import swal from "sweetalert";
import './Acss.css'

function formatDateString(inputString) {
  const date = new Date(inputString);
  const formattedDate = date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  return formattedDate;
}

const EmployeeList = () => {

    const [users, , refetch] = useUsers();
    const axiosPublic = useAxiosPublic();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState({});

    
  const salaryadd = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const date = form.get("year");
    const formattedResult = formatDateString(date);
    console.log(selectedRowData);
    const email=selectedRowData.email;

    axiosPublic.post("/salary", {email,formattedResult}).then((res) => {
        if (res.data.insertedId || res.data.modifiedCount) {
            Swal.fire({
                title: "Good job!",
                text: "Salary Paid successfully",
                icon: "success",
                customClass: {
                    container: 'my-swal'
                  }
              });
        }
      });
  };

  const customStyles = {
    cells: {
      style: {
        justifyContent: "center",
      },
    },
    headCells: {
      style: {
        justifyContent: "center",
      },
    },
  };

 

  const emp = users.filter((user) => user.role === "Employee");
  const verifiedButton = (row) => {
    axiosPublic.patch(`/users/verified/${row._id}`).then((res) => {
      console.log(res.data);
      refetch();
    });
  };

  const openModal = (rowData) => {
    setSelectedRowData(rowData);
    document.getElementById("my_modal_5").showModal();
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Bank Account",
      selector: (row) => row.account,
    },
    {
      name: "Salary",
      selector: (row) => row.salary,
    },
    {
      name: "Verified",
      cell: (row) =>
        row.isVerified ? (
          <button
            onClick={() => verifiedButton(row)}
            className="btn btn-ghost btn-lg text-green-500 my-4"
          >
            <IoMdCheckmark size={40} />
          </button>
        ) : (
          <button
            className="btn btn-ghost btn-lg text-red-500 my-4"
            onClick={() => verifiedButton(row)}
          >
            <IoMdClose size={40} />
          </button>
        ),
    },
    {
      name: "Pay",
      cell: (row) =>
        row.isVerified ? (
          <>
            <button
              onClick={() => openModal(row)}
              className="btn hover:bg-white hover:text-col1 bg-col1 border-1 text-white text-lg "
            >
              Pay
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg text-center">
                  Payable Amount
                </h3>
                <p className="py-4 text-2xl text-center">
                  Tk - {selectedRowData.salary}
                </p>
                <form onSubmit={salaryadd} className="card-body gap-y-0">
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">
                        Select the Month and Year
                      </span>
                    </label>
                    <input
                      name="year"
                      type="month"
                      placeholder="Year"
                      
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <button className="btn mx-24 mt-4 hover:bg-white hover:text-col1 bg-col1 border-2 text-white text-lg">
                    Pay
                  </button>
                </form>
                <div className="modal-action justify-center mt-0">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Cancel</button>
                  </form>
                </div>
              </div>
            </dialog>
          </>
        ) : (
          <button
            disabled
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn hover:bg-white hover:text-col1 bg-col1 border-1 text-white text-lg "
          >
            Pay
          </button>
        ),
    },
    {
      name: "Details",
      cell: (row) => (
        <button
          className="btn hover:bg-white hover:text-col1 bg-col1 border-1 text-white text-lg "
          
        >
          Details
        </button>
      ),
    },
  ];

  return (
    <div>
      <DataTable
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
        columns={columns}
        data={emp}
        customStyles={customStyles}
      />
    </div>
  );
};

export default EmployeeList;

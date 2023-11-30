/* eslint-disable no-unused-vars */
import { useContext } from "react";
import useSalary from "../hooks/useSalary";
import { AuthCon } from "../Provider/AuthProv";
import DataTable from "react-data-table-component";
import useUsers from "../hooks/useUsers";


function generateTransactionId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const idLength = 10;
    let transactionId = '';
  
    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      transactionId += characters.charAt(randomIndex);
    }
  
    return transactionId;
  }

const PaymentHistory = () => {
    const [sala, , ] = useSalary();
    const { user} = useContext(AuthCon);
    const [users, , refetch] = useUsers();
    const {email}=user;
    const foundUser = users.find(user => user.email === email);
    

    const uniqueSalaryDetails = new Set();
    sala.forEach((entry) => {
        if (entry.email === email) {

            const sortedDetails = entry.salaryDetails.sort((a, b) => {
                const dateA = new Date(a);
                const dateB = new Date(b);
                return dateB - dateA;
              });

          sortedDetails.forEach((detail) => {
        uniqueSalaryDetails.add(detail);
      });
        }
      });

      console.log(Array.from(uniqueSalaryDetails));

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
      const columns = [
        {
          name: "Month and Year",
          selector: (row) => row,
          sortable: true,
        },
        {
          name: "Salary",
          cell: () => foundUser.salary,
        },
        {
          name: "Transaction ID",
          cell: (row) => generateTransactionId(),
        },
    ]
    

    return (
        <div>

            <div>
                <h1 className="text-center text-4xl underline mb-8">Payment History</h1>
            </div>
            <DataTable
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
        columns={columns}
        data={Array.from(uniqueSalaryDetails)}
        customStyles={customStyles}
      />
        </div>
    );
};

export default PaymentHistory;
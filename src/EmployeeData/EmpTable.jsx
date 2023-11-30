/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const EmpTable = ({ user, idx, refetch }) => {
    const {task,hours,date}=user;
    return (
        
            <tr>
      <td>
        <h1>{task}</h1>
      </td>
      <td>{hours}</td>
      <td>{date}</td>
    </tr>
        
    );
};

export default EmpTable;
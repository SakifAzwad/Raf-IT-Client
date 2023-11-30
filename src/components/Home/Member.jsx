/* eslint-disable react/prop-types */
import ShowMem from "./ShowMem";


const Member = ({members}) => {
    return (
        <div  className="bg-col2 ">
            <div  className=" grid lg:grid-cols-4 grid-cols-1 w-4/5 gap-2 mx-auto py-16">
            {
                members?.map((member)=>(
                    <ShowMem key={member.id} member={member}></ShowMem>
                ))
            }
            </div>
        </div>
    );
};

export default Member;
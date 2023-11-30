/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const ShowMem = ({member}) => {

    const {name,img,position}=member;
    return (
        <div data-aos="flip-right" className="border-12 rounded-3xl border-red-800 card w-42 glass">
  <figure><img src={img} /></figure>
  <div className="card-body">
    <h2 className="text-center font-extrabold text-2xl">{name}</h2>
    <p className="text-sm text-center" >{position}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
    );
};

export default ShowMem;
const NavBar = () => {
  return (
    <div>
      <div className="navbar flex justify-between bg-col2 px-24">
        <div className="flex justify-around">
          <img
            className="w-60 "
            src="https://i.ibb.co/F8GGD87/cover-removebg-preview.png"
            alt=""
          />
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 text-xl">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
           
        </div>
        <div className=" mr-2">
          <button className="btn btn-primary mr-2 hover:bg-white hover:text-col1 bg-col1 border-0 text-white text-lg">SIGN UP</button>
          <button className="btn btn-primary hover:bg-white hover:text-col1 bg-col1 border-0 text-white text-lg">LOG IN</button>

          {/* <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
        <div className="w-full rounded-full">
          <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <h1 className="p-3 text-center text-xl">Sakif Azwad</h1>
        <li><button className="btn btn-primary p-3" >Log Out</button></li>
      </ul>
    </div> */}
        </div>
       
      </div>
    </div>
  );
};

export default NavBar;

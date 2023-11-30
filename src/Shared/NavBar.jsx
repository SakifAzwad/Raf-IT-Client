import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthCon } from "../Provider/AuthProv";

const NavBar = () => {
  const { user, logOut } = useContext(AuthCon);

  const hanlogout = () => {
    logOut().then().catch();
  };

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
            <ul className="menu menu-horizontal pl-8 text-xl gap-x-4">
              <Link to="/">
              <li>
                Home
              </li>
              </Link>
              <li>
                Services
              </li>
              <li>
               Contact Us
              </li>
            </ul>
          </div>
        </div>
        <div className=" mr-2">
          {user ? (
            <>
            <Link to="/dashboard"><button className="btn mr-2 hover:bg-white hover:text-col1 bg-col1 border-0 text-white text-lg px-5">Dashboard</button></Link>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar "
                >
                  <div className="w-full rounded-full">
                    <img
                      alt=""
                      src={user.photoURL}
                    />
                  </div>
                </div>
                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <h1 className="p-3 text-center text-xl">{user.displayName}</h1>
                  <li>
                    <button
                      onClick={hanlogout}
                      className="btn pt-2.5 btn-primary  hover:border-2 hover:border-col1 hover:bg-white hover:text-col1 bg-col1 border-0 text-white text-lg"
                    >
                      LOG OUT
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/signup">
                <button className="btn mr-2 hover:bg-white hover:text-col1 bg-col1 border-0 text-white text-lg">
                  SIGN UP
                </button>
              </Link>
              <Link to="/login">
                <button className="btn hover:bg-white hover:text-col1 bg-col1 border-0 text-white text-lg px-5">
                  LOGIN
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

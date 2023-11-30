/* eslint-disable no-unused-vars */
import {
    FaAd,
    FaBook,
    FaCalendar,
    FaEnvelope,
    FaHome,
    FaList,
    FaSearch,
    FaShoppingCart,
    FaUsers,
    FaUtensils,
  } from "react-icons/fa";
  import { NavLink, Outlet} from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";
import useHR from "../hooks/useHR";


  
  const Dashboard = () => {
    
    const [isAdmin] = useAdmin();
    const [isHR]=useHR();
    let title="";
    {
        (isAdmin ? title="Admin" : ( isHR ? title="HR" : title="Employee") )
    }
    return (
        <div className="font-Montserrat">
        <NavBar></NavBar>
        <div className="flex">
        <div>
          <div className="w-64 min-h-screen bg-col2">
            <ul className="menu p-4">
              {isAdmin ? (
                <>
                  <li>
                    <NavLink to="/dashboard/allusers">
                      <FaUtensils></FaUtensils>
                      All Employee List
                    </NavLink>
                  </li>
                  
                </>
              ) : (

                isHR ? <>
                
                <li>
                    <NavLink to="/dashboard/employeelist">
                      <FaUtensils></FaUtensils>
                      Employee List
                    </NavLink>
                  </li>
                
                
                </> : <>
                  <li>
                    <NavLink to="/dashboard/userHome">
                      <FaHome></FaHome>
                      User Home
                    </NavLink>
                  </li>
                </>
              )

                }
              <div className="divider"></div>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/order/salad">
                  <FaSearch></FaSearch>
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/order/contact">
                  <FaEnvelope></FaEnvelope>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 p-8">
            <h1>Welcome to {title} Panel</h1>
        <Outlet></Outlet>
      </div>
        
      </div>
    
        <Footer></Footer>
        </div>
      
    );
  };
  
  export default Dashboard;
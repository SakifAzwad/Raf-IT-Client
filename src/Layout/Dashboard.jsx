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


  
  const Dashboard = () => {
    
    const [isAdmin] = useAdmin();
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
                <>
                  <li>
                    <NavLink to="/dashboard/userHome">
                      <FaHome></FaHome>
                      User Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/history">
                      <FaCalendar></FaCalendar>
                      Not History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/cart">
                      <FaShoppingCart></FaShoppingCart>
                      My Cart 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/review">
                      <FaAd></FaAd>
                      Add a Review
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/paymentHistory">
                      <FaList></FaList>
                      Real Payment History
                    </NavLink>
                  </li>
                </>
              )}
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
            <h1>Welcome to Admin Panel</h1>
        <Outlet></Outlet>
      </div>
        
      </div>
    
        <Footer></Footer>
        </div>
      
    );
  };
  
  export default Dashboard;
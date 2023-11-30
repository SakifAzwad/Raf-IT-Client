/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthCon } from "../../Provider/AuthProv";
import Swal from "sweetalert2";


const Login = () => {
  const {signIn}=useContext(AuthCon);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [registerError, setRegisterError] = useState("");
  const handleLogin = e =>
    {
        e.preventDefault();
        const form=e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(result=>
          {
            const user=result.user;
            Swal.fire({
              title: 'Welcome Back',
              showClass: {
                  popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
              }
          });
           navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log(error.code);
            setRegisterError(error.message);
          });
    }
    return (
        <div className="lg:flex w-full">
          
    
          <div className="hero min-h-screen bg-col2 border-y-2 0">
      <div className="hero-content flex-col w-full">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome Back to Raf-IT!</h1>
          <p className="py-6 text-2xl">Log in to Unlock Innovation</p>
        </div>
        <div className="card shrink-0 rounded-lg w-2/3 border-2 border-col1 bg-col2">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
            <button className="btn btn-primary hover:bg-white hover:text-col1 bg-col1 border-0 text-white text-lg hover:border-2">LOGIN</button>
            </div>
          </form>
          {registerError && (
                        <p className="text-center pb-2 font-extrabold  text-red-700">Invalid Email or Password</p>
                  )}
          <p className="text-center pb-4 w-full text-col0">
                    Do not have an account? {"   "} 
                    <Link className="text-col4 w-full font-extrabold" to="/signup">
                         Sign Up
                    </Link>
                  </p>
        </div>
      </div>
    </div>
    
    <div
            className="hero  min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/Sw14jRh/mohammad-rahmani-y-Rs-BZJuhbkk-unsplash.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="text-center">
                <p className="py-6 text-5xl text-col2">
               Empower your journey through technology. <br /> Access Tomorrow{"'"}s Technology Today.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      );
};

export default Login;
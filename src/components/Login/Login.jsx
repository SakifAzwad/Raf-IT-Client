import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="flex w-full">
          
    
          <div className="hero min-h-screen bg-col2 border-y-2 0">
      <div className="hero-content flex-col w-full">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome Back to Raf-IT!</h1>
          <p className="py-6 text-2xl">Log in to Unlock Innovation</p>
        </div>
        <div className="card shrink-0 rounded-lg w-2/3 border-2 border-col1 bg-col2">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
            <button className="btn btn-primary hover:bg-white hover:text-col1 bg-col1 border-0 text-white text-lg hover:border-2">LOGIN</button>
            </div>
          </form>
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
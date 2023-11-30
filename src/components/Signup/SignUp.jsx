/* eslint-disable no-unused-vars */
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthCon } from "../../Provider/AuthProv";
import { updateProfile } from "firebase/auth";
import swal from "sweetalert";
import axios from "axios";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const people = [{ name: "HR" }, { name: "Employee" }];

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser } = useContext(AuthCon);
  const navigate = useNavigate();
  const location1 = useLocation();
  const [registerError, setRegisterError] = useState("");

  const hanreg = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const account = form.get("account");
    const salary = form.get("salary");
    const des = selected.name;
    const image = form.get("image");
    const password = form.get("password");
    let URL;

    if (password.length < 6) {
      setRegisterError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must include at least one uppercase letter.");
      return;
    }
    if (!/[@$!%*?&]/.test(password)) {
      setRegisterError(
        "Password must include at least one special character (e.g., @$!%*?&)."
      );
      return;
    }

    try {
      if (!image) {
        setRegisterError("Please select an image first.");
        return;
      }

      form.append("image", image);

      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${image_hosting_key}`,
        form
      );

      URL = response.data.data.url;
    } catch (error) {
      console.error("Error uploading image:", error);
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: URL,
        })
          .then(() => {
            const p = result.user.displayName;
            const userInfo = {
              name: name,
              email: email,
              account: account,
              salary: salary,
              role: des,
              image:URL
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                swal(
                  `Welcome ${p}!`,
                  `You've successfully registered to Raf IT.`,
                  "success"
                );
              }
            });
          })
          .catch((error) => {
            setRegisterError(error.message);
          });
        setTimeout(() => {
          window.location.reload();
        }, 2500);
        navigate(location1?.state ? location1.state : "/");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });

    e.target.name.value = "";
    e.target.email.value = "";
    e.target.account.value = "";
    e.target.salary.value = "";
    e.target.password.value = "";
  };

  const [selected, setSelected] = useState(people[0]);
  return (
    <div className="flex w-full">
      <div
        className="hero  min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/3FDd6pX/mohammad-rahmani-8q-EB0f-Te9-Vw-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="text-center">
            <p className="py-6 text-6xl text-col2">
              Join us in Shaping the Future of Technology.
            </p>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-col2 border-y-2 0">
        <div className="hero-content flex-col w-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Sign Up Now!</h1>
            <p className="py-2 text-lg">Dive into Tech Excellence</p>
          </div>
          <div className="card shrink-0 rounded-lg w-4/5 border-2 border-col1 bg-col2">
            <form onSubmit={hanreg} className="card-body gap-y-0">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bank Account No.</span>
                </label>
                <input
                  name="account"
                  type="text"
                  placeholder="Account No."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="flex w-full gap-x-5">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Salary</span>
                  </label>
                  <input
                    name="salary"
                    type="number"
                    placeholder="Salary"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Designation</span>
                  </label>
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pb-4 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                          {people.map((person, personIdx) => (
                            <Listbox.Option
                              key={personIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-col1 text-white"
                                    : "text-gray-900"
                                }`
                              }
                              value={person}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">
                    Upload your Profile Picture
                  </span>
                </label>
                <input
                  name="image"
                  type="file"
                  className=" file-input-info file-input file-input-bordered w-full  flex justify-center"
                />
              </div>
              <div className="form-control mt-6 ">
                <button className="btn btn-primary hover:border-2 hover:bg-white hover:text-col1 bg-col1 border-0 text-white text-lg">
                  SIGN UP
                </button>
              </div>
            </form>
            {registerError && (
              <p className="text-center px-8 pb-4 text-red-700 font-extrabold">
                {registerError}
              </p>
            )}
            <p className="text-center pb-4 w-full text-col0">
              Already have an account?{"  "}
              <Link className="text-col4 w-full font-extrabold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

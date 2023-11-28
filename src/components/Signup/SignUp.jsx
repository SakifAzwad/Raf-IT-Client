import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
    { name: 'HR' },
    { name: 'Employee' }
  ]
  

const SignUp = () => {

    const [selected, setSelected] = useState(people[0])
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
            <p className="py-6 text-xl">Dive into Tech Excellence</p>
          </div>
          <div className="card shrink-0 rounded-lg w-4/5 border-2  border-col1 bg-col2">
            <form className="card-body">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
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
                      active ? 'bg-col1 text-white' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary hover:border-2 hover:bg-white hover:text-col1 bg-col1 border-0 text-white text-lg">
                  SIGN UP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

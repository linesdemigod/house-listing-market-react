import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ListingContext from "../context/ListingContext";

function SignUp() {
  const { register } = useContext(ListingContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    address: "",
    password: "",
    password_confirmation: "",
  });

  const { name, email, telephone, address, password, password_confirmation } =
    formData;

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if (
      email === "" ||
      password === "" ||
      name === "" ||
      password_confirmation === "" ||
      telephone === "" ||
      address === ""
    ) {
      toast.error("Bad user Crendentials");
    } else {
      await register(formData);
      navigate("/sign-in");
    }
  };

  return (
    <div>
      <div className=" flex flex-col justify-center py-12 px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-5">
              Sign Up
            </h2>
            <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-md font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    name="name"
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={name}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={email}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between gap-5 md:flex-col lg:flex-row xl:flex-row">
                <div>
                  <label className="block text-md font-medium text-gray-700">
                    Telephone
                  </label>
                  <div className="mt-1">
                    <input
                      name="telephone"
                      type="number"
                      id="telephone"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      value={telephone}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-md font-medium text-gray-700">
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      name="address"
                      type="text"
                      id="address"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      value={address}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    name="password"
                    type="password"
                    id="password"
                    className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={password}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700">
                  Password Confirmation
                </label>
                <div className="mt-1">
                  <input
                    name="password_confirmation"
                    type="password"
                    id="password_confirmation"
                    className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={password_confirmation}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  name="submit"
                  className="w-full cursor-pointer rounded-lg border border-blue-600 bg-blue-800 p-2 font-medium text-white transition hover:bg-opacity-90"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="flex flex-row justify-start items-center gap-3 mt-3">
              <p className="">Already have an account? </p>
              <Link to="/sign-in" className="text-blue-600">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

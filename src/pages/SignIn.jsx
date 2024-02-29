import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ListingContext from "../context/ListingContext";

function SignIn() {
  const { login, error } = useContext(ListingContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (email === "" || password === "") {
      toast.error("Bad user Crendentials");
    } else {
      await login(formData);
      navigate("/profile");
      //check for error
      // console.log(error);
      // if (!error) {
      //   navigate("/profile", { replace: true });
      // } else {
      //   toast.error("Email or Password is incorrect");
      // }
    }
  };

  return (
    <div>
      <div className=" flex flex-col justify-center py-12 px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-10">
              Sign In
            </h2>
            <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
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
                <button
                  type="submit"
                  name="submit"
                  className="w-full cursor-pointer rounded-lg border border-blue-600 bg-blue-800 p-2 font-medium text-white transition hover:bg-opacity-90"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="flex flex-row justify-start items-center gap-3 mt-3">
              <p className="">Don't have an account? </p>
              <Link to="/sign-up" className="text-blue-600">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

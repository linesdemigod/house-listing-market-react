import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ListingContext from "../context/ListingContext";

function CreateListing() {
  const { createListing } = useContext(ListingContext);
  const [formData, setFormData] = useState({
    category: "rent",
    title: "",
    bedroom: 1,
    bathroom: 1,
    land_size: "",
    garage: 0,
    address: "",
    price: 0,
    about: "",
    image: [],
  });

  const {
    category,
    title,
    bedroom,
    bathroom,
    land_size,
    garage,
    address,
    price,
    about,
    image,
  } = formData;

  const onChange = async e => {
    if (!e.target.files) {
      setFormData(prevState => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }

    if (e.target.files) {
      setFormData(prevState => ({
        ...prevState,
        image: [...e.target.files],
      }));
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if (
      title === "" ||
      bedroom === "" ||
      bathroom === "" ||
      land_size === "" ||
      garage === "" ||
      address === "" ||
      price === "" ||
      about === "" ||
      image === ""
    ) {
      toast.error("Fill all fields");
      return;
    }

    await createListing(formData);
    navigate("/profile");
  };

  return (
    <div className="container py-10">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <Link
            to="/profile"
            className="block px-4 py-2 text-base font-semibold text-white bg-blue-600  cursor-pointer rounded-lg w-20"
          >
            Back
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-10">
            Add Listing
          </h2>
          <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-md font-medium text-gray-700">
                Category
              </label>
              <div className="mt-1">
                <select
                  name="category"
                  id="category"
                  value={category}
                  className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none "
                  onChange={onChange}
                >
                  <option value="rent">Rent</option>
                  <option value="sale">Sale</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-md font-medium text-gray-700">
                Title
              </label>
              <div className="mt-1">
                <input
                  name="title"
                  type="text"
                  id="title"
                  className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  value={title}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between gap-3 md:flex-col lg:flex-row xl:flex-row">
              <div>
                <label className="block text-md font-medium text-gray-700">
                  Bedroom
                </label>
                <div className="mt-1">
                  <input
                    name="bedroom"
                    type="number"
                    id="bedroom"
                    className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={bedroom}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700">
                  Bathroom
                </label>
                <div className="mt-1">
                  <input
                    name="bathroom"
                    type="number"
                    id="bathroom"
                    className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={bathroom}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-3 md:flex-col lg:flex-row xl:flex-row">
              <div>
                <label className="block text-md font-medium text-gray-700">
                  Land Size
                </label>
                <div className="mt-1">
                  <input
                    name="land_size"
                    type="number"
                    id="land_size"
                    className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={land_size}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div>
                <label className="block text-md font-medium text-gray-700">
                  Garage
                </label>
                <div className="mt-1">
                  <input
                    name="garage"
                    type="number"
                    id="garage"
                    className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={garage}
                    onChange={onChange}
                  />
                </div>
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
            <div>
              <label className="block text-md font-medium text-gray-700">
                Price
              </label>
              <div className="mt-1">
                <input
                  name="price"
                  type="number"
                  id="price"
                  className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  value={price}
                  onChange={onChange}
                />
              </div>
            </div>
            <div>
              <div className="mt-1">
                <label className="block text-md font-medium text-gray-700">
                  About
                </label>
                <textarea
                  name="about"
                  type="text"
                  id="about"
                  className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  defaultValue={about}
                  placeholder="About"
                  onChange={onChange}
                ></textarea>
              </div>
            </div>
            <div>
              <label className="block text-md font-medium text-gray-700">
                Image
              </label>
              <div className="mt-1">
                <input
                  name="image[]"
                  type="file"
                  id="image"
                  className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none "
                  min="1"
                  accept=".jpg,.png,.jpeg"
                  multiple
                  // value={image}
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
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateListing;

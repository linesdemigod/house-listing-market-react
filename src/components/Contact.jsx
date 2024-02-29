import { useContext, useState } from "react";
import ListingContext from "../context/ListingContext";
import { toast } from "react-toastify";

function Contact({ address }) {
  const { contactAgent } = useContext(ListingContext);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    telephone: "",
    message: "",
  });
  const { fullname, email, telephone, body } = formData;

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (email === "" || fullname === "" || telephone === "" || body === "") {
      toast.error("Fill all the fields");
    } else {
      await contactAgent(formData);
      //clear all the field after form submission
      setFormData({
        fullname: "",
        email: "",
        telephone: "",
        message: "",
      });

      toast.success("Message sent successfully!");
    }
  };

  return (
    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
      <p className="text-semibold text-xl text-center mb-3">
        Contact the agent
      </p>
      <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
        <div>
          <div className="mt-1">
            <input
              name="fullname"
              type="text"
              id="fullname"
              className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              value={fullname}
              placeholder="Full Name"
              onChange={onChange}
            />
          </div>
        </div>
        <div>
          <div className="mt-1">
            <input
              name="email"
              type="email"
              id="email"
              className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              value={email}
              placeholder="Email"
              onChange={onChange}
            />
          </div>
        </div>
        <div>
          <div className="mt-1">
            <input
              name="telephone"
              type="number"
              id="telephone"
              className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              value={telephone}
              placeholder="Telephone"
              onChange={onChange}
            />
          </div>
        </div>
        <div>
          <div className="mt-1">
            <textarea
              name="body"
              type="text"
              id="body"
              className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              defaultValue={body}
              placeholder="Message"
              onChange={onChange}
            ></textarea>
          </div>
        </div>
        <div>
          <button
            type="submit"
            name="submit"
            className="w-full cursor-pointer rounded-lg border border-blue-600 bg-blue-800 p-2 font-medium text-white transition hover:bg-opacity-90"
          >
            Mail Agent
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

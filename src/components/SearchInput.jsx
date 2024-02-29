import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SearchInput = () => {
  const [formData, setFormData] = useState({
    search: "",
  });
  const { search } = formData;

  const navigate = useNavigate();

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search === "") {
      toast.error("Fill the search field!");
      return;
    }
    navigate(`/search?q=${search}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-center gap-3 mt-5">
          <div className="mt-1">
            <input
              name="search"
              type="text"
              id="search"
              className="w-full rounded-lg border border-stroke bg-zinc-200 py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none "
              placeholder="Search by location"
              onChange={onChange}
              value={search}
            />
          </div>
          <div className="mt-1">
            <button
              type="submit"
              name="submit"
              className="w-full cursor-pointer rounded-lg border border-emerald-600 bg-emerald-500 p-2 font-medium text-white transition hover:bg-opacity-90"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchInput;

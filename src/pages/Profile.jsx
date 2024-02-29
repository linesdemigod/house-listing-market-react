import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import ListingItems from "../components/ListingItems";
import ListingProvider from "../context/ListingContext";
import { toast } from "react-toastify";

function Profile() {
  const {
    listings,
    loading,
    getUserListings,
    deleteListing,
    filterListing,
    logout,
  } = useContext(ListingProvider);

  const navigate = useNavigate();

  //get user id from local storage
  let userId = localStorage.getItem("user");
  userId = JSON.parse(userId);

  useEffect(() => {
    const fetchListing = async () => {
      await getUserListings(userId.id);
    };

    fetchListing();
  }, []);

  const handleLogout = async e => {
    e.preventDefault();
    await logout();

    navigate("/");
  };

  const onDelete = async listingId => {
    if (window.confirm("Are you sure?")) {
      await deleteListing(listingId);
      //filter out the removed listing and update the ui
      const updateListing = listings.filter(l => l.id !== listingId);
      // filterListing(updateListing);
      getUserListings(userId.id);

      toast.success("Listing deleted successfully!");
    }
  };

  const onEdit = listingId => navigate(`/edit-listing/${listingId}/edit`);

  return (
    <div className="container py-10">
      <div className="flex flex-row justify-between gap-5">
        <Link
          to="/create-listing"
          className="block px-4 py-2 text-base font-semibold text-white bg-blue-600  cursor-pointer rounded-lg"
        >
          Create Listing
        </Link>
        <button
          type="button"
          className="block px-4 py-2 text-base font-semibold text-white bg-emerald-600  cursor-pointer rounded-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <div className="mt-10">
        {loading ? (
          <Spinner />
        ) : listings && listings.length > 0 ? (
          <div className="grid grid-cols-1 justify-between items-center gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-3 2xl:grid-3">
            {listings.map(listing => (
              <ListingItems
                key={listing.id}
                listing={listing}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        ) : (
          <p className="text-center">There are no current Listing</p>
        )}
      </div>
    </div>
  );
}

export default Profile;

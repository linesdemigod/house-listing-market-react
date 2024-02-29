import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import ListingItems from "../components/ListingItems";
import ListingProvider from "../context/ListingContext";

function Search() {
  const { loading, listings, searchListings, deleteListing } =
    useContext(ListingProvider);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchListing = async () => await searchListings(query || "");
    fetchListing();
  }, []);

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

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="container py-10">
      <h2 className="mb-10">Results for "{query}"</h2>

      {listings && listings.length > 0 ? (
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
        <p className="text-center">No search result found</p>
      )}
    </div>
  );
}

export default Search;

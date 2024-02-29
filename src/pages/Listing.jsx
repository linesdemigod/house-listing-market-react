import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import SingleListingItem from "../components/SingleListingItem";
import ListingContext from "../context/ListingContext";

function Listing() {
  const { listing, loading, getListing } = useContext(ListingContext);
  const { id } = useParams();

  useEffect(() => {
    getListing(id);
  }, []);

  return (
    <div className="container py-10">
      {loading ? (
        <Spinner />
      ) : listing && listing.length > 0 ? (
        <>
          <div className="">
            {listing.map(list => (
              <SingleListingItem key={list.id} list={list} />
            ))}
          </div>
        </>
      ) : (
        <p className="text-center">Listing does not exist</p>
      )}
    </div>
  );
}

export default Listing;

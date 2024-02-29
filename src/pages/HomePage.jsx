import { useState, useContext, useEffect } from "react";
import Spinner from "../components/Spinner";
import ListingItems from "../components/ListingItems";
import HeroSection from "../components/HeroSection";
import ListingContext from "../context/ListingContext";

function HomePage() {
  const { listings, loading, getListings } = useContext(ListingContext);

  useEffect(() => {
    const fetchListings = async () => {
      await getListings();
    };

    fetchListings();
  }, []);

  return (
    <>
      <HeroSection />

      <section className="py-5">
        <div className="container">
          <h2 className="text-center font-bold text-base lg:text-3xl mb-5">
            Let’s find the right selling option for you
          </h2>
          {loading ? (
            <Spinner />
          ) : listings && listings.length > 0 ? (
            <div className="grid grid-cols-1 justify-between items-center gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-3 2xl:grid-3">
              {listings.map(listing => (
                <ListingItems key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <p className="text-center">There are no current Listing</p>
          )}
        </div>
      </section>
    </>
  );
}

export default HomePage;

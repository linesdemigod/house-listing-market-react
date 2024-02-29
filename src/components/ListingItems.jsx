import { Link } from "react-router-dom";

function ListingItems({ listing, onEdit, onDelete }) {
  const url = "http://127.0.0.1:8000/uploads";
  const imageURLs = listing.image.split(",");
  const firstImageURL = imageURLs[0];

  const imageURL = `${url}/${firstImageURL}`;

  //get user id
  let userId = localStorage.getItem("user");

  // if (userId) {
  //   userId = JSON.parse(userId);
  // }

  userId ? (userId = JSON.parse(userId)) : null;

  //replace whitespace with hypen -
  const formatTitle = listing.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <div className=" bg-white dark:bg-lightGray rounded-lg overflow-hidden shadow-lg">
        <Link to={`/listing/${formatTitle}/${listing.id}`}>
          <img
            src={imageURL}
            alt={listing.title}
            className="w-full h-80 object-cover"
          />
        </Link>

        <div className="px-6 py-4">
          <small className="text-base text-white bg-emerald-600 px-3 py-1 rounded-md">
            {listing.category}
          </small>
          <p className="text-xl md:text-2xl lg:text-2xl font-semibold mt-2">
            $ {listing.price} {listing.category === "rent" && "/Month"}
          </p>
          <h2 className="text-xl">{listing.title}</h2>
          <div className="flex flex-row justify-start items-start flex-wrap gap-3">
            <p className="font-medium">
              {listing.bedroom} <span className="font-normal">Bed</span>
            </p>
            <p className="font-medium">
              {listing.bathroom} <span className="font-normal">Bath</span>
            </p>
            <p className="font-medium">
              {listing.land_size} <span className="font-normal">Sqft</span>
            </p>
          </div>

          <p className="text-slate-700 dark:text-mutedGray mt-2">
            {listing.address}
          </p>
        </div>

        <div className="flex flex-col justify-between gap-3 px-6 py-4 md:flex-col lg:flex-row xl:flex-row">
          {userId && userId.id === listing.user_id && (
            <button
              type="button"
              className="block px-4 py-2 text-base font-semibold text-white bg-red-600  cursor-pointer rounded-lg"
              onClick={() => onDelete(listing.id)}
            >
              Delete
            </button>
          )}

          {userId && userId.id === listing.user_id && (
            <Link
              to={`/edit-listing/${listing.id}/edit`}
              className="block px-4 py-2 text-base font-semibold text-white bg-emerald-600  cursor-pointer rounded-lg"
            >
              Edit
            </Link>
          )}

          {/* <button
            type="button"
            className="block px-4 py-2 text-base font-semibold text-white bg-emerald-600  cursor-pointer rounded-lg"
            onClick={() => onEdit(listing.id)}
          >
            Edit
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default ListingItems;

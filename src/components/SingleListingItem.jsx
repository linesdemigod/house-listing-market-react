import { Carousel } from "flowbite-react";
import Contact from "../components/Contact";

function SingleListingItem({ list }) {
  const url = "http://127.0.0.1:8000/uploads";
  const imageURLs = list.image.split(", ");
  return (
    <div>
      <div className="flex flex-col justify-between gap-3 md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
        {/* listing details */}
        <div className="basis-2/3">
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-3">
            <Carousel slide={false}>
              {imageURLs.map((image, index) => (
                <img key={index} src={`${url}/${image}`} alt={list.title} />
              ))}
            </Carousel>
          </div>

          <small className="text-base text-white bg-emerald-600 px-3 py-1 rounded-md">
            {list.category}
          </small>
          <p className="my-3 text-xl md:text-4xl lg:text-4xl font-bold">
            $ {list.price} {list.category === "rent" && "/Month"}
          </p>

          <h4 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold">
            {list.title}
          </h4>

          <div className="flex flex-row justify-start items-start flex-wrap gap-3">
            <p className="font-xl">
              {list.bedroom} <span className="font-medium">Bed</span>
            </p>
            <p className="font-xl">
              {list.bathroom} <span className="font-medium">Bath</span>
            </p>
            <p className="font-xl">
              {list.garage} <span className="font-medium">Garage</span>
            </p>
            <p className="font-xl">
              {list.land_size} <span className="font-medium">Sqft</span>
            </p>
          </div>

          <p className="text-slate-700 mt-2">{list.address}</p>

          <p className="text-2xl font-bold mt-2">Property Details</p>
          <p className="text-slate-700 mt-2">{list.about}</p>
        </div>
        {/* contact us */}
        <div className="basis-1/3">
          <Contact address={list.address} />
        </div>
      </div>
    </div>
  );
}

export default SingleListingItem;

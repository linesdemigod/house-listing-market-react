import SearchInput from "./SearchInput";

function HeroSection() {
  const imageUrl =
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="relative h-[calc(100vh-1000px)] min-h-[600px]  bg-cover bg-fixed bg-center"
    >
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000080] "></div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-center text-white font-bold text-2xl lg:text-6xl">
          Find Home First
        </h1>
        <p className="text-center text-white font-bold text-base lg:text-base">
          Let’s find a home that’s perfect for you.
        </p>

        <SearchInput />
      </div>
    </div>
  );
}

export default HeroSection;

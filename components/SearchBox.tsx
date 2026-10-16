export const SearchBox = () => {
  return (
    <div className="w-full md:h-100 h-72 flex justify-center items-center bg-gray-300">
      <div className="flex flex-col justify-center items-center md:gap-3 sm:gap-1">
        <h2 className="md:text-7xl sm:text-4xl text-3xl text-black font-semibold">How can we help?</h2>
        <br />
        <form role="search">
          <input
            className="md:w-180 sm:w-100 w-56 md:h-16 sm:h-10 h-7 border border-black rounded-sm bg-white text-gray-600 md:text-lg sm:text-sm text-[11px] font-semibold placeholder:pl-3"
            type="search"
            placeholder="Search..."
          />
        </form>
      </div>
    </div>
  );
};

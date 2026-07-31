export const SearchBox = () => {
  return (
    <div className="row container-fluid col-12 p-0 m-0" id="search-box">
      <div className="search-container">
        <h2 id="text-search">How can we help?</h2>
        <br />
        <form className="position-relative" id="search-form" role="search">
          <input
            className="ps-3 bg-gray-100 placeholder:pl-3"
            id="search-input"
            type="search"
            placeholder="Search..."
          />
        </form>
      </div>
    </div>
  );
};

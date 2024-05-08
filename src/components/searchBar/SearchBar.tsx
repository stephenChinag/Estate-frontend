import { useState } from "react";
import "./searchBar.scss";
import searchLog from "../../assets/search.png";
const types = ["buy", "rent"];

export default function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val: any) => {
    setQuery((prev) => ({ ...prev, type: val }));
    console.log(query);
  };

  //
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="city Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          value={query.minPrice}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          value={query.maxPrice}
        />
        <button>
          <img src={searchLog} alt="" />
        </button>
      </form>
    </div>
  );
}

import { useState } from "react";
import "./searchBar.scss";

export default function SearchBar() {
  const [] = useState({
    type: "buy",
    location: "",
  });
  return (
    <div className="searchBar">
      <div className="type">
        <button>Buy</button> <button>Rent</button>
      </div>
      <form>
        <input type="text" name="location" placeholder="city Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
      </form>
    </div>
  );
}

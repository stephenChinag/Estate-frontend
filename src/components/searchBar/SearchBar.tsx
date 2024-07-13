import React, { ChangeEvent, useEffect, useState } from "react";
import "./searchBar.scss";
import searchLog from "../../assets/search.png";
import { Link } from "react-router-dom";
const types = ["buy", "rent"];

interface QueryState {
  type: string;
  city: string;
  minPrice: number;
  maxPrice: number;
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<QueryState>({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val: string) => {
    setQuery((prev) => ({ ...prev, type: val }));
    console.log(query);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type, index) => (
          <button
            key={index}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="city"
          placeholder="city Location"
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          onChange={handleChange}
        />
        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          <button>
            <img src={searchLog} alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
};
export default SearchBar;

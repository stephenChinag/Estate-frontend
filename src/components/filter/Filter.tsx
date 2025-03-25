import './filter.scss';
import search from '../../assets/search.png';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('city'));

  const [query, setQuery] = useState({
    type: searchParams.get('type') || '',
    city: searchParams.get('city') || '',
    property: searchParams.get('property') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    minPrice: searchParams.get('minPrice') || 100000,
    bedroom: searchParams.get('bedroom') || 1,
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {};
  return (
    <div className="filter">
      <h1>
        Search result for <b> {}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city"> Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="city"> Type</label>
          <select name="type" id="type" onChange={handleChange}>
            <option value=" "> any</option>
            <option value="buy"> buy</option>
            <option value="rent"> rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property"> Property</label>
          <select name="property" id="property" onChange={handleChange}>
            <option value=" "> any</option>
            <option value="apartment"> Apartment</option>
            <option value="house"> House</option>
            <option value="condo"> Condo</option>
            <option value="land"> Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice"> Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            minLength={0}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice"> Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label htmlFor="city"> Bedroom</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="any"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleFilter}>
          <img src={search} />
        </button>
      </div>
    </div>
  );
}

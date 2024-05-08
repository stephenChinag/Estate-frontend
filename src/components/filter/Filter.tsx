import "./filter.scss";

export default function Filter() {
  return (
    <div className="filter">
      <h1>
        Search result for <b> London</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city"> Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="city"> Type</label>
          <select name="type" id="type">
            <option value=" "> any</option>
            <option value="buy"> buy</option>
            <option value="rent"> rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property"> Property</label>
          <select name="property" id="property">
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
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice"> Max Price</label>
          <input type="text" id="maxPrice" name="maxPrice" placeholder="any" />
        </div>
        <div className="item">
          <label htmlFor="city"> Bedroom</label>
          <input type="text" id="city" name="city" placeholder="any" />
        </div>
      </div>
    </div>
  );
}

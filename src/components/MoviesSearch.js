import React from "react";
import Rate from "./Rate";
import TextField from "@material-ui/core/TextField";

const MoviesSearch = ({ setNameSearch, ratingSearch, setRatingSearch, title }) => {
  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          placeholder="Type movie name"
          value={title}
          onChange={(e) => setNameSearch(e.target.value)}
        />
      </form>

      <div className="rating-search">
        <Rate rating={ratingSearch} setRatingSearch={setRatingSearch} />
      </div>
    </div>
  );
};

export default MoviesSearch;

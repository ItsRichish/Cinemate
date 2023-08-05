import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { searchMovie } from "../../features/currentGenreOrCategory";

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      //   console.log(query);
      dispatch(searchMovie(query));
    }
  };

  if (window.location.pathname !== "/") return null;

  return (
    <div>
      <TextField
        className={classes.searchContainer}
        value={query}
        onKeyDown={handleKeyPress}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      >
        Search
      </TextField>
    </div>
  );
};

export default Search;

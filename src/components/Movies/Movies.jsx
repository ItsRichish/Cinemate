import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList, Pagination, FeaturedMovie } from "..";

const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });
  const lg = useMediaQuery((theme) => theme.breakpoints.only("lg"));

  const numberOfMovies = lg ? 16 : 18;

  // console.log(data)
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No Movies that match that name.
          <br />
          Please Search for Something else
        </Typography>
      </Box>
    );
  }

  if (error) return "An error occured";

  return (
    <div>
      <FeaturedMovie movie={data.results[Math.floor(Math.random() * 11)]} />
      <MovieList movies={data} numberOfMovies={numberOfMovies} />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_pages}
      />
    </div>
  );
};

export default Movies;

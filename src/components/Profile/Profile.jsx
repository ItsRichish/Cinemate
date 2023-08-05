import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

import { userSelector } from "../../features/auth";
import { useGetListQuery } from "../../services/TMDB";
import { RatedCards } from "..";

const Profile = () => {
  const { user } = useSelector(userSelector);
  // console.log(user);

  const { data: favoriteMovies, refetch: refetchFavorite } = useGetListQuery({
    listName: "favorite/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });
  const { data: watchlistMovies, refetch: refetchWishlist } = useGetListQuery({
    listName: "watchlist/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });

  useEffect(() => {
    refetchFavorite();
    refetchWishlist();
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
        <Typography variant="h5">
          There is no favourite movie you can add a favourite or watchlist some
          movies to see them here!
        </Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" data={favoriteMovies} />
          <RatedCards title="WatchList Movies" data={watchlistMovies} />
        </Box>
      )}
    </Box>
  );
};

export default Profile;

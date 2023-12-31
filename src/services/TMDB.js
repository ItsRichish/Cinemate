import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// const page = 1;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => ({
    //Get Genres
    getGenre: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    // Get Movies by [Type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        //By Search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }

        //By Category -> Popular, Top Rated etc.
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "string"
        ) {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        //By Genre -> Action, Horror etc
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "number"
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }

        //Get Latest
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),

    //Get Movies Info
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),

    //Get Recomended Movie
    getRecommendations: builder.query({
      query: ({ movie_id, list }) =>
        `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),

    //Get Actors Info
    getActorInfo: builder.query({
      query: (id) => `person/${id}?api_key=${tmdbApiKey}`,
    }),

    //Get Movie according to Actors
    getMovieByActor: builder.query({
      query: ({ id, page }) =>
        `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
    }),

    // According to Favourite and Watchlist
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) =>
        `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGenreQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery,
  useGetActorInfoQuery,
  useGetMovieByActorQuery,
  useGetListQuery,
} = tmdbApi;

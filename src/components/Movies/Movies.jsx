/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

// hook
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';

// Movies.jsx file is use to display the data comming from Tmdb Api
const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  // hook from tmdb Api endpoint
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page });
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="rem" />

      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">No Movies that match that name.
          <br />
          Please search for somthing else
        </Typography>
      </Box>
    );
  }

  if (error) return 'An error has occured.';
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;

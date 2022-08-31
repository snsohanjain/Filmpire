/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

// hook
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';

const Movies = () => {
  // hook
  const { data, error, isFetching } = useGetMoviesQuery();
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

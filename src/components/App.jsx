/* eslint-disable react/function-component-definition */
import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

// Use as a hook for styles
import useStyles from './styles';
// import from current folder index.js
import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

const App = () => {
  // hook
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* CssBaseline is the a normalize.css from MUI */}
      <CssBaseline />
      {/* NavBar will always show at any page it's fixed */}
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exect path="/">
            <Movies />
          </Route>
          <Route exect path="/movie:id">
            <MovieInformation />
          </Route>
          <Route exect path="/actors:id">
            <Actors />
          </Route>
          <Route exect path="/profile:id">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;

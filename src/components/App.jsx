/* eslint-disable react/function-component-definition */
import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

// hook
import useStyles from './styles';
import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

const App = () => {
  // hook
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exect path="/movie:id">
            <MovieInformation />
          </Route>
          <Route exect path="/actors:id">
            <Actors />
          </Route>
          <Route exect path="/profile:id">
            <Profile />
          </Route>
          <Route exect path="/">
            <Movies />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;

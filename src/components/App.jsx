/* eslint-disable react/function-component-definition */
import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

// hooke
import useStyles from './styles';
import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

const App = () => {
  // hooke
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div />
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

// <div className={classes.root}></div>
// <main className={classes.content}>
//         <div className={classes.toolbar} />

export default App;

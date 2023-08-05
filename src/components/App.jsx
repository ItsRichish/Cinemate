import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import useStyles from "./styles";

import { MovieInformation, Movies, Navbar, Profile, Actors } from "./";

const App = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Navbar />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <Routes>
              <Route exact path="/" element={<Movies />} />
              <Route exact path="/approved" element={<Movies />} />
              <Route exact path="/profile/:id" element={<Profile />} />
              <Route exact path="/movie/:id" element={<MovieInformation />} />
              <Route exact path="/actors/:id" element={<Actors />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;

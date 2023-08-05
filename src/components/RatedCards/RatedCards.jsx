import React from "react";
import { Typography, Box } from "@material-ui/core";

import useStyles from "./styles";
import { Movie } from "..";

const RatedCards = (props) => {
  const { title, data } = props;
  const classes = useStyles;

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box display="flex" flexWrap="wrap" className={classes.container}>
        {data?.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Box>
    </Box>
  );
};

export default RatedCards;

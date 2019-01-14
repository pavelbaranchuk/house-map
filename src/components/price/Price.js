import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  housePrice: {
    fontWeight: "bold",
    marginTop: "0.5rem"
  }
};

const Price = ({ classes }) => (
  <Typography component="p" className={classes.housePrice}>
    $9
  </Typography>
);

Price.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Price);

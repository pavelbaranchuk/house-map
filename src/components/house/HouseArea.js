import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
  houseArea: {
    margin: "0.5rem",
    minHeight: "0.5rem"
  }
};

const HouseArea = ({ classes, area }) => (
  <Typography component="p" className={classes.houseArea}>
    {area && `${area} sqr. ft.`}
  </Typography>
);

HouseArea.propTypes = {
  classes: PropTypes.object,
  area: PropTypes.number
};

export default withStyles(styles)(HouseArea);

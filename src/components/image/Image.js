import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";

const styles = {
  media: {
    height: "15rem"
  }
};

const Image = ({ classes, insider, src }) => (
  <CardMedia className={classes.media} image={src} title="House Image">
    {insider.props.children}
  </CardMedia>
);

Image.propTypes = {
  classes: PropTypes.object,
  insider: PropTypes.object,
  src: PropTypes.string.isRequired
};

export default withStyles(styles)(Image);

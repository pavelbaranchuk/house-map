import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";

const styles = {
  media: {
    height: 200
  }
};

const Image = ({ classes }) => (
  <CardMedia
    className={classes.media}
    image="https://content.screencast.com/users/pablo_picaso/folders/Jing/media/2b164f3f-268b-4130-9c5f-44959fa759e5/00000089.png"
    title="House Image"
  />
);

Image.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Image);

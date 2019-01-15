import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CardMedia, IconButton } from "@material-ui/core";
import { ArrowRight, ArrowLeft } from "@material-ui/icons";

const styles = {
  media: {
    height: "15rem",
  },
  nextButton: {
    fontSize: "3rem",
    background: "rgba(0, 0, 0, 0.4)",
    borderRadius: "50%",
    color: "black"

  },
  previousButton: {
    fontSize: "3rem",
    background: "rgba(0, 0, 0, 0.4)",
    borderRadius: "50%",
    color: "black"
  },
  previousWrapper: {
    position: "absolute",
    background: "rgba(0, 0, 0, 0.2)",
    top: 0,
    bottom: 0,
    left: 0,
    right: "18rem",
    borderRadius: 0,
  },
  nextWrapper: {
    position: "absolute",
    background: "rgba(0, 0, 0, 0.2)",
    top: 0,
    bottom: 0,
    left: "16.5rem",
    right: 0,
    borderRadius: 0
  },
  children: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "1rem"
  }
};

const HouseImage = ({ classes, insider, src, description }) => (

  <CardMedia className={classes.media} image={src[0]} title={description}>

    <div className={classes.children}>
      {insider.props.children}
    </div>

    {(src.length !== 1) &&
      <>
        <IconButton className={classes.previousWrapper} aria-label="Previous">
          <ArrowLeft className={classes.previousButton} />
        </IconButton>

        <IconButton className={classes.nextWrapper} aria-label="Next">
          <ArrowRight className={classes.nextButton} />
        </IconButton>
      </>}
  </CardMedia>
);

HouseImage.propTypes = {
  classes: PropTypes.object,
  insider: PropTypes.object,
  src: PropTypes.array.isRequired,
  description: PropTypes.string
};

export default withStyles(styles)(HouseImage);

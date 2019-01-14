import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import HouseMap from "./houseMap/HouseMap";

// import { connect } from "react-redux";

const styles = () => ({
  root: {
    display: "flex"
  }
});

export class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <HouseMap />
      </div>
    );
  }
}

export default withStyles(styles)(App);

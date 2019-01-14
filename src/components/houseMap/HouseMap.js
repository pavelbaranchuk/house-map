import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent } from "@material-ui/core";

// import { connect } from "react-redux";

import Area from "../area/Area";
import Image from "../image/Image";
import Price from "../price/Price";
import Address from "../address/Address";

const styles = {
  houseWrapper: {
    height: 400
  },
  houseInfo: {
    height: 300
  }
};

class HouseMap extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.houseWrapper}
        >
          <Card>
            <CardContent className={classes.houseInfo}>
              <Image />
              <Area />
              <Price />
              <Address />
            </CardContent>
          </Card>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(HouseMap);

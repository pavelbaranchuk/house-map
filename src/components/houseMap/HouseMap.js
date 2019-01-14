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
    height: 300,
    position: "relative"
  },
  inside: {
    position: "absolute"
  }
};

class HouseMap extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    template: PropTypes.array.isRequired
  };

  render() {
    const { classes, template } = this.props;

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
              {template.map((item, i) => {
                let child;
                if (item.children) {
                  child = item.children;
                }
                return (
                  <div key={i}>
                    {item.component === "PRICE" && <Price price={item.field} />}
                    {item.component === "ADDRESS" && (
                      <Address address={item.field} />
                    )}
                    {item.component === "IMAGE" && (
                      <Image
                        src={item.field}
                        insider={
                          <div className={classes.inside}>
                            {child.map((subitem, k) => {
                              return (
                                <div key={k}>
                                  {subitem.component === "ADDRESS" && (
                                    <Address address={subitem.field} />
                                  )}
                                  {subitem.component === "PRICE" && (
                                    <Price price={subitem.field} />
                                  )}
                                  {subitem.component === "AREA" && (
                                    <Area area={subitem.field} />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        }
                      />
                    )}
                    {item.component === "AREA" && <Area area={item.field} />}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(HouseMap);

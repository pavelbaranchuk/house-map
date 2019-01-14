import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent } from "@material-ui/core";

import { connect } from "react-redux";
import { loadCachedTemplate } from "../../store/actionCreators/templates";

import Area from "../area/Area";
import Image from "../image/Image";
import Price from "../price/Price";
import Address from "../address/Address";

const styles = {
  houseWrapper: {
    marginTop: "5rem"
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
        <Grid container justify="center" className={classes.houseWrapper}>
          <Card>
            <CardContent>
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
                          <div>
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

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  loadCachedTemplate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HouseMap));

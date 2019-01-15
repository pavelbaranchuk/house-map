import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent } from "@material-ui/core";

import HouseArea from "./HouseArea";
import HouseImage from "./HouseImage";
import HousePrice from "./HousePrice";
import HouseAddress from "./HouseAddress";

const styles = {
  card: {
    width: "21rem",
    // display: "flex"
    // margin: "0 auto"

  },
  // houseWrapper: {
  //   marginTop: "5rem"
  // }
};

function House({ classes, data, template }) {

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
                <div className={classes.card} key={i}>
                  {item.component === "PRICE" && (<HousePrice price={data[item.field]} />)}

                  {item.component === "ADDRESS" && (<HouseAddress address={data[item.field]} />)}

                  {item.component === "IMAGE" && (<HouseImage description={data.description} src={data[item.field][0]} insider={<div>{child && child.map((subitem, k) => {
                    return (<div key={k}>
                      {subitem.component === "ADDRESS" && (<HouseAddress address={data[subitem.field]} />)}

                      {subitem.component === "PRICE" && (<HousePrice inner price={data[subitem.field]} />)}

                      {subitem.component === "AREA" && (<HouseArea area={data[subitem.field]} />)}</div>);
                  })}</div>}
                  />)}

                  {item.component === "AREA" && (<HouseArea area={data[item.field]} />)}</div>);
            })}
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

House.propTypes = {
  classes: PropTypes.object.isRequired
  // templates: PropTypes.object.isRequired,
  // houses: PropTypes.object.isRequired,
};

export default withStyles(styles)(House);

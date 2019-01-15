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
    position: "relative"
  },
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
                  {item.component === "PRICE" && (<HousePrice price={data[item.field].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} />)}

                  {item.component === "ADDRESS" && (<HouseAddress address={data[item.field]} />)}

                  {item.component === "IMAGE" && (<HouseImage description={data.description} src={data[item.field]} insider={<div>{child && child.map((subitem, k) => {
                    return (<div key={k}>
                      {subitem.component === "ADDRESS" && (<HouseAddress address={data[subitem.field]} />)}

                      {subitem.component === "PRICE" && (<HousePrice inner price={data[subitem.field].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} />)}

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
  classes: PropTypes.object.isRequired,
  template: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(House);

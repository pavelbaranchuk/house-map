import React from "react";
import HouseMap from "./houseMap/HouseMap";

const template = [
  {
    component: "ADDRESS",
    field: "full_address"
  },
  {
    component: "IMAGE",
    field: "images",
    children: [
      {
        component: "PRICE",
        field: "price"
      },
      {
        component: "PRICE",
        field: "price"
      },
      {
        component: "AREA",
        field: "area"
      }
    ]
  },
  {
    component: "AREA",
    field: "area"
  }
];

const App = () => (
  // <HouseMap />
  <HouseMap template={template} />
);

export default App;

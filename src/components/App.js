import React from "react";
import HouseMap from "./houseMap/HouseMap";

const template = [
  {
    component: "ADDRESS",
    field: "Ukraine, Kharkov, Akademika Proskyury street, app.9, 61085"
  },
  {
    component: "IMAGE",
    field:
      "https://content.screencast.com/users/pablo_picaso/folders/Jing/media/2b164f3f-268b-4130-9c5f-44959fa759e5/00000089.png",
    children: [
      {
        component: "PRICE",
        field: "13"
      },
      {
        component: "PRICE",
        field: "3"
      },
      {
        component: "AREA",
        field: "9"
      }
    ]
  },
  {
    component: "AREA",
    field: "5"
  }
];

const App = () => <HouseMap template={template} />;

export default App;

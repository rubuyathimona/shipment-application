import Shipment from "pages/shipment";
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Shipment",
    key: "shipment",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/shipment",
    component: <Shipment />,
  },
];

export default routes;

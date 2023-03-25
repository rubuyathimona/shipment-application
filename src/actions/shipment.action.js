import { deleteShipment, editShipment, findAllShipment } from "services/shipment.service";
import shipmentData from "pages/shipment/data/shipmentData.json";
import { DELETE_SHIPMENT, SET_ALL_SHIPMENTS, UPDATE_SHIPMENT } from "./types";

export function shipmentsFindAction() {
  return (dispatch) => {
    findAllShipment().then(
      (response) => {
        dispatch({
          type: SET_ALL_SHIPMENTS,
          payload: response.data,
        });
      },
      () => {
        dispatch({
          type: SET_ALL_SHIPMENTS,
          payload: shipmentData,
        });
      }
    );
  };
}

export function shipmentDeleteAction(orderNo) {
  return (dispatch) => {
    deleteShipment(orderNo).then(
      () => {
        dispatch(shipmentsFindAction());
      },
      () => {
        dispatch({
          type: DELETE_SHIPMENT,
          payload: orderNo,
        });
      }
    );
  };
}

export function shipmentUpdateAction(orderNo, shipment) {
  return (dispatch) => {
    editShipment(orderNo, shipment).then(
      () => {
        dispatch(shipmentsFindAction());
      },
      () => {
        dispatch({
          type: UPDATE_SHIPMENT,
          payload: { orderNo, shipment },
        });
      }
    );
  };
}

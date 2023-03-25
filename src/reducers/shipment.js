import { SET_ALL_SHIPMENTS, DELETE_SHIPMENT, UPDATE_SHIPMENT } from "../actions/types";

const initialState = {};

export default function shipment(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALL_SHIPMENTS:
      return { ...state, shipments: payload };

    case DELETE_SHIPMENT:
      return {
        ...state,
        shipments: state?.shipments?.filter((row) => row.orderNo !== payload),
      };

    case UPDATE_SHIPMENT: {
      const shipmentToBeUpdated = state?.shipments?.find((row) => row?.orderNo === payload.orderNo);
      shipmentToBeUpdated.trackingNo = payload.shipment.trackingNo;
      shipmentToBeUpdated.date = payload.shipment.date;
      shipmentToBeUpdated.status = payload.shipment.status;
      shipmentToBeUpdated.consignee = payload.shipment.consignee;
      shipmentToBeUpdated.customer = payload.shipment.customer;
      return { ...state };
    }
    default:
      return state;
  }
}

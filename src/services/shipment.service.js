import api from "./api";

export function findAllShipment() {
  return api.get("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0");
}

export function editShipment(orderNo, shipment) {
  return api.put(
    `https://my.api.mockaroo.com/shipments.json?key=5e0b62d0&orderNo=${orderNo}`,
    shipment
  );
}

export function deleteShipment(orderNo) {
  return api.post(`https://my.api.mockaroo.com/shipments.json?key=5e0b62d0&orderNo=${orderNo}`);
}

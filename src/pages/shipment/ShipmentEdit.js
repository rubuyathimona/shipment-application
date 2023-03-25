import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { shipmentUpdateAction } from "../../actions/shipment.action";

function ShipmentEdit({ openUpdateModal, updateModalHandleClose, shipment }) {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [customer, setCustomer] = useState("");
  const [status, setStatus] = useState("");
  const [trackingNo, setTrackingNo] = useState("");
  const [consignee, setConsignee] = useState("");

  useEffect(() => {
    setDate(shipment.date);
    setCustomer(shipment.customer);
    setStatus(shipment.status);
    setTrackingNo(shipment.trackingNo);
    setConsignee(shipment.consignee);
  }, [shipment]);

  const handleUpdateShipment = (orderNo) => {
    const updatedShipment = {
      trackingNo,
      date,
      status,
      consignee,
      customer,
    };
    dispatch(shipmentUpdateAction(orderNo, updatedShipment));
    updateModalHandleClose();
  };

  return (
    <Dialog
      open={openUpdateModal}
      onClose={updateModalHandleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Shipment Update</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                disabled
                id="standard-disabled"
                label="Order No"
                defaultValue={shipment.orderNo}
                variant="standard"
              />

              <TextField
                id="standard-disabled"
                label="Date"
                defaultValue={shipment.date}
                onChange={(event) => setDate(event.target.value)}
                variant="standard"
              />
            </div>
            <div>
              <TextField
                id="standard-disabled"
                label="Consignee"
                defaultValue={shipment.consignee}
                onChange={(event) => setConsignee(event.target.value)}
                variant="standard"
              />

              <TextField
                id="standard-disabled"
                label="Customer"
                defaultValue={shipment.customer}
                onChange={(event) => setCustomer(event.target.value)}
                variant="standard"
              />
            </div>
            <div>
              <TextField
                id="standard-disabled"
                label="Tracking No"
                defaultValue={shipment.trackingNo}
                onChange={(event) => setTrackingNo(event.target.value)}
                variant="standard"
              />

              <TextField
                id="standard-disabled"
                label="Status"
                defaultValue={shipment.status}
                onChange={(event) => setStatus(event.target.value)}
                variant="standard"
              />
            </div>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Typography align="center">
          <Button onClick={() => handleUpdateShipment(shipment.orderNo)}>Update</Button>
        </Typography>
        <Typography align="center">
          <Button onClick={updateModalHandleClose}>Close</Button>
        </Typography>
      </DialogActions>
    </Dialog>
  );
}

export default ShipmentEdit;

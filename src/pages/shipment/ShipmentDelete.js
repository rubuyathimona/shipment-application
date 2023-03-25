import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { shipmentDeleteAction } from "../../actions/shipment.action";

function ShipmentDelete({ openDeleteModal, deleteModalHandleClose, shipment }) {
  const dispatch = useDispatch();

  const handleDeleteShipment = (orderNo) => {
    dispatch(shipmentDeleteAction(orderNo));
    deleteModalHandleClose();
  };

  return (
    <Dialog
      open={openDeleteModal}
      onClose={deleteModalHandleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you sure? You want to delete this shipment?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" />
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
              disabled
              id="standard-disabled"
              label="Date"
              defaultValue={shipment.date}
              variant="standard"
            />
          </div>
          <div>
            <TextField
              disabled
              id="standard-disabled"
              label="Consignee"
              defaultValue={shipment.consignee}
              variant="standard"
            />

            <TextField
              disabled
              id="standard-disabled"
              label="Customer"
              defaultValue={shipment.customer}
              variant="standard"
            />
          </div>
          <div>
            <TextField
              disabled
              id="standard-disabled"
              label="Tracking No"
              defaultValue={shipment.trackingNo}
              variant="standard"
            />

            <TextField
              disabled
              id="standard-disabled"
              label="Status"
              defaultValue={shipment.status}
              variant="standard"
            />
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Typography align="center">
          <Button onClick={() => handleDeleteShipment(shipment.orderNo)}>Delete</Button>
        </Typography>
        <Typography align="center">
          <Button onClick={deleteModalHandleClose}>Cancel</Button>
        </Typography>
      </DialogActions>
    </Dialog>
  );
}

export default ShipmentDelete;

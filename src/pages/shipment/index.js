import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "layouts/LayoutContainers/DashboardLayout";
import { shipmentsFindAction } from "actions/shipment.action";
import ShipmentDetails from "./ShipmentDetails";
import ShipmentDelete from "./ShipmentDelete";
import ShipmentEdit from "./ShipmentEdit";
import shipmentTableColumns from "./columnDefinition";

function Shipment() {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state?.shipment?.shipments) || [];

  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [shipment, selectedShipment] = useState({});

  const handleClickOpen = (orderNo) => {
    const clickedShipment = rows.find((row) => row.orderNo === orderNo);
    selectedShipment(clickedShipment);
    setOpen(true);
  };

  const handleClickOpenDeleteModal = (orderNo) => {
    const clickedShipment = rows.find((row) => row.orderNo === orderNo);
    selectedShipment(clickedShipment);
    setOpenDeleteModal(true);
  };

  const handleClickOpenUpdateModal = (orderNo) => {
    const clickedShipment = rows.find((row) => row.orderNo === orderNo);
    selectedShipment(clickedShipment);
    setOpenUpdateModal(true);
  };

  const deleteModalHandleClose = () => {
    setOpenDeleteModal(false);
  };

  const updateModalHandleClose = () => {
    setOpenUpdateModal(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(shipmentsFindAction());
  }, [dispatch]);

  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <ShipmentDetails open={open} handleClose={handleClose} shipment={shipment} />

                <ShipmentDelete
                  openDeleteModal={openDeleteModal}
                  deleteModalHandleClose={deleteModalHandleClose}
                  shipment={shipment}
                />

                <ShipmentEdit
                  openUpdateModal={openUpdateModal}
                  updateModalHandleClose={updateModalHandleClose}
                  shipment={shipment}
                />

                <MDTypography variant="h6" color="white">
                  Shipment
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <div style={{ height: 600, width: "100%" }}>
                  <DataGrid
                    rows={rows}
                    columns={shipmentTableColumns(
                      handleClickOpen,
                      handleClickOpenUpdateModal,
                      handleClickOpenDeleteModal
                    )}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    getRowId={(row) => row.orderNo}
                  />
                </div>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Shipment;

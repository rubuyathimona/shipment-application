import MDTypography from "components/MDTypography";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const shipmentTableColumns = (
  handleClickOpen,
  handleClickOpenUpdateModal,
  handleClickOpenDeleteModal
) => [
  { field: "orderNo", headerName: "Order No", width: 250 },
  { field: "date", headerName: "Date", width: 100 },
  { field: "customer", headerName: "Customer", width: 150 },
  {
    field: "trackingNo",
    headerName: "Tracking no",
    width: 250,
  },
  {
    field: "status",
    headerName: "Status",
    type: "number",
    width: 90,
  },
  {
    field: "consignee",
    headerName: "Consignee",
    width: 180,
  },
  {
    field: "",
    headerName: "Action",
    width: 200,
    renderCell: (params) => (
      <div>
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <DescriptionIcon
            onClick={() => handleClickOpen(params.row.orderNo)}
            style={{ minWidth: "20px" }}
          />
        </MDTypography>
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <ModeEditIcon
            onClick={() => handleClickOpenUpdateModal(params.row.orderNo)}
            style={{ minWidth: "20px" }}
          />
        </MDTypography>
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <DeleteOutlineIcon
            onClick={() => handleClickOpenDeleteModal(params.row.orderNo)}
            style={{ minWidth: "20px", color: "red" }}
          />
        </MDTypography>
      </div>
    ),
  },
];
export default shipmentTableColumns;

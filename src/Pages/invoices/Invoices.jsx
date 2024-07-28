import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData"; // Ensure this path is correct
// import "./Invoices.scss"; // Optional, if you want to add custom styling

const Invoices = () => {
  // Define columns for DataGrid
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Client Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "cost",
      headerName: "Cost",
      width: 120,
      renderCell: (params) => `$${params.value}`,
    },
    { field: "phone", headerName: "Phone Number", width: 180 },
    { field: "date", headerName: "Date", width: 150 },
  ];

  // Use mockDataInvoices for rows
  const rows = mockDataInvoices;

  return (
    <Box
      width="100%"
      height="100vh"
      p="20px"
      bgcolor="#1f2937" // Background color for the full page
      color="#ffffff" // Text color for readability
    >
      <Typography variant="h4" mb="20px" color="#ffffff">
        Invoices
      </Typography>
      <div style={{ height: "75vh", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{
            // Set the background color and text color for DataGrid
            "& .MuiDataGrid-root": {
              borderColor: "#ffffff",
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#374151", // Darker header background for contrast
              color: "#ffffff",
            },
            "& .MuiDataGrid-cell": {
              color: "#ffffff",
            },
            "& .MuiCheckbox-root": {
              color: "#ffffff", // Checkbox color
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "#374151",
              color: "#ffffff",
            },
          }}
        />
      </div>
    </Box>
  );
};

export default Invoices;

import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { ordersData } from "../../data/dummy"; // Adju

const Orders = () => {
  // Define columns based on ordersGrid
  const columns = [
    {
      field: "ProductImage",
      headerName: "Image",
      width: 120,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="product"
          style={{ width: 50, height: 50, borderRadius: "4px" }}
        />
      ),
      align: "center",
      headerAlign: "center",
    },
    {
      field: "OrderItems",
      headerName: "Item",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "CustomerName",
      headerName: "Customer Name",
      width: 200,
    },
    {
      field: "TotalAmount",
      headerName: "Total Amount",
      width: 150,
      renderCell: (params) => `$${params.value}`,
    },
    {
      field: "Location",
      headerName: "Location",
      width: 150,
    },
    {
      field: "Status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => (
        <Box
          sx={{
            backgroundColor: params.row.StatusBg,
            color: "#ffffff",
            padding: "5px 10px",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          {params.value}
        </Box>
      ),
      align: "center",
      headerAlign: "center",
    },
  ];

  return (
    <Box width="100%" height="100vh" p="20px" bgcolor="#1f2937" color="#ffffff">
      <Typography variant="h4" mb="20px" color="#ffffff">
        Orders
      </Typography>
      <div style={{ height: "calc(100vh - 100px)", width: "100%" }}>
        <DataGrid
          rows={ordersData}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 15]}
          checkboxSelection
          disableSelectionOnClick
          sx={{
            "& .MuiDataGrid-root": {
              borderColor: "#ffffff",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#374151", // Darker background for headers
              color: "#ffffff",
            },
            "& .MuiDataGrid-cell": {
              color: "#ffffff",
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "#374151", // Darker background for footer
              color: "#ffffff",
            },
            "& .MuiCheckbox-root": {
              color: "#ffffff",
            },
          }}
        />
      </div>
    </Box>
  );
};

export default Orders;

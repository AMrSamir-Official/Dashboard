import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import Header from "../../UI/Header";
import { employeesData, employeesGrid } from "../../data/dummy";
import "./Customers.scss";
const Customers = () => {
  const toolbarOptions = ["search"];

  const editing = { delete: true, edit: true };

  // Map employeesGrid to columns
  const columns = employeesGrid.map((item, index) => ({
    field: item.field || "",
    headerName: item.headerName || "",
    width: item.width || 150,
    align: item.textAlign || "left",
    editable: item.editable || false,
  }));

  // Map employeesData to rows
  const rows = employeesData.map((dataItem, index) => ({
    id: index + 1,
    ...dataItem,
  }));
  return (
    <div className="h-screen flex flex-col">
      <Header Title="Customers " />
      <div className="flex-grow bg-gray-800 text-white">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          pagination
          components={{
            Toolbar: GridToolbar,
          }}
          className="text-xs divide-y divide-gray-700"
          // Apply Tailwind CSS classes directly to DataGrid components
          style={{ minHeight: "30vh", minWidth: "100%" }}
        />
      </div>
    </div>
  );
};

export default Customers;

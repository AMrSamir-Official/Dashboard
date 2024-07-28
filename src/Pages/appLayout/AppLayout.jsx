/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import * as React from "react";
import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import Drawer from "../../UI/Drawer/Drawer";
import Navbar from "../../UI/Navbar";
import "./AppLayout.scss";
const drawerWidth = 240;

export default function AppLayout() {
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen((item) => !item);
    console.log(open);
  };

  const Location = useLocation();
  const PathName = Location.pathname.toLowerCase();
  return (
    <Box
      className="w-full"
      sx={{
        color: "white",
      }}
    >
      {open && (
        <Drawer
          open={open}
          style={{ "--drawerWidth": `${drawerWidth}px`, "--isOpen": `${open}` }}
          PathName={PathName}
          handleDrawer={handleDrawer}
          drawerWidth={drawerWidth}
        />
      )}

      <Navbar
        drawerWidth={drawerWidth}
        open={open}
        handleDrawer={handleDrawer}
      />
      <div
        style={{ "--drawerWidth": `${drawerWidth}px` }}
        className="ml child-max-w  max-w-[100%]"
      >
        <Outlet />
      </div>
    </Box>
  );
}

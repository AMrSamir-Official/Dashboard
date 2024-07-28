/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ShoppingBag } from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { styled } from "@mui/material";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import {
  MdOutlineCalendarToday,
  MdOutlineGroup,
  MdOutlineHelp,
  MdOutlineKeyboardArrowLeft,
  MdOutlinePeople,
  MdOutlinePerson,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import unknownPic from "../../assets/imgs/unknown.png";

function DrawerComponent({ open, drawerWidth, PathName, handleDrawer }) {
  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  const [showDrawer, setShowDrawer] = React.useState();

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));
  return (
    <Drawer
      className={open ? "drawer" : "hide"}
      sx={{
        width: drawerWidth,

        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1f2937",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <MdOutlineKeyboardArrowLeft
        className="absolute top-2 right-2 text-white"
        size={30}
        onClick={handleDrawer}
      />
      <img
        onClick={() => handleDrawer}
        className="profile"
        src={unknownPic}
        alt="drawer"
      />
      <List>
        {[
          "Dashboard",
          "E-Commerce",
          "Customers",
          "Orders",
          "Team",
          "FAQ",
          "Form",
          "Invoices Balances",
          "Calender",
        ].map((text, index) => (
          <ListItem
            className={`${
              PathName == "/" + text.replace(" ", "-").toLocaleLowerCase()
                ? "bg-[#3b82f6] rounded-[10px]"
                : ""
            }`}
            key={text.split(" ")[0]}
            disablePadding
          >
            <NavLink to={text.split(" ")[0]}>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? (
                    <HomeOutlinedIcon className="text-white" />
                  ) : index === 1 ? (
                    <FiShoppingCart className="text-white" />
                  ) : index === 2 ? (
                    <MdOutlineGroup className="text-white" />
                  ) : index === 3 ? (
                    <ShoppingBag className="text-white" />
                  ) : index === 4 ? (
                    <MdOutlinePeople className="text-white" />
                  ) : index === 5 ? (
                    <MdOutlineHelp className="text-white" />
                  ) : index === 6 ? (
                    <MdOutlinePerson className="text-white" />
                  ) : index === 7 ? (
                    <HiOutlineReceiptPercent className="text-white" />
                  ) : index === 8 ? (
                    <MdOutlineCalendarToday className="text-white" />
                  ) : (
                    ""
                  )}
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }} primary={text} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      {/* <SidebarCard /> */}
      <Divider />
    </Drawer>
  );
}

export default DrawerComponent;

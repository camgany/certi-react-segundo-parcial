import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import TableReport from "../components/TableReport";
import { Grid } from "@mui/material";
import FormNewBill from "../components/FormNewBill";

const listMenu = [
    { name: 'Inicio', icon: <HomeWorkIcon />, to: '/' },
    { name: 'Añadir Gasto', icon: <ProductionQuantityLimitsIcon />, to: 'items' },
    { name: 'Graficas/Estadisticas', icon: <ProductionQuantityLimitsIcon />, to: 'charts' },
];

export default function TemporaryDrawer() {
  const [toggle, setToggle] = React.useState(false);
  const navigate = useNavigate();

  const goTo = (url) => {
    navigate(url);
  };
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setToggle(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {listMenu.map((menuItem, index) => (
          <ListItem key={menuItem.name} disablePadding>
            <ListItemButton onClick={() => goTo(menuItem.to)}>
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <NavBar toggle={toggleDrawer} />
      <Drawer anchor={"left"} open={toggle} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      <main>
        <Grid sx={{ m: 10 }} >
          <FormNewBill />
        </Grid>
      </main>
    </div>
  );
}

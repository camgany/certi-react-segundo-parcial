import React, { useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import CardBill from '../components/CardBill';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setToggle(open);
  };

  // Obtener los gastos del Local Storage
  const [expenses, setExpenses] = React.useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  // Calcular el total de los gastos y la cantidad de gastos utilizando useMemo
  const [totalExpenses, totalExpensesCount] = useMemo(() => {
    const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
    return [total, expenses.length];
  }, [expenses]);

  return (
    <div>
      <NavBar toggle={toggleDrawer} />
      <Drawer anchor="left" open={toggle} onClose={toggleDrawer(false)}>
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
      </Drawer>
      <main>
        <h1 style={{ textAlign: 'center' }}
        >Lista de gastos</h1>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: 'primary.main' }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  Total gastado: {totalExpenses} Bs
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: 'primary.main' }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  Cantidad de gastos: {totalExpensesCount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={1} sx={{ margin: '5px' }}>
          {expenses.map((bill, index) => (
            <CardBill key={index} bill={bill} />
          ))}
        </Grid>
      </main>
    </div>
  );
}

import React, { useMemo, memo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MoneyIcon from '@mui/icons-material/Money';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ReceiptIcon from '@mui/icons-material/Receipt';
import Grid from '@mui/material/Grid';

const CardBill = ({ bill }) => {
  const getIconByCategory = useMemo(() => {
    switch (bill.category) {
      case 'ahorro':
        return <MoneyIcon />;
      case 'comida':
        return <FastfoodIcon />;
      case 'casa':
        return <HomeIcon />;
      case 'gastos':
        return <ShoppingBagIcon />;
      case 'ocio':
        return <SportsEsportsIcon />;
      case 'salud':
        return <LocalHospitalIcon />;
      case 'suscripciones':
        return <ReceiptIcon />;
      default:
        return null;
    }
  }, [bill.category]);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ mb: 2 }} variant="outlined" elevation={2} sx={{ backgroundColor: '#f1e4e8' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '5px' }}>
                  {getIconByCategory}
                </div>
                <div>
                  <Typography variant="h6" component="div">
                    {bill.description}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Cantidad: {bill.amount}
                  </Typography>
                  <Typography variant="body1">
                    Categoría: {bill.category}
                  </Typography>
                  <Typography variant="body1">
                    Fecha: {bill.date}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </Grid>
  );
};

export default memo(CardBill);

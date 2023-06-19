import React, { useMemo, memo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MoneyIcon from '../../assets/icono_ahorro.svg';
import FastfoodIcon from '../../assets/icono_comida.svg';
import HomeIcon from '../../assets/icono_casa.svg';
import ShoppingBagIcon from '../../assets/icono_gastos.svg';
import SportsEsportsIcon from '../../assets/icono_ocio.svg';
import LocalHospitalIcon from '../../assets/icono_salud.svg';
import ReceiptIcon from '../../assets/icono_suscripciones.svg';
import Grid from '@mui/material/Grid';

const CardBill = ({ bill }) => {
  const getIconByCategory = useMemo(() => {
    switch (bill.category) {
      case 'ahorro':
        return <img src={MoneyIcon} alt="Money Icon" />;
      case 'comida':
        return <img src={FastfoodIcon} alt="Fastfood Icon" />;
      case 'casa':
        return <img src={HomeIcon} alt="Home Icon" />;
      case 'gastos':
        return <img src={ShoppingBagIcon} alt="Shopping Bag Icon" />;
      case 'ocio':
        return <img src={SportsEsportsIcon} alt="Sports Icon" />;
      case 'salud':
        return <img src={LocalHospitalIcon} alt="Health Icon" />;
      case 'suscripciones':
        return <img src={ReceiptIcon} alt="Receipt Icon" />;
      default:
        return null;
    }
  }, [bill.category]);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card sx={{ maxWidth: 300, mb: 2 }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '16px' }}>
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

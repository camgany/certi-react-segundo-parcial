import React, { useState } from "react";
import { Grid, TextField, Button, MenuItem } from "@mui/material";

const AddBill = ({ onAddBill }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Convertir amount a una cadena antes de guardar en el local storage
    const amountAsString = amount.toString();

    // Crear el nuevo objeto de gasto
    const newBill = {
      description: description,
      amount: amountAsString,
      date: date,
      category: category,
    };

    // Llamar a la función onAddBill para agregar el nuevo gasto
    onAddBill(newBill);

    // Limpiar los campos después de enviar
    setDescription("");
    setAmount("");
    setDate("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Añadir Gasto</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Descripción"
            value={description}
            onChange={handleDescriptionChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Precio"
            value={amount}
            onChange={handleAmountChange}
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Fecha"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            type="date"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Categoría"
            select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            fullWidth
          >
            <MenuItem value="">Seleccionar categoría</MenuItem>
            <MenuItem value="ahorro">Ahorro</MenuItem>
            <MenuItem value="casa">Casa</MenuItem>
            <MenuItem value="comida">Comida</MenuItem>
            <MenuItem value="gastos">Gastos</MenuItem>
            <MenuItem value="ocio">Ocio</MenuItem>
            <MenuItem value="salud">Salud</MenuItem>
            <MenuItem value="suscripciones">Suscripciones</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" fullWidth>
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddBill;

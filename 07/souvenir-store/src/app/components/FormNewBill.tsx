import React, { useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MenuItem, Select, InputLabel, FormControl
} from '@mui/material';


const FormNewBill = () => {
  const descriptionRef = useRef(null);
  const amountRef = useRef(null);
  const categoryRef = useRef(null);
  const dateRef = useRef(null);

  useEffect(() => {
    descriptionRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Acceder a los valores de los campos utilizando las referencias
    const description = descriptionRef.current.value;
    const amount = amountRef.current.value;
    const category = categoryRef.current.value;
    const date = dateRef.current.value;

    // Obtener los gastos existentes del Local Storage o inicializar un array vacío si no hay gastos guardados
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Crear un nuevo objeto de gasto
    const newExpense = {
      description,
      amount,
      category,
      date,
    };

    // Agregar el nuevo gasto al array de gastos
    expenses.push(newExpense);

    // Guardar los gastos actualizados en el Local Storage
    localStorage.setItem('expenses', JSON.stringify(expenses));

    // Limpiar los campos del formulario
    descriptionRef.current.value = '';
    amountRef.current.value = '';
    categoryRef.current.value = '';
    dateRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ textAlign: 'center' }}>Añadir Gasto</h1>
      <TextField
        label="Descripción"
        inputRef={descriptionRef}
        fullWidth
        sx={{ marginBottom: '16px' }}
      />
      <TextField
        label="Cantidad"
        type="number"
        inputRef={amountRef}
        fullWidth
        sx={{ marginBottom: '16px' }}
      />
     <FormControl fullWidth sx={{ marginBottom: '16px' }}>
  <InputLabel id="category-label">Categoría</InputLabel>
  <Select
    inputRef={categoryRef}
    labelId="category-label"
    fullWidth
  >
    <MenuItem value="ahorro">Ahorro</MenuItem>
    <MenuItem value="comida">Comida</MenuItem>
    <MenuItem value="casa">Casa</MenuItem>
    <MenuItem value="gastos">Gastos</MenuItem>
    <MenuItem value="ocio">Ocio</MenuItem>
    <MenuItem value="salud">Salud</MenuItem>
    <MenuItem value="suscripciones">Suscripciones</MenuItem>
  </Select>
</FormControl>


<TextField
  label="Fecha"
  type="date"
  inputRef={dateRef}
  fullWidth
  InputLabelProps={{
    shrink: true,
  }}
  sx={{ marginBottom: '16px' }}
/>

      <Button type="submit" variant="contained" fullWidth>
        Enviar
      </Button>
    </form>
  );
};

export default FormNewBill;

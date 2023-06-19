import React, { useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MenuItem, Select } from '@mui/material';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
  },
  input: {
    marginBottom: '16px',
  },
  submitButton: {
    alignSelf: 'flex-end',
  },
};

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
      <TextField
        label="Descripción"
        inputRef={descriptionRef}
        fullWidth
      />
      <TextField
        label="Cantidad"
        type="number"
        inputRef={amountRef}
        fullWidth
      />
      <Select
        label="Categoría"
        inputRef={categoryRef}
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
      <TextField
        label="Fecha"
        type="date"
        inputRef={dateRef}
        fullWidth
      />
      <Button type="submit" variant="contained" fullWidth>
        Enviar
      </Button>
    </form>
  );
};

export default FormNewBill;

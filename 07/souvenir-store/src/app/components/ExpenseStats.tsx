import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Divider } from '@mui/material';

const ExpenseStats = ({ expenses }) => {
  const chartRefByCategory = useRef(null);
  const chartRefByDate = useRef(null);

  useEffect(() => {
    if (chartRefByCategory.current) {
      if (chartRefByCategory.current.chart) {
        chartRefByCategory.current.chart.destroy(); // Destruye el gráfico existente
      }

      const categories = expenses.reduce((acc, expense) => {
        if (acc[expense.category]) {
          acc[expense.category] += parseFloat(expense.amount);
        } else {
          acc[expense.category] = parseFloat(expense.amount);
        }
        return acc;
      }, {});

      const chartDataByCategory = {
        labels: Object.keys(categories),
        datasets: [
          {
            data: Object.values(categories),
            backgroundColor: ['red', 'blue', 'green','purple','pink','brown'], // Colores de fondo para cada categoría
          },
        ],
      };

      const chartOptionsByCategory = {
        // Opciones del gráfico de categoría
      };

      const newChartByCategory = new Chart(chartRefByCategory.current, {
        type: 'pie',
        data: chartDataByCategory,
        options: chartOptionsByCategory,
      });

      chartRefByCategory.current.chart = newChartByCategory; // Almacena la instancia del gráfico en la referencia
    }

    if (chartRefByDate.current) {
      if (chartRefByDate.current.chart) {
        chartRefByDate.current.chart.destroy(); // Destruye el gráfico existente
      }

      const expensesByDate = expenses.reduce((acc, expense) => {
        const date = expense.date;
        if (acc[date]) {
          acc[date] += parseFloat(expense.amount);
        } else {
          acc[date] = parseFloat(expense.amount);
        }
        return acc;
      }, {});

      const chartDataByDate = {
        labels: Object.keys(expensesByDate),
        datasets: [
          {
            label: 'Expenses',
            data: Object.values(expensesByDate),
            backgroundColor: 'blue', // Color de fondo para todas las fechas
          },
        ],
      };

      const chartOptionsByDate = {
        // Opciones del gráfico de fecha
      };

      const newChartByDate = new Chart(chartRefByDate.current, {
        type: 'bar',
        data: chartDataByDate,
        options: chartOptionsByDate,
      });

      chartRefByDate.current.chart = newChartByDate; // Almacena la instancia del gráfico en la referencia
    }
  }, [expenses]);

  return (
    <div>
      <div>
        <h2 >Gastos por categoría</h2>
        <canvas ref={chartRefByCategory} />
      </div>
      <div>
        <h2>Gastos por fecha</h2>
        <canvas ref={chartRefByDate} />
      </div>
    </div>
  );
};

export default ExpenseStats;

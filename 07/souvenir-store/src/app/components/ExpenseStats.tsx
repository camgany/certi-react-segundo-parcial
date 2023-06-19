import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';

const ExpenseStats = ({ expenses }) => {
  const categories = [...new Set(expenses.map((expense) => expense.category))];

  const expensesByCategory = categories.map((category) => {
    const total = expenses.filter((expense) => expense.category === category).length;
    return { category, total };
  });

  const chartDataByCategory = {
    labels: expensesByCategory.map((item) => item.category),
    datasets: [
      {
        data: expensesByCategory.map((item) => item.total),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#66BB6A',
          '#FF8A65',
          '#42A5F5',
          '#FFD54F',
        ],
      },
    ],
  };

  const chartDataByDate = {
    labels: expenses.map((expense) => expense.date),
    datasets: [
      {
        label: 'Gastos por fecha',
        data: expenses.map((expense) => expense.amount),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div>
      <div>
        <h2>Gastos por categoría</h2>
        <Pie data={chartDataByCategory} />
      </div>
      <div>
        <h2>Gastos por fecha</h2>
        <Bar data={chartDataByDate} />
      </div>
    </div>
  );
};

export default ExpenseStats;

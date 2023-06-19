import React from 'react';
import { Pie } from 'react-chartjs-2';

const ExpenseStats = ({ expenses }) => {
  const categories = [...new Set(expenses.map((expense) => expense.category))];

  const expensesByCategory = categories.map((category) => {
    const total = expenses.filter((expense) => expense.category === category).length;
    return { category, total };
  });

  const chartData = {
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

  return (
    <div>
      <h2>Gastos por categoría</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default ExpenseStats;
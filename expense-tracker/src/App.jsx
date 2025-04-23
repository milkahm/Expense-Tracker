import React, { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import SearchBar from "./SearchBar";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem("expenses");
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [...prev, { id: Date.now(), ...expense }]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchTerm) ||
      expense.category.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <ExpenseForm onAddExpense={handleAddExpense} />
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <ExpenseTable
        expenses={filteredExpenses}
        onDeleteExpense={handleDeleteExpense}
      />
    </div>
  );
};

export default App;

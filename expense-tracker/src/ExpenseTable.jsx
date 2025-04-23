import React from "react";

const ExpenseTable = ({ expenses, onDeleteExpense }) => {
  return (
    <div className="overflow-x-auto mt-4">
      
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                No expenses to show.
              </td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{expense.name}</td>
                <td className="border border-gray-300 px-4 py-2">${expense.amount}</td>
                <td className="border border-gray-300 px-4 py-2">{expense.category}</td>
                <td className="border border-gray-300 px-4 py-2">{expense.date}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => onDeleteExpense(expense.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;

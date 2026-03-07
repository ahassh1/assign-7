import React from "react";
import { toast } from "react-toastify";

const TaskStatus = ({
  customer,
  removeProgress,
  resolved,
  setResolved,
  selectedResolve,
  setSelectedResolve,
  removeCard,
}) => {
  const handleCard = (customer) => {
    removeCard(customer);
  };
  const handleRemove = (customer) => {
    removeProgress(customer);
    setResolved(resolved + 1);
    setSelectedResolve([...selectedResolve, customer]);
    toast.info("Ticket is now Resolved!");
  };
  return (
    <div className="shadow-lg rounded-lg border border-gray-300  text-center mt-3 mb-1 p-3">
      <h1 className="font-semibold text-center text-gray-600 ">
        {customer?.title}
      </h1>
      <button
        onClick={() => {
          handleRemove(customer);
          handleCard(customer);
        }}
        className="bg-green-500 mt-1 cursor-pointer hover:bg-red-400 hover:text-white text-[12px]  text-white w-full rounded-md p-1"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskStatus;

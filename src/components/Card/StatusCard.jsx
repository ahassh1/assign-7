import React from "react";
import TaskStatus from "./TaskStatus";
import ResolvedTask from "./ResolvedTask";
const StatusCard = ({
  selectedProgress,
  removeProgress,
  resolved,
  setResolved,
  selectedResolve,
  setSelectedResolve,
}) => {
  return (
    <div>
      <div>
        <h1 className="text-[15px] md:text-2xl text-gray-700 font-semibold">
          Task Status
        </h1>
        {selectedProgress.length > 0 ? (
          selectedProgress.map((customer) => (
            <TaskStatus
              selectedResolve={selectedResolve}
              setSelectedResolve={setSelectedResolve}
              resolved={resolved}
              setResolved={setResolved}
              removeProgress={removeProgress}
              key={customer.id}
              customer={customer}
            ></TaskStatus>
          ))
        ) : (
          <p className="md:text-sm text-gray-400 text-[11px] mt-1">
            Select a ticket to add to Task Status
          </p>
        )}
      </div>
      <div>
        {/* resolve */}
        <h1 className="text-[15px] md:text-2xl mt-4 md:mt-6 text-gray-700 font-semibold">
          Resolved Task
        </h1>
        {selectedResolve.length > 0 ? (
          selectedResolve.map((customer) => (
            <ResolvedTask
              key={customer.id}
              selectedResolve={selectedResolve}
            ></ResolvedTask>
          ))
        ) : (
          <p className="mt-1 text-gray-400 text-[11px] md:text-sm">
            No resolved tasks yet.
          </p>
        )}
      </div>
    </div>
  );
};
export default StatusCard;

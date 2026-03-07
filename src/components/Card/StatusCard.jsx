import React from "react";

const StatusCard = () => {
  return (
    <div>
      <div>
        <h1 className="text-[15px] md:text-2xl text-gray-700 font-semibold">
          Task Status
        </h1>
        <p className="md:text-sm text-gray-400 text-[11px] mt-1">
          Select a ticket to add to Task Status
        </p>
      </div>
      <div>
        <h1 className="text-[15px] md:text-2xl mt-4 md:mt-6 text-gray-700 font-semibold">
          Resolved Task
        </h1>
        <p className="mt-1 text-gray-400 text-[11px] md:text-sm">
          No resolved tasks yet.
        </p>
      </div>
    </div>
  );
};

export default StatusCard;

import React, { use } from "react";

const AvailableCustomer = ({ customerPromise }) => {
  const customerData = use(customerPromise);
  console.log(customerData);

  return (
    <div className="max-w-4/6  grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
      {customerData.map((customer) => (
        <div
          key={customer.id}
          className="max-w-sm rounded-lg border border-gray-300 bg-white p-4 shadow-lg"
        >
          <div className="flex justify-between items-center">
            <h3 className="mb-2 text-[16px] font-medium">{customer.title}</h3>
            <button className="bg-green-300 cursor-pointer p-1 rounded-lg text-[11px]">
              {customer.status}
            </button>
          </div>

          <p className="mb-4 text-[12px] text-gray-600">
            {customer.description}
          </p>

          <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-xs">
            <div className="flex items-center">
              <span className="text-gray-500"> #{customer.id}</span>
              <span
                className={`rounded px-2 py-0.5 font-medium ${customer.priority === "High" ? "text-red-500" : "text-yellow-500"}`}
              >
                {" "}
                {customer.priority}{" "}
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <span>{customer.name}</span>
              <span>•</span>
              <span>{customer.createdAt}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableCustomer;

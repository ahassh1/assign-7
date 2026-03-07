import React, { use } from "react";
import CustomerCard from "./CustomerCard";

const AvailableCustomer = ({
  customerPromise,
  setProgress,
  progress,
  selectedProgress,
  setSelectedProgress,
  removeProgress,
}) => {
  const customerData = use(customerPromise);
  // console.log(customerData);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
      {customerData.map((customer) => (
        <CustomerCard
          key={customer.id}
          removeProgress={removeProgress}
          selectedProgress={selectedProgress}
          setSelectedProgress={setSelectedProgress}
          setProgress={setProgress}
          progress={progress}
          customer={customer}
        ></CustomerCard>
      ))}
    </div>
  );
};

export default AvailableCustomer;

import React, { Suspense } from "react";
import AvailableCustomer from "./AvailableCustomer";
import StatusCard from "./StatusCard";

const fetchCustomer = async () => {
  const res = await fetch("./customer.json");
  return res.json();
};

const customerPromise = fetchCustomer();
const Customertic = ({
  setProgress,
  progress,
  selectedProgress,
  setSelectedProgress,
  removeProgress,
}) => {
  return (
    <div className="w-11/12 mx-auto flex justify-around gap-2">
      <Suspense
        fallback={
          <span className="loading loading-spinner text-primary"></span>
        }
      >
        <AvailableCustomer
          removeProgress={removeProgress}
          selectedProgress={selectedProgress}
          setSelectedProgress={setSelectedProgress}
          setProgress={setProgress}
          progress={progress}
          customerPromise={customerPromise}
        ></AvailableCustomer>
      </Suspense>
      <div>
        <StatusCard
          removeProgress={removeProgress}
          selectedProgress={selectedProgress}
        ></StatusCard>
      </div>
    </div>
  );
};

export default Customertic;

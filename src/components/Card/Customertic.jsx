import React, { Suspense } from "react";
import AvailableCustomer from "./AvailableCustomer";
import StatusCard from "./StatusCard";

const fetchCustomer = async () => {
  const res = await fetch("./customer.json");
  return res.json();
};

const customerPromise = fetchCustomer();
const Customertic = ({ setProgress, progress }) => {
  return (
    <div className="w-11/12 mx-auto flex justify-around gap-2">
      <Suspense
        fallback={
          <span className="loading loading-spinner text-primary"></span>
        }
      >
        <AvailableCustomer
          setProgress={setProgress}
          progress={progress}
          customerPromise={customerPromise}
        ></AvailableCustomer>
      </Suspense>
      <div>
        <StatusCard></StatusCard>
      </div>
    </div>
  );
};

export default Customertic;

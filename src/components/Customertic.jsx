import React, { Suspense } from "react";
import AvailableCustomer from "./AvailableCustomer";

const fetchCustomer = async () => {
  const res = await fetch("./customer.json");
  return res.json();
};

const Customertic = () => {
  const customerPromise = fetchCustomer();
  return (
    <div className="w-11/12 mx-auto">
      <Suspense
        fallback={
          <span className="loading loading-spinner text-primary"></span>
        }
      >
        <AvailableCustomer
          customerPromise={customerPromise}
        ></AvailableCustomer>
      </Suspense>
    </div>
  );
};

export default Customertic;

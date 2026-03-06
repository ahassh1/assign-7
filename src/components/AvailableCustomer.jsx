import React, { use } from "react";

const AvailableCustomer = ({ customerPromise }) => {
  const customerData = use(customerPromise);
  console.log(customerData);
  return (
    <div>
      <h1>hfasfdfaf</h1>
    </div>
  );
};

export default AvailableCustomer;

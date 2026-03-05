import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="w-11/12 mx-auto p-7 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="mb-10">
            <h1 className="text-xl font-bold text-gray-200 mb-2">
              CS — Ticket
            </h1>
            <p className="text-gray-200 text-sm leading-relaxed">
              basically it's a ticket system process for the general or common
              mango people and there are huge amount of people who purchase
              tickets.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-200 mb-3 pb-2 border-b border-gray-100">
              Company
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-200 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                About Us
              </li>
              <li className="text-gray-200 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                Our Mission
              </li>
              <li className="text-gray-200 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                Contact Sales
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-200 mb-3 pb-2 border-b border-gray-100">
              Services
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-200 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                Products & Services
              </li>
              <li className="text-gray-200 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                Customer Stories
              </li>
              <li className="text-gray-200 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                Download Apps
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-200 mb-3 pb-2 border-b border-gray-100">
              Information
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-200 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                Privacy Policy
              </li>
              <li className="text-gray-200 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                Terms & Conditions
              </li>
              <li className="text-gray-200 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                Join Us
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-200 mb-3 pb-2 border-b border-gray-100">
              Social Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-200 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                @CS — Ticket System
              </li>
              <li className="text-gray-200 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                @CS — Ticket System
              </li>
              <li className="text-gray-200 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                @cs — Ticket System
              </li>
              <li className="text-gray-200 cursor-pointer hover:text-blue-600 transition-colors duration-300">
                support@cst.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-3 border-t border-gray-500">
          <h2 className="font-medium text-xs text-gray-200 md:text-center">
            © 2025 CS — Ticket System. All rights reserved.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;

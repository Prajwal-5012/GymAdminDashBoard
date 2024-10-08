import React from "react";
import { FaPlus, FaDownload } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import List from "../Layout/Components/List";
import { useNavigate } from "react-router";
const Customers = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-fadewhite h-screen ml-1 p-10">
      <div className="max-h-screen bg-gray-100 p-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">All Customers</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-blue text-black px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-600" onClick={()=>navigate("/addcustomer")}>
              <FaPlus className="w-5 h-5" />
              <span>Add New Customer</span>
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600">
              <FaDownload className="w-5 h-5" />
              <span>Export</span>
            </button>
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-300">
                  <span>Filter By Date</span>
                  <ChevronDownIcon className="w-5 h-5" />
                </Menu.Button>
              </div>
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="p-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } group flex rounded-md items-center w-full p-2 text-sm`}
                      >
                        Last 7 Days
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } group flex rounded-md items-center w-full p-2 text-sm`}
                      >
                        Last 30 Days
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } group flex rounded-md items-center w-full p-2 text-sm`}
                      >
                        All Time
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </div>

       <List/>
      </div>
    </div>
  );
};

export default Customers;

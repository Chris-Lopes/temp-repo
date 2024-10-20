import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

const pendingOrders = [
  { id: 11231, quantity: "500 tons", coalGrade: "Grade A", initiatedDate: "2023-11-01", deliveredDate: "-", loadingTime: "-", demurrageCost: "-" },
  { id: 11232, quantity: "200 tons", coalGrade: "Grade B", initiatedDate: "2023-11-03", deliveredDate: "-", loadingTime: "-", demurrageCost: "-" },
];

const activeOrders = [
  { id: 11233, quantity: "350 tons", coalGrade: "Grade C", initiatedDate: "2023-11-04", deliveredDate: "-", loadingTime: "5", demurrageCost: "Rs 10,000" },
];

const completedOrders = [
  { id: 11234, quantity: "400 tons", coalGrade: "Grade D", initiatedDate: "2023-10-01", deliveredDate: "2023-10-10", loadingTime: "6", demurrageCost: "Rs 20,000" },
  { id: 11235, quantity: "250 tons", coalGrade: "Grade E", initiatedDate: "2023-09-15", deliveredDate: "2023-09-20", loadingTime: "4", demurrageCost: "Rs 15,000" },
];

export default function OrderHistory() {
  const [selectedTab, setSelectedTab] = useState("Pending");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const renderTable = (orders) => (
    <Table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <TableHeader>
        <TableRow>
          <TableHead>Request ID</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Coal Grade</TableHead>
          <TableHead>Order Initiated Date</TableHead>
          <TableHead>Order Delivered Date</TableHead>
          <TableHead>Loading Time (hours)</TableHead>
          <TableHead>Demurrage Cost</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.quantity}</TableCell>
            <TableCell>{order.coalGrade}</TableCell>
            <TableCell>{order.initiatedDate}</TableCell>
            <TableCell>{order.deliveredDate}</TableCell>
            <TableCell>{order.loadingTime}</TableCell>
            <TableCell>{order.demurrageCost}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <div className="container mx-auto p-4">
      
      {/* Tabs for Pending, Active, Completed Orders */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => handleTabChange("Pending")}
          className={`px-4 py-2 font-semibold ${selectedTab === "Pending" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Pending Orders
        </button>
        <button
          onClick={() => handleTabChange("Active")}
          className={`px-4 py-2 font-semibold ${selectedTab === "Active" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Active Orders
        </button>
        <button
          onClick={() => handleTabChange("Completed")}
          className={`px-4 py-2 font-semibold ${selectedTab === "Completed" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Completed Orders
        </button>
      </div>

      {/* Conditionally Render Tables */}
      {selectedTab === "Pending" && renderTable(pendingOrders)}
      {selectedTab === "Active" && renderTable(activeOrders)}
      {selectedTab === "Completed" && renderTable(completedOrders)}
    </div>
  );
}

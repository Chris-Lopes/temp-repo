import React from 'react'
import { Bell, ChevronRight, User } from "lucide-react";

const DashboardCode = () => {
  return (
    <>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
      {[
        {
          title: "TOTAL PENDING ORDERS",
          value: 2,
          color: "bg-yellow-100 border-yellow-300",
        },
        {
          title: "TOTAL ACTIVE ORDERS",
          value: 3,
          color: "bg-green-100 border-green-300",
        },
        {
          title: "TOTAL COMPLETED ORDERS",
          value: 27,
          color: "bg-pink-100 border-pink-300",
        },
      ].map((item) => (
        <div key={item.title} className={`p-4 rounded-lg border ${item.color}`}>
          <h2 className="text-sm font-medium text-gray-600">{item.title}</h2>
          <p className="mt-2 text-3xl font-semibold">{item.value}</p>
        </div>
      ))}
    </div>

    <div className="bg-white shadow rounded-lg p-4 mt-8">
      <h2 className="text-lg font-medium mb-4">NOTIFICATIONS</h2>
      <div className="space-y-4">
        {[
          {
            date: "2023-11-05 09:15 AM",
            message: "New request for 500 tons of Grade A coal submitted",
          },
          {
            date: "2023-11-08 02:30 PM",
            message: "Request ID 11231 has been scheduled for transport.",
          },
          {
            date: "2023-11-11 11:45 AM",
            message:
              "Demurrage charges of Rs 34,000 applied for Request ID - 11017 due to extended unloading time.",
          },
        ].map((notification, index) => (
          <div key={index} className="bg-blue-50 p-3 rounded-md">
            <p className="text-sm text-gray-600">{notification.date}</p>
            <p className="mt-1">{notification.message}</p>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="mt-4 text-blue-600 hover:text-blue-800 flex items-center justify-end"
      >
        View All
        <ChevronRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  </>
  )
}

export default DashboardCode
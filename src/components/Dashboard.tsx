"use client";

import { useState } from "react";
import { User } from "lucide-react";
import Orderhistory from "./OrderHistory";
import NewOrderForm from "./NewOrder";
import DashboardCode from "./DashboardCode";


// Example components for each section
const DashboardContent = () => <DashboardCode />;
const OrderHistory = () => <Orderhistory />;
const NewOrder = () => <NewOrderForm />;
const DemurrageCosts = () => <div>This is the Demurrage Costs content</div>;

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("Dashboard");

  // Map sidebar items to their respective components
  const sectionComponents = {
    Dashboard: <DashboardContent />,
    "Order History": <OrderHistory />,
    "New Order": <NewOrder />,
    "Demurrage Costs": <DemurrageCosts />,
  };

  return (
    <div className="flex h-screen bg-gray-100">

         {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 text-xl font-bold">[Company Name]</div>
        <nav className="mt-4">
          {["Dashboard", "Order History", "New Order", "Demurrage Costs"].map(
            (item) => (
              <a
                key={item}
                href="#"
                onClick={() => setActiveSection(item)} // Change the active section on click
                className={`block py-2 px-4 ${
                  activeSection === item
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item}
              </a>
            )
          )}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            {/* Dynamically update header with active section */}
            <h1 className="text-2xl font-bold text-blue-600">{activeSection}</h1>
            {/* <User className="w-8 h-8 text-blue-400" /> */}
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Render the active section's component */}
          {sectionComponents[activeSection]}
        </main>
      </div>
    </div>
  );
}

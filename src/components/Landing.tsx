"use client";
import React from "react";
import { Train, Pickaxe, Users, LogIn, Info } from "lucide-react";
import { Bell, User } from "lucide-react";
import { useRouter } from "next/navigation";


const LoginRoleSelector = () => {
  const roles = [
    {
      title: "SIDING OPERATOR",
      icon: <Train size={48} />,
      path: "/login-sliding",
    },
    {
      title: "MINE MANAGER",
      icon: <Pickaxe size={48} />,
      path: "/login-mining",
    },
    {
      title: "COMPANY",
      icon: <Users size={48} />,
      path: "/login-company",
    },
  ];

  return (
    <>
      <nav className="bg-white border-b border-gray-600 h-fit p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Side (Logo or Placeholder) */}
          <div className="text-black font-bold text-lg">
            {/* You can place a logo here */}
            Company Logo
          </div>

          {/* Right Side - Notification, Profile, Logout */}
          <div className="flex items-center space-x-6 text-black">
            {/* About */}
            <div className="flex items-center space-x-2 cursor-pointer">
              <Info className="w-5 h-5" />
              <span>About</span>
            </div>

            {/* Logout */}
            <div className="flex items-center space-x-2 cursor-pointer">
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col justify-center h-[90vh] items-center max-w-screen-xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8">LOGIN AS</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {roles.map((role) => (
            <div
              key={role.title}
              onClick={()=> {window.location.href = role.path}} 
              className="bg-[#40E0D0]  p-8 rounded-lg flex flex-col items-center cursor-pointer transition duration-200 ease-in-out hover:bg-turquoise-500 min-h-[250px] justify-center"
            >
              <div className="bg-white p-4 rounded-lg mb-4">{role.icon}</div>
              <h2 className="text-black font-semibold text-center mt-2">
                {role.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LoginRoleSelector;

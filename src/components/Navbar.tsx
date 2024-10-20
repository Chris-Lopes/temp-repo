import { Bell, User, LogOut } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 h-fit p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side (Logo or Placeholder) */}
        <div className="text-white font-bold text-lg">
          {/* You can place a logo here */}
          Company Logo
        </div>

        {/* Right Side - Notification, Profile, Logout */}
        <div className="flex items-center space-x-6 text-white">
          {/* Notification */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <Bell className="w-5 h-5" />
            <span>Notification</span>
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <User className="w-5 h-5" />
            <span>Profile</span>
          </div>

          {/* Logout */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

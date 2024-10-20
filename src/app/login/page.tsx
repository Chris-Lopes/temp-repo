import { LoginForm } from "@/components/login-form";
import Image from "next/image";
import React from "react";

const page = () => {
    const backgroundStyle: React.CSSProperties = {
        backgroundImage: `
          linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 1)),
          url('/train.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.15)",
      };

  return (
    <div className="flex justify-center items-center h-screen w-full">
        <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={backgroundStyle}
        ></div>
      <LoginForm />
    </div>
  );
};

export default page;

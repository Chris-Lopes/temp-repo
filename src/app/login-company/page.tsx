import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function page() {
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
      <Card className="mx-auto max-w-sm ">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Link href={"/home-company"}>
              <Button type="submit" className="w-full">
                Login      {/* Login */}
              </Button>
            </Link>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

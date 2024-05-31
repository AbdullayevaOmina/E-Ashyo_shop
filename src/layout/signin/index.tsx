"use client";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { DarkModeButton } from "@dark-mode";

export default function Signin() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Card className=" w-96">
        <h1 className="text-center text-[#0e7490] my-3 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Sign in
        </h1>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex justify-between">
            <small>You have not registered yet?</small>
            <Link to="/signup" className="text-[13px] text-sky-500">
              Sing Up
            </Link>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
      <DarkModeButton />
    </div>
  );
}

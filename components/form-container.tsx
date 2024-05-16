"use client"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema } from "@/schemas/login-schema";

interface FormContainerProps {
  type: "sign-in" | "sign-up";
  children: React.ReactNode;
}

const FormContainer = ({ type, children }: FormContainerProps) => {
  const [user, setUser] = useState(null);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    console.log('clicked')
    form.reset();
  }
  return (
    <div className="auth-form">
      <header className="flex flex-col gap-3 md:gap-5">
        <Link href="/" className="cursor-pointer  gap-1 flex items-center">
          <Image src={"/icons/logo.svg"} width={34} height={34} alt="logo" />
          <h1 className="font-bold text-3xl p-0">Bankify</h1>
        </Link>
        {
          <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-24 log:text-36 font-semibold text-gray-900">
              {user
                ? "Link Account"
                : type === "sign-in"
                ? "Sign In"
                : "Sing Up"}
              <p className="text-16 font-normal text-gray-600">
                {user
                  ? "Link your accout to get started"
                  : "Please enter you details"}
              </p>
            </h1>
          </div>
        }
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* plaid link */} Hello</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              {children}
              <button
                type="submit"
                className="bg-emerald-500 w-full p-2 rounded text-white"
              >
                Login
              </button>
              <div className="text-center text-sm">
                <p className="text-muted-foreground">
                  Don't you have account{" "}
                  <Link
                    href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                    className="font-semibold text-blue-500 cursor-pointer hover:underline"
                  >
                    {type === "sign-in" ? "Register" : "Login"}
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </>
      )}
    </div>
  );
};

export default FormContainer;

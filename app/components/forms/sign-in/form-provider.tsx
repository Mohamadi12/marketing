"use client";

import { AuthContextProvider } from "@/app/context/use-auth-context";
import { useSignInForm } from "@/app/hooks/sign-in/use-sign-in";
import React from "react";
import { FormProvider } from "react-hook-form";
import { Loader } from "../../loader";

type Props = {
  children: React.ReactNode;
};

const SignInformProvider = ({ children }: Props) => {
  const { methods, onHandleSubmit, loading } = useSignInForm();
  return (
    <AuthContextProvider>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit} className="h-full">
          <div className="flex flex-col justify-between gap-3 h-full">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  );
};

export default SignInformProvider;

'use client'

import { AuthContextProvider } from "@/app/context/use-auth-context";
import { useSignUpForm } from "@/app/hooks/sign-up/use-sign-up";
import React from "react";
import { FormProvider } from "react-hook-form";
import { Loader } from "../../loader";

type Props = {
  children: React.ReactNode;
};

const SignUpFormProvider = ({ children }: Props) => {
  const { methods, onHandleSubmit, onGenerateOTP, loading } = useSignUpForm();
  return (
    <div>
      <AuthContextProvider>
        <FormProvider {...methods}>
          <form onSubmit={onHandleSubmit} className="h-full">
            <div className="flex flex-col justify-between gap-3 h-full">
              <Loader loading={loading}>{children}</Loader>
            </div>
          </form>
        </FormProvider>
      </AuthContextProvider>
    </div>
  );
};

export default SignUpFormProvider;

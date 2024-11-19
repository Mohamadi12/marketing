import React from "react";
import { onLoginUser } from "../actions/auth";
import { ChatProvider } from "../context/user-chat-context";
import Sidebar from "../components/sidebar";

type Props = {
  children: React.ReactNode;
};

const OwnerLayout = async ({ children }: Props) => {
  const authenticated = await onLoginUser();
  if (!authenticated) return null;
  return (
    <ChatProvider>
      <div className="flex h-screen w-full">
        <Sidebar domains={authenticated.domain} />
        <div className="w-full h-screen flex flex-col pl-20 md:pl-4 overflow-y-auto">
          {children}
        </div>
      </div>
    </ChatProvider>
  );
};

export default OwnerLayout;

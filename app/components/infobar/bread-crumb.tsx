"use client";

import useSideBar from "@/app/context/use-sidebar";
import React from "react";
import { Loader } from "../loader";
import { Switch } from "@/components/ui/switch";

type Props = {};

const BreadCrumb = (props: Props) => {
  //WIP: Set up use side bar hook for real time and chat bot stuff
  //WIP: setup the description and the switch
  const {
    chatRoom,
    expand,
    loading,
    onActivateRealtime,
    onExpand,
    page,
    onSignOut,
    realtime,
  } = useSideBar();
  return (
    <div className="flex flex-col">
      <div className="flex gap-5 items-center">
        <h2 className="text-3xl font-bold capitalize">{page}</h2>
        {page === "conversation" && chatRoom && (
          <Loader loading={loading} className="p-0 inline">
            <Switch
              defaultChecked={realtime}
              onClick={(e) => onActivateRealtime(e)}
              className="data-[state=checked]:bg-orange data-[state=unchecked]:bg-peach"
            />
          </Loader>
        )}
      </div>
      <p className="text-gray-500 text-sm">
        {page == 'settings'
          ? 'Manage your account settings, preferences and integrations'
          : page == 'dashboard'
          ? 'A detailed overview of your metrics, usage, customers and more'
          : page == 'appointment'
          ? 'View and edit all your appointments'
          : page == 'email-marketing'
          ? 'Send bulk emails to your customers'
          : page == 'integration'
          ? 'Connect third-party applications into Corinna-AI'
          : 'Modify domain settings, change chatbot options, enter sales questions and train your bot to do what you want it to.'}
      </p>
    </div>
  );
};

export default BreadCrumb;
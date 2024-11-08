import React from "react";
import NavBar from "./components/navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main>
      <NavBar />
      <section>
        <div className="flex items-center justify-center flex-col gap-4 mt-[80px]">
          <span className="text-orange bg-orange/20 px-4 py-2 rounded-full text-sm">
            An AI powered sales assistant chatbot
          </span>
          <Image
            src="/images/corinna-ai-logo.png"
            width={500}
            height={100}
            alt="Logo"
            className="max-w-lg object-contain"
          />
          <p className="text-center max-w-[500px]">
            You AI powered sales assistant! Embed Corinna AI into any website
            with just a snippet of code!
          </p>
          <Button className="bg-orange font-bold text-white px-4">
            Start For Free
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;

import React from "react";
import ServiceCard from "@/components/atoms/service_card";
import { useGlobalContext } from "@/contexts/globalContext";

export default function Services() {
  const { profile } = useGlobalContext();
  return (
    <div className="py-5 px-5 md:px-10 lg:px-20 min-h-screen">
      <h1 className="text-center text-3xl font-semibold">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8 md:py-12 lg:py-16">
        {profile?.user.services?.map((service: any, index: number) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

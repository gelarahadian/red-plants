"use client";
import PlantItem from "@/components/PlantItem";
import React, { useEffect } from "react";
import AOS from "aos";

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className="max-w-6xl mx-auto px-4 mt-4">
      <PlantItem />
    </main>
  );
};

export default page;

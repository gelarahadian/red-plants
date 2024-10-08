"use client";
import Blog from "@/components/Blog";
import Category from "@/components/Category";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className="max-w-6xl mx-auto px-4">
      <Hero />
      <Category />
      <Feature />
      <Blog />
    </main>
  );
}

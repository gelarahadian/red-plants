import Blog from "@/components/Blog";
import Category from "@/components/Category";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <Hero />
      <Category />
      <Feature />
      <Blog />
      <Subscribe />
    </main>
  );
}

import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Mirrorless from "@/components/Mirrorless";
import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";
import WooCommerceProducts from "@/components/WooCommerceProducts";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Categories />
      <Posts />
      <Mirrorless />
      <WooCommerceProducts />
    </div>
  );
}

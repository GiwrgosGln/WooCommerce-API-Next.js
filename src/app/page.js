import Hero from "@/components/Hero";
import Mirrorless from "@/components/Mirrorless";
import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";
import WooCommerceProducts from "@/components/WooCommerceProducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Posts />
      <Mirrorless />
      <WooCommerceProducts />
    </>
  );
}

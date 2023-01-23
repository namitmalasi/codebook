import { FeaturedProducts } from "./components/FeaturedPoducts";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { useTitle } from "../../hooks/useTitle";

export const Home = () => {
  useTitle("Access Latest Computer Science eBooks");
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};

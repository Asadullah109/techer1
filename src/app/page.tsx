import Navbar from "@/component/navbar";
import Hero from "@/component/hero";
import Footer from "@/component/footer";
import Portfolio from "@/component/portfolio";  // Import the Portfolio component

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Portfolio />  {/* Add Portfolio section here */}
      <Footer />
    </div>
  );
}


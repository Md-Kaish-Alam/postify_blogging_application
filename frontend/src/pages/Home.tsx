// import { Loading } from "../components/Loading"

import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar"

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home

import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Discover from "./components/Discover";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Discover />
    </div>
  );
}

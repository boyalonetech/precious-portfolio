import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Card from "../components/Card";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Discover />
      <Card />
      <Contact />
    </div>
  );
}

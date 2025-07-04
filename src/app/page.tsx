import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Card from "../components/Card";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Discover />
      <Card />
    </div>
  );
}

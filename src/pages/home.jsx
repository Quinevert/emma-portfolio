import React from "react";
import Root from "../routes/root";
// import { Button, Divider } from "antd";
import Hero from "../components/hero.component";

function Home() {
  return (
    <div className="flex flex-col">
      <Root />
      <Hero />
      <HeroSection />
    </div>
  )
}

export default Home;
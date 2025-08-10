import React from "react";
import Header from "@/components/HomeComponent/Header";
import FirstSection from "@/components/HomeComponent/FirstSection";
import InfoSection from "@/components/HomeComponent/InfoSection";

const Home = () => {
  return (
    <div className="font-general">
      <Header />
      <main>
        <FirstSection />
        <InfoSection />
      </main>
    </div>
  );
};

export default Home;

import React, { useState, useRef } from "react";
import Header from "@/components/HomeComponent/Header";
import FirstSection from "@/components/HomeComponent/FirstSection";
import InfoSection from "@/components/HomeComponent/InfoSection";
import PortoSection from "@/components/HomeComponent/PortoSection";
import Footer from "@/components/HomeComponent/Footer";

const Home = () => {
  const [showBreadcrumb, setShowBreadcrumb] = useState(false);
  const infoRef = useRef(null);

  const handleGoToInfo = () => {
    setShowBreadcrumb(true); // cuma muncul kalau klik navbar
    infoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-general-sans">
      <Header onInfoClick={handleGoToInfo} />
      <main>
        <FirstSection id="firstsection" />
        <InfoSection ref={infoRef} showBreadcrumb={showBreadcrumb} id="info" />  
        <PortoSection />  
        <Footer />  
      </main>
    </div>
  );
};

export default Home;

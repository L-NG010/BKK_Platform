import { useState, useRef } from "react";
import Header from "@/components/HomeComponent/Header";
import FirstSection from "@/components/HomeComponent/FirstSection";
import InfoSection from "@/components/HomeComponent/InfoSection";
import PortoSection from "@/components/HomeComponent/PortoSection";
import Footer from "@/components/HomeComponent/Footer";
import AppLayout from "../Layout/AppLayout";

const Home = () => {
  const [showBreadcrumb, setShowBreadcrumb] = useState(false);
  const [showBreadcrumbPorto, setShowBreadcrumbPorto] = useState(false);

  const infoRef = useRef(null);

  const handleGoToInfo = () => {
    setShowBreadcrumb(true); // cuma muncul kalau klik navbar
    infoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleGoToPorto = () => {
    setShowBreadcrumbPorto(true);
    const heroEl = document.getElementById("hero");
  if (heroEl) {
    heroEl.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <div className="font-general-sans">
      <Header onInfoClick={handleGoToInfo} onPortoClick={handleGoToPorto} />
      <main>
        <FirstSection id="firstsection" />
        <InfoSection ref={infoRef} showBreadcrumb={showBreadcrumb} id="info" />
        <PortoSection showBreadcrumb={showBreadcrumbPorto} id="porto" />
        <Footer />
      </main>
    </div>
  );
};

Home.layout = (page) => <AppLayout title={'Home'}>{page}</AppLayout>;

export default Home;

import React from "react";
import Header from "../src/components/Header";
import HeroSection from "../src/components/HeroSection";
import AboutSection from "../src/components/AboutSection";
import ServicesSection from "../src/components/ServiceSection";
import TeamSection from "../src/components/TeamSection";
import ContactSection from "../src/components/ContactSection";
import "./App.css"; // Importa estilos globales
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa estilos AOS

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <main id="main">
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;

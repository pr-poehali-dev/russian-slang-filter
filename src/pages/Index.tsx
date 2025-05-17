import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Introduction from "../components/sections/Introduction";
import JargonInfo from "../components/sections/JargonInfo";
import JargonExamples from "../components/sections/JargonExamples";
import LanguageImpact from "../components/sections/LanguageImpact";
import Recommendations from "../components/sections/Recommendations";
import Conclusion from "../components/sections/Conclusion";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Introduction />
        <JargonInfo />
        <JargonExamples />
        <LanguageImpact />
        <Recommendations />
        <Conclusion />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

import React from "react";

import Navbar from "./components/Navbar";
import Panel from "./components/Panel";
import HeroSection from "./components/HeroSection";
import ShopSection from "./components/shopSection";
import DealsSection from "./components/DealSection";
import SignIn from "./components/SigInSection";
import Footer from "./components/Footer";

import "./App.css";

// Importing images directly
import h1 from "./components/assets/h1.jpg";
import h2 from "./components/assets/h2.jpg";
import h3 from "./components/assets/h3.jpg";
import h4 from "./components/assets/h4.jpg";

import ph1 from "./components/assets/ph1.jpg";
import ph2 from "./components/assets/ph2.jpg";
import ph3 from "./components/assets/ph3.jpg";
import ph4 from "./components/assets/ph4.jpg";

const App = () => {
  const deals1 = [{ image: h1 }, { image: h2 }, { image: h3 }, { image: h4 }];

  const deals2 = [
    { image: ph1 },
    { image: ph2 },
    { image: ph3 },
    { image: ph4 },
  ];

  return (
    <div>
      <Navbar />
      <Panel />
      <HeroSection />
      <ShopSection />
      <DealsSection
        dealsTitle="Upto 70% Off | Redecorate Your Home"
        deals={deals1}
      />
      <DealsSection
        dealsTitle="Today's Deals T-Shirt's | Upto 60% Off"
        deals={deals2}
      />
      <SignIn />
      <Footer />
    </div>
  );
};

export default App;

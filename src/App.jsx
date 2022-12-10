import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Category from "./compnents/Category";
import Food from "./compnents/Food";
import HeadlineCards from "./compnents/HeadlineCards";
import Hero from "./compnents/Hero";
import Navbar from "./compnents/Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;

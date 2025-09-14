import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Catalog from "./components/Catalog";
import Contact from "./components/Contact";
import Office from "./components/Office";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Catalog />
        <Contact />
        <Office />
      </main>
    </>
  );
}

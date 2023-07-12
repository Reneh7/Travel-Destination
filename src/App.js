import React from "react";
import Home from "./components/home/Home";
import data from "./data/db.json";
import Tours from './components/tours/Tours';
import TourDetails from "./components/TourDetails/TourDetails";
import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home tour={data} />} />
      <Route path="/tours" element={<Tours data={data} />} />
      <Route path="/tours/:id" element={<TourDetails />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;




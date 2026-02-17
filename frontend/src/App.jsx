import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChooseOccasion from "./components/ChooseOccasion";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/occasion" element={<ChooseOccasion />} />
      </Routes>
    </>
  );
}

export default App;

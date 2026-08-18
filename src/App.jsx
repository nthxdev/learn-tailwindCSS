import { useState } from "react";
import Basics from "./components/Basics";
import PseudoClass from "./components/PseudoClass";
import PseudoElem from "./components/PseudoElem";
import ResponsiveGuide from "./components/ResponsiveGuide";
import Responsive from "./components/Responsive";

function App() {
  return (
    <>
      <Basics />
      <PseudoClass />
      <PseudoElem />
      <ResponsiveGuide />
      <Responsive />
    </>
  );
}
export default App;

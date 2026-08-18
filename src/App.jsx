import { useState } from "react";

// 1. Foundations
import Preflight from "./components/Preflight";
import Basics from "./components/Basics";
import ThemeVariable from "./components/ThemeVariable";
import CustomStyles from "./components/CustomStyles";
import FunctionsDirectives from "./components/FunctionsDirectives";

// 2. Layout
import Layout from "./components/Layout";
import FlexboxGrid from "./components/FlexboxGrid";
import Spacing from "./components/Spacing";
import Sizing from "./components/Sizing";

// 3. Styling basics
import Typography from "./components/Typography";
import Backgrounds from "./components/Backgrounds";
import Borders from "./components/Borders";
import Tables from "./components/Tables";

// 4. Visual effects
import Effects from "./components/Effects";
import Filters from "./components/Filters";
import Transforms from "./components/Transforms";
import Transitions from "./components/Transitions";

// 5. Interaction & state-based styling
import Interactivity from "./components/Interactivity";
import PseudoClass from "./components/PseudoClass";
import PseudoElem from "./components/PseudoElem";
import DetectingClasses from "./components/DetectingClasses";

// 6. Responsive design
import ResponsiveGuide from "./components/ResponsiveGuide";
import Responsive from "./components/Responsive";

// 7. Advanced & misc
import Advanced from "./components/Advanced";
import Notes from "./components/Notes";

function App() {
  return (
    <>
      {/* 1. Foundations */}
      <Preflight />
      <Basics />
      <ThemeVariable />
      <CustomStyles />
      <FunctionsDirectives />

      {/* 2. Layout */}
      <Layout />
      <FlexboxGrid />
      <Spacing />
      <Sizing />

      {/* 3. Styling basics */}
      <Typography />
      <Backgrounds />
      <Borders />
      <Tables />

      {/* 4. Visual effects */}
      <Effects />
      <Filters />
      <Transforms />
      <Transitions />

      {/* 5. Interaction & state-based styling */}
      <Interactivity />
      <PseudoClass />
      <PseudoElem />
      <DetectingClasses />

      {/* 6. Responsive design */}
      <ResponsiveGuide />
      <Responsive />

      {/* 7. Advanced & misc */}
      <Advanced />
      <Notes />
    </>
  );
}

export default App;
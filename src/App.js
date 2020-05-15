import React, { useState } from 'react';
import Header from "./Header.js";
import WelcomeContent from "./WelcomeContent.js"
import './App.css';
import COLORS from "./colors.js";

const LABEL_INDICES = {
  "Home": 0,
  "Experience": 1,
  "Projects": 2,
  "Courses/Skills": 3,
  "Resume": 4,
  "Contact": 5
}

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  function iconSelected(label) {
    setTabIndex(LABEL_INDICES[label]);
    console.log("test", label);
  }
  return <div id="app" style={{ backgroundColor: COLORS.BEIGE }}> {Header({ iconSelected })}{WelcomeContent()}</div >;
}

export default App;

import React, { useState } from 'react';
import Header from "./Header.js";
import './styles/App.css';
import COLORS from "./styles/colors.js";

import Welcome from "./content/Welcome.js"
import Experience from "./content/Experience.js"
import Projects from "./content/Projects.js"
import Skills from "./content/Skills.js"
import Resume from "./content/Resume.js"
import Contact from "./content/Contact.js"

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
  }

  function Content() {
    switch (tabIndex) {
      case LABEL_INDICES["Home"]:
        return Welcome();
      case LABEL_INDICES["Experience"]:
        return Experience();
      case LABEL_INDICES["Projects"]:
        return Projects();
      case LABEL_INDICES["Courses/Skills"]:
        return Skills();
      case LABEL_INDICES["Resume"]:
        return Resume();
      case LABEL_INDICES["Contact"]:
        return Contact();
      default:
        console.log("Something went wrong... Looking for a page that doesn't exist.");
        break;
    }
  }

  return <div id="app" style={{ backgroundColor: COLORS.BEIGE }}> {Header({ iconSelected })}{Content()}</div >;
}

export default App;

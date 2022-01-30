import { useState } from "react";
import "./App.css";

import { Hero, About, Education, Experience, More } from "./components/index";
import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities } = CV;

function App() {
  const [state, setState] = useState({ state: false });
  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero.aboutMe} />
      <div className="btns">
        <button className="btn" onClick={() => setState(!state)}>
          {state === true ? "Experience" : "Education"}
        </button>
      </div>

      {state === true ? (
        <Education education={education} />
      ) : (
        <Experience experience={experience} />
      )}

      <More languages={languages} habilities={habilities} />
    </div>
  );
}

export default App;


import './App.css';

import Promo from "../Promo/Promo";
import About from "../About/About";
import Progress from "../Progress/Progress";
import Team from "../Team/Team";
import Course from "../Course/Course";
import Sponsors from "../Sponsors/Sponsors";

function App() {
  
  return (
<div className="App">
  <Promo />
  <About />
  <Progress />
  <Team />
  <Course />
  <Sponsors />
</div>
  );
}

export default App;

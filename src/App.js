import "./App.css";
import { useState } from "react";
function App() {
  let [logo, setLogo] = useState("React Start");
  let [title, setTitle] = useState(["frist", "second", "third"]);
  let [date, setDate] = useState(new Date().toLocaleString());
  return (
    <div className="App">
      <div>
        <h4 className="black-nav">{logo}</h4>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
        <p>{date}</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>{date}</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default App;

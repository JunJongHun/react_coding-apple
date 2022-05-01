import "./App.css";
import { useState } from "react";
function App() {
  let [logo, setLogo] = useState("React Start");
  let [title, setTitle] = useState(["frist", "second", "third"]);
  let [date, setDate] = useState(new Date().toLocaleString());
  let [like, setLike] = useState(0);
  let [name, nameTitle] = useState("여자코트추천");

  return (
    <div className="App">
      <div>
        <h4 className="black-nav">{logo}</h4>
      </div>
      <div className="list">
        <h4>
          {title[0]}
          <span onClick={() => setLike((prev) => prev + 1)}> 👍</span>
          {like}
        </h4>

        <p>{date}</p>
        <button
          onClick={() => {
            setTitle((prev) => {
              let copy = [...prev];
              copy[0] = name;
              return copy;
            });
          }}
        >
          제목수정
        </button>
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

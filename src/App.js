import "./App.css";
import { useState } from "react";
function App() {
  let [logo, setLogo] = useState("React Start");
  let [title, setTitle] = useState(["frist", "second", "aaa"]);
  let [date, setDate] = useState(new Date().toLocaleString());
  let [like, setLike] = useState(0);
  let [name, nameTitle] = useState("여자코트추천");
  let [modal, setModal] = useState(false);

  const titleSort = (prev) => {
    let copy = [...prev];
    setTitle(copy.sort());
  };

  return (
    <div className="App">
      <div>
        <div
          onClick={() => {
            title[0] = "data";
            console.log(title);
            setTitle(title);
          }}
        >
          {title[0]}
        </div>
        <h4 className="black-nav">{logo}</h4>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal((prev) => {
              return !prev;
            });
          }}
        >
          {title[0]}
        </h4>
        <span onClick={() => setLike((prev) => prev + 1)}> 👍</span>
        {like}

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
      <button onClick={titleSort}>제목 순서 재배치</button>

      {modal ? <Modal></Modal> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>title</h4>
      <p>day</p>
      <p>description</p>
    </div>
  );
}

export default App;

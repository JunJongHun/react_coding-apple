import "./App.css";
import { useState } from "react";
function App() {
  let [logo, setLogo] = useState("React Start");
  let [title, setTitle] = useState(["frist", "second", "aaa"]);
  let [date, setDate] = useState(new Date().toLocaleString());
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [t, setT] = useState(0);
  let [inputValue, setInputValue] = useState("");

  const showModal = () => {
    setModal(!modal);
  };

  const countUpLike = (index) => {
    setLike((prev) => {
      let copy = [...like];
      copy[index] += 1;
      return copy;
    });
  };

  const sortTitle = () => {
    let copy = [...title];
    copy.sort();
    setTitle(copy);
  };

  return (
    <div className="App">
      <div>
        <h4 className="black-nav">{logo}</h4>
      </div>

      {title.map((value, index) => {
        return (
          <div className="list" key={index.toString()}>
            <h4
              onClick={() => {
                setT(index);
                showModal();
              }}
            >
              {value}
            </h4>

            <span
              onClick={() => {
                countUpLike(index);
              }}
            >
              👍
            </span>
            {like[index]}

            <p>{date}</p>
            <button
              onClick={() => {
                setTitle((prev) => {
                  let copy = [...title];
                  copy.splice(index, 1);
                  return copy;
                });
              }}
            >
              delete
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(inputValue);
        }}
      ></input>
      <button
        onClick={() => {
          setTitle((prev) => {
            let copy = [...title];
            copy.unshift(inputValue);
            return copy;
          });
        }}
      >
        추가
      </button>

      {modal ? <Modal title={title} t={t}></Modal> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.t]}</h4>

      <p>day</p>
      <p>description</p>
    </div>
  );
}

export default App;

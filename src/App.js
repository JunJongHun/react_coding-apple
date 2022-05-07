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
                let copy = [...title];
                copy.splice(index, 1);
                setTitle(copy);
                let copy2 = [...like];
                copy2.splice(index, 1);
                setLike(copy2);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
      <from>
        <input
          required
          onChange={(e) => {
            setInputValue(e.target.value);
            console.log(inputValue);
          }}
        ></input>
        <input
          type="submit"
          onClick={() => {
            let copy = [...title];
            let copy2 = [...like];
            copy.unshift(inputValue);
            copy2.unshift(0);
            setLike(copy2);
            setTitle(copy);
          }}
        ></input>
      </from>

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

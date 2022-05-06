import "./App.css";
import { useState } from "react";
function App() {
  let [logo, setLogo] = useState("React Start");
  let [title, setTitle] = useState(["frist", "second", "aaa"]);
  let [date, setDate] = useState(new Date().toLocaleString());
  let [like, setLike] = useState([0, 0, 0]);
  let [name, nameTitle] = useState("여자코트추천");
  let [modal, setModal] = useState(false);
  let [t, setT] = useState(0);

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

  const changeTitle = () => {
    let copy = [...title];
    copy[0] = name;
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
          </div>
        );
      })}

      <button onClick={sortTitle}>제목 순서 재배치</button>

      {modal ? (
        <Modal title={title} t={t} changeTitle={changeTitle}></Modal>
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.t]}</h4>
      <p>day</p>
      <p>description</p>
      <button onClick={props.changeTitle}>제목 수정</button>
    </div>
  );
}

export default App;

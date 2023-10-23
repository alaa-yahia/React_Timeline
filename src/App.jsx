import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";
import Modal_2019 from "./components/Modal_2019";
import Modal_2020 from "./components/Modal_2020";

function App() {
  const modals = [<Modal_2019 />, <Modal_2020 />];
  const [isModalShown, setIsModalShown] = useState(false);
  const [currentModal, setCurrentModal] = useState({});
  return (
    <>
      <ul>
        <li
          onClick={() => {
            setIsModalShown(true);
            setCurrentModal(0);
          }}
        >
          2019
        </li>
        <li
          onClick={() => {
            setIsModalShown(true);
            setCurrentModal(1);
          }}
        >
          2020
        </li>
        <li>2023</li>
      </ul>

      <Modal
        isModalShown={isModalShown}
        onRequestClose={() => setIsModalShown(!isModalShown)}
      >
        {modals[currentModal]}
      </Modal>
    </>
  );
}
("use strict");

export default App;

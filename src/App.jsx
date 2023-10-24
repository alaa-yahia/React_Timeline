import { useState } from "react";
import "./App.scss";
import { Modal } from "./components/Modal";
import Modal_2019 from "./components/Modal_2019";
import Modal_2020 from "./components/Modal_2020";
import Modal_2021 from "./components/Modal_2021";
import { Helmet } from "react-helmet";

function App() {
  const modals = [<Modal_2019 />, <Modal_2020 />, <Modal_2021 />];
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
        <li
          onClick={() => {
            setIsModalShown(true);
            setCurrentModal(2);
          }}
        >
          2021
        </li>
      </ul>

      <Modal
        isModalShown={isModalShown}
        onRequestClose={() => setIsModalShown(!isModalShown)}
        classes="modal-container"
      >
        {modals[currentModal]}
      </Modal>
    </>
  );
}

export default App;

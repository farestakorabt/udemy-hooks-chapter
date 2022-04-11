import React, { useState } from "react";
import "./ModalApp.css";
import Modal from "./Modal";

function ModalApp() {
  const [toggleModal, setToggleModal] = useState(false);

  // 1st method for stop propagation
  // const closeModal = (e) => {
  //   console.log(e.target.className);

  //   if (e.target.className === "contenu") return;

  //   setToggleModal(false);
  // };

  // 2nd method for stop propagation

  const closeModal = () => {
    setToggleModal(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const openModal = () => {
    setToggleModal(true);
  };

  // 2nd method
  // let myModal = "";

  // if (toggleModal) {
  //   myModal = (
  //     <Modal closeFunc={closeModal} stopPropagation={stopPropagation} />
  //   );
  // } else {
  //   myModal = "";
  // }
  // 2nd method

  return (
    <div className="modalApp">
      <button onClick={openModal}>click open</button>

      {/* 2nd method */}
      {/* {myModal} */}
      {/* 2nd method */}

      {/* 1st method  */}

     
      {toggleModal && (
        <Modal closeFunc={closeModal} stopPropagation={stopPropagation} />
      )}

      {/* 1st method  */}
    </div>
  );
}

export default ModalApp;

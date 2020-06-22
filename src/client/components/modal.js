/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/button-has-type */
import React, {useState} from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");
function Popup() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div className={"modal"}>
            <div className={"modal-open"}>
                <button onClick={() => setModalIsOpen(true)}>{"Open"}</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className={"m-popup"}
                style={{
                    overlay: {
                        backgroundColor: "rgb(104, 172, 104, 0.4)",
                    },
                }}>
                <div>
                    <p> {"test"} </p>
                </div>
                <div className={"modal-close"}>
                    <button onClick={() => setModalIsOpen(false)}>
                        {"Close"}
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default Popup;

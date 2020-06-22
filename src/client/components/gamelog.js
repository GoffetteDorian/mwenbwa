/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/button-has-type */
import React, {useState} from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");
function Gamelog() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div className={"modal"}>
            <div className={"modal-open"}>
                <button onClick={() => setModalIsOpen(true)}>
                    {"Gamelog"}
                </button>
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
                    <div className={"gamelog-container"}>
                        <div className={"gamelog-header"}>
                            <h2>{"Gamelog"}</h2>
                        </div>
                        <div className={"gamelog-info"}>
                            <div className={"gamelog-player"}>
                                <h4>{"Player"}</h4>
                            </div>
                            <div className={"gamelog-action"}>
                                <h4>{"Action"}</h4>
                            </div>
                        </div>
                        <div className={"gamelog-user"}>
                            <div className={"gamlelog-name"}>
                                <p>{"Example"}</p>
                            </div>
                            <div className={"gamelog-user-actions"}>
                                <p> {"Example bought a tree"} </p>
                            </div>
                        </div>
                        <div className={"gamelog-user"}>
                            <div className={"gamlelog-name"}>
                                <p>{" Example 2 "}</p>
                            </div>
                            <div className={"gamelog-user-actions"}>
                                <p> {"Example 2 bought 5 trees"} </p>
                            </div>
                        </div>
                    </div>
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

export default Gamelog;

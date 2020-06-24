/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/button-has-type */
import React, {useState} from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");
function Leaderboard() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div className={"modal"}>
            <div className={"modal-open"}>
                <button onClick={() => setModalIsOpen(true)}>
                    {"Leaderbord"}
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
                <div className={"l-container"}>
                    <div>
                        <div className={"leadheader"}>
                            <h2>{"Leaderboard"}</h2>
                        </div>
                        <div className={"score-container"}>
                            <div className={"l-place"}>
                                <h4>{"#"}</h4>
                            </div>
                            <div className={"l-name"}>
                                <h4>{"Name"}</h4>
                            </div>
                            <div className={"l-score"}>
                                <h4>{"Score"}</h4>
                            </div>
                        </div>
                    </div>
                    <div className={"l-users"}>
                        <div className={""}>
                            <p> {"1"} </p>
                        </div>
                        <div className={""}>
                            <p> {"Example"} </p>
                        </div>
                        <div className={""}>
                            <p> {"6231"} </p>
                        </div>
                    </div>
                    <div className={"l-users"}>
                        <div className={""}>
                            <p> {"2"} </p>
                        </div>
                        <div className={""}>
                            <p> {"Example"} </p>
                        </div>
                        <div className={""}>
                            <p> {"5233"} </p>
                        </div>
                    </div>
                    <div className={"l-users"}>
                        <div className={""}>
                            <p> {"3"} </p>
                        </div>
                        <div className={""}>
                            <p> {"Example"} </p>
                        </div>
                        <div className={""}>
                            <p> {"4311"} </p>
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

export default Leaderboard;

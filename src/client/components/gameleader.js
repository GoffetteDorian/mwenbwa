/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-max-depth */
import React, {useState} from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");
function GameLeader() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div className={"gmodal"}>
            <div className={"modal-open"}>
                <button onClick={() => setModalIsOpen(true)}>
                    {"Game info"}
                </button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className={"gl-popup"}
                style={{
                    overlay: {
                        backgroundColor: "rgba(68, 68, 68, 0.1)",
                    },
                }}>
                <div className={"gameinfo-container"}>
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
                    <div className={"gamelog-container"}>
                        <div className={"gamelog-header"}>
                            <h2>{"Gamelog"}</h2>
                        </div>
                        <div className={"gamelog-info"}>
                            <div className={"gamelog-action"}>
                                <h4>{"Action"}</h4>
                            </div>
                        </div>
                        <div className={"gamelog-user"}>
                            <div className={"gamelog-user-actions"}>
                                <p> {"Example bought a tree"} </p>
                            </div>
                        </div>
                        <div className={"gamelog-user"}>
                            <div className={"gamelog-user-actions"}>
                                <p> {"Example 2 bought 5 trees"} </p>
                            </div>
                        </div>
                        <div className={"gamelog-user"}>
                            <div className={"gamelog-user-actions"}>
                                <p> {"Example 2 bought 5 trees"} </p>
                            </div>
                        </div>
                        <div className={"gamelog-user"}>
                            <div className={"gamelog-user-actions"}>
                                <p> {"Example 2 bought 5 trees"} </p>
                            </div>
                        </div>
                        <div className={"gamelog-user"}>
                            <div className={"gamelog-user-actions"}>
                                <p> {"Example 2 bought 5 trees"} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default GameLeader;

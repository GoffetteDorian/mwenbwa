/* eslint-disable react/button-has-type */

import React, {useState} from "react";
import {Link} from "react-router-dom";
import AboutImg from "../../../images/about.png";
import Modal from "react-modal";

Modal.setAppElement("#app");
function Welcome() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div className={"mwenbwa-main"} style={{zIndex: 3}}>
            <div className={"mwenbwa-body"}>
                <div className={"mwenbwa-container"}>
                    <div className={"mwenbwa-name"}>
                        <h1 className={"mwenbwa"}>{" MWENBWA"}</h1>
                        <h2> {"liége"} </h2>
                    </div>
                    <div className={"mwenbwa-button"}>
                        <Link to={"./signup"}>
                            <button>{" Sign Up "}</button>
                        </Link>
                        <Link to={"/signin"}>
                            <button className={"mwenbwa-signin"}>
                                {" Sign In "}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <img
                    src={AboutImg}
                    onClick={() => setModalIsOpen(true)}
                    className={"aboutimg"}
                />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className={"about-popup"}
                style={{
                    overlay: {
                        backgroundColor: "",
                    },
                }}>
                <div className={"about-modal-text"}>
                    <p>
                        {" "}
                        {
                            "This game is made by bla bla bla dfqkjfjqfj qdjfjdqjfjkdsq fjdsqjfjsdqf jkdskjfj ksdjfkjs  fkjdsfjdsf sdf qds f dsqf sqd f q fsd f sdf dfsdf dqfdfdsq fqdfqds"
                        }{" "}
                    </p>
                </div>
            </Modal>
        </div>
    );
}

export default Welcome;

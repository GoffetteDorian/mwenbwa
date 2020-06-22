/* eslint-disable react/button-has-type */
import React /*useEffect, useState*/ from "react";
import imageFeuille from "../../images/LeafG.png";
import imageArbre from "../../images/TreeG.png";
import imageAvatar from "../../images/AvatarG.png";

const Design = () => (
    <div>
        <div className={"fixed-top"}>
            <div className={"collapse"} id={"navbarToggleExternalContent"}>
                <div className={"bg-dark p-4"}>
                    <img
                        src={imageAvatar}
                        alt={"profil-picture"}
                        id={"profil-picture"}
                        height={"100px"}
                        width={"100px"}
                    />
                    <div id={"button-profil"}>
                        <button type={"submit"} className={"button"}>
                            {"Profil"}
                        </button>
                        <button type={"submit"} className={"button"}>
                            {"Deconnexion"}
                        </button>
                        <div className={"button colorPlayer"} />
                    </div>
                </div>
            </div>

            <nav className={"navbar navbar-dark bg-dark test"}>
                <button
                    className={"navbar-toggler"}
                    type={"button"}
                    data-toggle={"collapse"}
                    data-target={"#navbarToggleExternalContent"}
                    aria-controls={"navbarToggleExternalContent"}
                    aria-expanded={"false"}
                    aria-label={"Toggle navigation"}>
                    <span className={"navbar-toggler-icon"} />
                </button>
                <div id={"timerContener"}>
                    <p id={"timer"}>{"10:10:10"}</p>
                </div>
                <div id={"cercleTree"}>
                    <img
                        id={"leaf"}
                        src={imageArbre}
                        alt={"tree"}
                        height={"25px"}
                        width={"25px"}
                    />
                    <div id={"rectangleLeaf"}>
                        <p id={"number-leaf"}>{"6"}</p>
                    </div>
                </div>
                <div id={"cercleLeaf"}>
                    <img
                        id={"tree"}
                        src={imageFeuille}
                        alt={"tree"}
                        height={"25px"}
                        width={"25px"}
                    />
                    <div id={"rectangleLeaf"}>
                        <p id={"number-leaf"}>{"2"}</p>
                    </div>
                </div>
            </nav>
        </div>
    </div>
);
export default Design;

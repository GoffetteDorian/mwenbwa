/* eslint-disable react/button-has-type */
import React, {Component} from "react";
import arbre from "./images/treeG.png";
import leaf from "./images/leafG.png";
class Profil extends Component {
    render() {
        return (
            <div className={"formumlaire-g"}>
                <img
                    id={"arbre"}
                    src={arbre}
                    alt={"arbre"}
                    height={"50px"}
                    width={"50px"}
                />{" "}
                <img
                    id={"leaf"}
                    src={leaf}
                    alt={"leaf"}
                    height={"50px"}
                    width={"50px"}
                />
                <button
                    type={"button"}
                    className={"btn btn-primary counterTree"}>
                    {"Arbre(s):"}{" "}
                    <span className={"badge badge-light"}>{"9"}</span>
                    <span className={"sr-only"}>{"unread messages"}</span>
                </button>
                <button
                    type={"button"}
                    className={"btn btn-primary counterLeaf"}>
                    {" Feuille(s):"}
                    <span className={"badge badge-light"}>{"80"}</span>
                    <span className={"sr-only"}>{"unread messages"}</span>
                </button>
                <form id={"formulaireProfil"}>
                    <h1 id={"profilNameG"}>{"COMPTE: Geoffrey!"}</h1>
                    <img
                        id={"imageProfil"}
                        src={arbre}
                        alt={"Probleme"}
                        height={"100px"}
                        hidth={"100px"}
                    />
                    <div id={"positionFormulaireG"}>
                        <div className={"form-group distanceG"}>
                            <label htmlFor={"exampleInputEmail1"}>
                                {" PSEUDO:"}
                            </label>
                            <input
                                type={"email"}
                                className={"form-control distanceG "}
                                id={"exampleInputEmail1"}
                                aria-describedby={"emailHelp"}
                                placeholder={"Tutu"}
                            />
                        </div>
                        <div className={"form-group distanceG"}>
                            <label htmlFor={"exampleInputEmail1"}>
                                {"E-MAIL:"}
                            </label>
                            <input
                                type={"email"}
                                className={"form-control distanceG "}
                                id={"exampleInputEmail1"}
                                aria-describedby={"emailHelp"}
                                placeholder={"exemple@gmail.com"}
                            />
                        </div>
                        <div className={"form-group distanceG"}>
                            <label htmlFor={"exampleInputEmail1"}>
                                {" PASSWORD"}
                            </label>
                            <input
                                type={"email"}
                                className={"form-control distanceG "}
                                id={"exampleInputEmail1"}
                                aria-describedby={"emailHelp"}
                            />
                        </div>
                        <div className={"form-group  distanceG"}>
                            <label htmlFor={"exampleInputPassword1"}>
                                {" RETYPE PASSWORD :"}
                            </label>
                            <input
                                type={"password"}
                                className={"form-control distanceG"}
                                id={"exampleInputPassword1"}
                            />
                        </div>

                        <button
                            type={"submit"}
                            className={"btn btn-primary modifierProfil"}>
                            {"MODIFIER"}
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Profil;

/* eslint-disable react/button-has-type */
import React, {Component} from "react";
import image from "./images/avatar.png";
/*import arbre from "./images/arbre.png";
import leaf from "./images/leaf.png";*/
class Profil extends Component {
    render() {
        return (
            <div className={"formumlaire-g"}>
                <form>
                    <h1 id={"inscriptionG"}>{"INSCRIPTION"}</h1>
                    <img
                        id={"imageProfil"}
                        src={image}
                        alt={"Probleme"}
                        height={"100px"}
                        hidth={"100px"}
                    />
                    <div id={"positionFormulaireInscriptionG"}>
                        <div className={"form-group distanceG"}>
                            <label htmlFor={"exampleInputEmail1"}>
                                {"PSEUDO:"}
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
                                {"PASSWORD"}
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
                                {"RETYPE PASSWORD :"}
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
                            {" CONFIRMER"}
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Profil;

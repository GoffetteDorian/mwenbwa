/* becodeorg/mwenbwa
 *
 * /src/server/models/tree-model.js - Tree model
 *
 * coded by Dorian Goffette
 * started at 01/06/2020
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tree = new Schema(
    {
        arbotag: {type: Number},
        date_donnees: {type: String},
        geoloc: {
            lat: {type: Number},
            lon: {type: Number},
        },
        hauteur_totale: {type: Number},
        nom_complet: {type: String},
        diametre_cime: {type: Number},
        circonf: {type: Number},
        owner: {type: String},
    },
    {collection: "trees"},
);

export default mongoose.model("Trees", Tree);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tree = new Schema(
    {
        arbotag: {type: Number},
        date_donnees: {type: String},
        geoloc: {
            lat: {type: Number},
            long: {type: Number},
        },
        hauteur_totale: {type: Number},
        nom_complet: {type: String},
        diametre_cime: {type: Number},
        circonf: {type: Number},
    },
    {collection: "trees"},
);

module.exports = mongoose.model("Trees", Tree);

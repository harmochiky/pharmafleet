const functions = require("firebase-functions");
const app = require("express")();

const cors = require("cors");
app.use(cors());

const { apply, wishlist } = require("./handlers/app");
const auth = require("./util/auth");

app.post("/apply", apply);
app.get("/wishlist", wishlist);

exports.api = functions.https.onRequest(app);

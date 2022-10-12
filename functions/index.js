const functions = require("firebase-functions");
const app = require("express")();

const cors = require("cors");
app.use(cors());

const { apply, login, wishlist } = require("./handlers/app");
const auth = require("./util/auth");

app.post("/apply", apply);
app.post("/login", login);
app.get("/wishlist", wishlist);

exports.api = functions.https.onRequest(app);

const functions = require("firebase-functions");
const app = require("express")();

const cors = require("cors");
app.use(cors());

const {
  apply,
  login,
  add_new,
  getmydata,
  wishlist,
  getAllProducts,
  deleteProduct,
  getProduct,
  updateProduct,
} = require("./handlers/app");
const auth = require("./util/auth");

app.post("/apply", apply);
app.post("/update/:id", updateProduct);
app.get("/delete/:id", deleteProduct);
app.get("/product/:id", getProduct);
app.get("/get/all_products", getAllProducts);
app.post("/add_new", add_new);
app.post("/login", login);
app.get("/getmydata", auth, getmydata);
app.get("/wishlist", wishlist);

exports.api = functions.https.onRequest(app);

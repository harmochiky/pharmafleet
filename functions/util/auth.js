const { admin, db } = require("../util/admin");
const jwt = require("jwt-decode");

module.exports = (req, res, next) => {
  let idToken, userID;
  let cookies = JSON.parse(req.headers.cookies);
  if (cookies.pf_at) {
    idToken = cookies.pf_at;
  } else {
    console.error("No token found");
    return res.status(403).json({ error: "Unauthorized" });
  }

  let decodedToken = jwt(idToken);
  req.user = decodedToken;

  db.doc(`pharmacies/${req.user.claims.pharmacy_id}`)
    .get()
    .then((data) => {
      if (!data.exists) {
        return res.status(400).json({ error: "ER#4041" });
      }

      req.pharma = data.data();
      return next();
    })
    .catch((err) => {
      console.log(err);
      return res.status(403).json(err);
    });
};

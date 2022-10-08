const { admin, db } = require("../util/admin");
const jwt = require("jwt-decode");

module.exports = (req, res, next) => {
  // let idToken, userID;
  // let cookies = JSON.parse(req.headers.cookies);
  // if (cookies.mtd) {
  //   idToken = cookies.mtd;
  // } else {
  //   console.error("No token found");
  //   return res.status(403).json({ error: "Unauthorized" });
  // }
  // let decodedToken = jwt(idToken);
  // req.user = decodedToken;
  // db.collection("users")
  //   .where("userID", "==", req.user.uid)
  //   .limit(1)
  //   .get()
  //   .then((data) => {
  //     if (data.size === 0) {
  //       return res.status(400).json({ error: "ER#4041" });
  //     }
  //     req.user.userid = data.docs[0].data().userID;
  //     req.user.email = data.docs[0].data().email;
  //     req.user.following = data.docs[0].data().following;
  //     req.user.fName = data.docs[0].data().fName;
  //     req.user.sName = data.docs[0].data().sName;
  //     req.user.phoneNumber = data.docs[0].data().phoneNumber;
  //     req.user.data = data.docs[0].data();
  //     return next();
  //   })
  //   .catch((err) => {
  //     console.error("Error while verifying token ", err);
  //     return res.status(403).json(err);
  //   });
};

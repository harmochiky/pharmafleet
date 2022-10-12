const { db, admin } = require("../util/admin");
const firebase = require("firebase");
const jwt = require("jwt-decode");

const moment = require("moment");
const dayjs = require("dayjs");
const relativeTime = require("dayjs/plugin/relativeTime");

const config = require("../util/config");
const { user } = require("firebase-functions/v1/auth");
const e = require("express");
firebase.initializeApp(config);

exports.wishlist = (res, req) => {
  db.collection("users")
    .get()
    .then((data) => {
      let users = [];
      data.forEach((x) => {
        users.push(x.data());
      });
      return req.status(200).json(users);
    });
};

exports.login = (req, res) => {
  let user_data = {
    email: req.body.email,
    password: req.body.password,
  };

  let token;

  db.collection("users")
    .where("email", "==", user_data.email)
    .limit(1)
    .get()
    .then((data) => {
      if (data.size <= 0) {
        return res
          .status(200)
          .json({ error: "Email not registered to any account" });
      } else {
        if (data.docs[0].data().password !== user_data.password) {
          return res.status(200).json({ error: "Incorrect password" });
        }

        return db.doc(`pharmacies/${data.docs[0].data().pharmacy_id}`).get();
      }
    })
    .then((data) => {
      if (!data.data().verified) {
        return res.status(200).json({ error: "This pharmacy is not verified" });
      } else {
        return admin
          .auth()
          .createCustomToken(user_data.email, {
            verified: data.data().verified,
            pharmacy_name: data.data().pharmacy_name,
          })
          .then(function (customToken) {
            token = customToken;
          })
          .then(() => {
            firebase
              .auth()
              .signInWithCustomToken(token)
              .then(() => {
                return res.json({ token });
              });
          })
          .catch((err) => {
            console.log(err);
            return res
              .status(400)
              .json({ message: "ERR#20 Something happend" });
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.apply = (req, res) => {
  let current_date = new Date().toISOString();

  let user_data = {
    user_id: "",
    email: req.body.email,
    firstname: req.body.firstname,
    surname: req.body.surname,
    password: req.body.password,
    phone_number: req.body.phone_number,
    user_role: req.body.role,
    user_created: current_date,
    user_verified: false,
    doc_user_id: "",
    account_type: "normal",
    pharmacy_id: "",
  };
  let address = {
    pharmacy_id: "",
    addr_id: "",
    address: req.body.address,
    city: req.body.city,
    postal_code: req.body.postal_code,
    country: req.body.country,
    state: req.body.state,
    last_updated: current_date,
  };
  let pharmacy_data = {
    pharmacy_id: "",
    pharmacy_name: req.body.pharmacy_name,
    previous_categories: [],
    wishlist_products: [],
    cart_products: [],
    pharmacy_default_addr_id: "",
    pharmacy_website: req.body.pharmacy_website,
    total_orders: 0,
    last_order_date: "",
    pharmacy_created: current_date,
    verified: false,
    verification_state: "pending",
    doc_proof_of_banking_details: "",
    doc_company_registration: "",
    doc_proof_of_delivery_address: "",
  };

  let token, user_id, pharmacy_id;

  db.collection("users")
    .where("email", "==", user_data.email)
    .get()
    .then((data) => {
      if (data.size > 0) {
        return res.status(200).json({ error: "Email already in use" });
      } else {
        return admin.auth().createUser({
          email: user_data.email,
        });
      }
    })
    .then((data) => {
      user_id = data.uid;
      return admin.auth().createCustomToken(user_id, {
        user_id,
        email: user_data.email,
      });
    })
    .then(function (c_token) {
      token = c_token;
    })
    .then(() => {
      firebase
        .auth()
        .signInWithCustomToken(token)
        .then(() => {
          token = token;
        });
    })
    .then(() => {
      return db
        .collection("pharmacies")
        .add(pharmacy_data)
        .then((data) => {
          pharmacy_id = data.id;
          db.doc(`pharmacies/${data.id}`).update({
            pharmacy_id: data.id,
          });
        });
    })
    .then(() => {
      return db
        .doc(`users/${user_id}`)
        .set({ ...user_data, user_id: user_id, pharmacy_id });
    })
    .then(() => {
      return db
        .collection("addresses")
        .add(address)
        .then((data) => {
          db.doc(`addresses/${data.id}`).update({
            addr_id: data.id,
            pharmacy_id,
          });
        });
    })
    .then(() => {
      res.status(200).json({ status: "done" });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/weak-password") {
        return res
          .status(400)
          .json({ password: "The password you entered is weak ! " });
      }

      if (err.code === "auth/email-already-exists") {
        return res.status(200).json({ error: err.message });
      } else if (err.code === "auth/email-already-in-use") {
        return res.status(200).json({ error: "This email is already in use" });
      } else {
        return res.status(500).json({ error: err.code });
      }
    });
};

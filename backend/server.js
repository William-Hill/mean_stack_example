import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import Announcement from "./models/Announcement";

// Create the express object
const app = express();
// Create the router object
const router = express.Router();

// CORS is a system, consisting of transmitting HTTP headers, that determines whether to block or fulfill requests for restricted resources on a web page from another domain outside the domain from which the resource originated.
// The same-origin security policy forbids “cross-domain” requests by default. CORS gives web servers cross-domain access controls, which enable secure cross-domain data transfers.
app.use(cors());

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());

// Mongoose is the ORM for MongoDB.  This creates a connection to the database
mongoose.connect("mongodb://[server]/announcements");

const connection = mongoose.connection;

// A async operation that runs a callback when a successful database connection is opened
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

// get all Announcement objects
router.route("/announcements").get((req, res) => {
  Announcement.find((err, announcements) => {
    if (err) console.log(err);
    else res.json(announcements);
  });
});

// get single Announcement by ID
router.route("/announcements/:id").get((req, res) => {
  Announcement.findById(req.params.id, (err, announcement) => {
    if (err) console.log(err);
    else res.json(announcement);
  });
});

router.route("/announcements/add").post((req, res) => {
  let announcement = new Announcement(req.body);
  announcement
    .save()
    .then(announcement => {
      res.status(200).json({ announcement: "Added successfully" });
    })
    .catch(err => {
      res.status(400).send("Failed to create new record");
    });
});

app.use("/", router);

app.listen(4000, () => console.log(`Express server running on port 4000`));

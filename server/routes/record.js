const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const cors = require("cors");
const testroute = require("../routes/record")
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const app = express();
const recordRoutes = express.Router();

 
// This will help us connect to the database
const dbo = require("../db/connection/connection")
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 

// This section will help you get a list of all the records.
recordRoutes.route("/").get(function (req, res) {
 let db_connect = dbo.getDb("codebrewers");
 db_connect
   .collection("test")
   .find({})
   .toArray(function (err, result) {
     if (err) console.log(err);
     res.json(result);
   });
});
 
module.exports = recordRoutes;
// export default record;
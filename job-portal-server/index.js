// const express = require("express");
// const app = express();
// const cors = require("cors");
// require("dotenv").config();
// const port = process.env.PORT || 3000;
// // middleware
// app.use(express.json());
// app.use(cors());

// // user : bashirhamza249
// // password : sbVbWp19KGsHlMDh

// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-portal-demo.h2ffyns.mongodb.net/?retryWrites=true&w=majority&appName=job-portal-demo`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();

//     // create DB
//     const db = client.db("merJobPortal");
//     const jobsCollections = db.collection("demoJobs");

//     // post a job
//     app.post("/post-job", async (req, res) => {
//       const body = req.body;
//       body.createAt = new Date();
//       const result = await jobsCollections.insertOne(body);
//       if (result.insertedId) {
//         return res.status(200).send(result);
//       } else {
//         return res.status(404).send({
//           message: "something went wrong! try again later",
//           status: false,
//         });
//       }
//     });

//     // get all jobs
//     app.get("/all-jobs", async (req, res) => {
//       const cursor = await jobsCollections.find({});
//       const jobs = await cursor.toArray();
//       res.send(jobs);
//     });

//     // get single job using ID
//     app.get("/all-job/:id", async (req, res) => {
//       const id = req.params.id;
//       const job = await jobsCollections.findOne({ _id: new ObjectId(id) });
//       res.send(job);
//     });

//     // get job by email
//     app.get("/myJobs/:email", async (req, res) => {
//       // const email = req.params.email;
//       const jobs = await jobsCollections
//         .find({ postedBy: req.params.email })
//         .toArray();
//       res.send(jobs);
//     });

//     // delete a job
//     app.delete("/job/:id", async (req, res) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id) };
//       const result = await jobsCollections.deleteOne(filter);
//       res.send(result);
//     });

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;
const { MongoClient, ObjectId } = require("mongodb");

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-portal-demo.h2ffyns.mongodb.net/merJobPortal?retryWrites=true&w=majority`;

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Database and collection
    const db = client.db("merJobPortal");
    const jobsCollections = db.collection("demoJobs");

    // API endpoints
    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.createAt = new Date();
      const result = await jobsCollections.insertOne(body);
      res.status(200).send(result);
    });

    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobsCollections.find({}).toArray();
      res.send(jobs);
    });

    app.get("/all-job/:id", async (req, res) => {
      const id = req.params.id;
      const job = await jobsCollections.findOne({ _id: new ObjectId(id) });
      res.send(job);
    });

    app.get("/myJobs/:email", async (req, res) => {
      const email = req.params.email;
      const jobs = await jobsCollections.find({ postedBy: email }).toArray();
      res.send(jobs);
    });

    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const result = await jobsCollections.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // update a jobs 
    app.patch("/update-job/:id",  async (req, res) =>{
      const id = req.params.id;
      const jobData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = {upsert: true}
      const updateDoc = { $set: {...jobData}, };
      const result = await jobsCollections.updateOne(filter, updateDoc, options);
      res.send(result);
    })

    app.get("/", (req, res) => {
      res.send("Hello World");
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Call the run function
run();

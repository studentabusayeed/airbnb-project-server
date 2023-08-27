const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.srfjzzd.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const userCollection = client.db("amazon").collection("users1");
        const worldCollection = client.db("amazon").collection("users2");
        const farmsCollection = client.db("amazon").collection("users3");
        const lackCollection = client.db("amazon").collection("users4");
        const roomCollection = client.db("amazon").collection("users5");
        const surfingCollection = client.db("amazon").collection("users6");


        app.get('/users1', async (req, res) => {
            const result = await userCollection.find().toArray();
            res.send(result);
        });

        app.get('/users2', async (req, res) => {
            const result = await worldCollection.find().toArray();
            res.send(result);
        });
        app.get('/users3', async (req, res) => {
            const result = await farmsCollection.find().toArray();
            res.send(result);
        });
        app.get('/users4', async (req, res) => {
            const result = await lackCollection.find().toArray();
            res.send(result);
        });
        app.get('/users5', async (req, res) => {
            const result = await roomCollection.find().toArray();
            res.send(result);
        });
        app.get('/users6', async (req, res) => {
            const result = await surfingCollection.find().toArray();
            res.send(result);
        });


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Airbnb Project');
});

app.listen(port, () => {
    console.log(`Airbnb Project is start on port ${port}`);
});

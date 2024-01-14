const express = require('express')
const fileUpload = require("express-fileupload");
const app = express()
const cors = require('cors')
require('dotenv').config()
const ObjectId = require('mongodb').ObjectId;
var MongoClient = require('mongodb').MongoClient;
const { v4: uuidv4 } = require('uuid');
const { async } = require('@firebase/util');
const { Readable } = require('stream');
const port = process.env.PORT || 5000;

const os = require('os');
const interfaces = os.networkInterfaces();
let serverIpAddress;

// Iterate through network interfaces to find a non-internal and non-IPv6 address
outerLoop: for (const interfaceName in interfaces) {
    for (const iface of interfaces[interfaceName]) {
        if (!iface.internal && iface.family === 'IPv4') {
            serverIpAddress = iface.address;
            break outerLoop;
        }
    }
}

if (serverIpAddress) {
    console.log(`Server IP address: ${serverIpAddress}`);
} else {
    console.log('Unable to determine server IP address.');
}

var uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ymryghc.mongodb.net/test`;
var uri2 = `mongodb+srv://${process.env.DB2_USER}:${process.env.DB2_PASS}@cluster0.2hpwlht.mongodb.net/?retryWrites=true&w=majority`;

const client  = new MongoClient(uri,  { useNewUrlParser: true, useUnifiedTopology: true });
const client2 = new MongoClient(uri2, { useNewUrlParser: true, useUnifiedTopology: true });

let audioGridFSBucket;

app.use(cors());
app.use(express.json());
app.use(fileUpload());


const decode = (secret, ciphertext) => {
    const dec = [];
    const enc = Buffer.from(ciphertext, 'base64').toString('binary');
    for (let i = 0; i < enc.length; i += 1) {
      const keyC = secret[i % secret.length];
      const decC = `${String.fromCharCode((256 + enc[i].charCodeAt(0) - keyC.charCodeAt(0)) % 256)}`;
      dec.push(decC);
    }
    return dec.join('');
  };

  const encode = (secret, plaintext) => {
    const enc = [];
    for (let i = 0; i < plaintext.length; i += 1) {
      const keyC = secret[i % secret.length];
      const encC = `${String.fromCharCode((plaintext[i].charCodeAt(0) + keyC.charCodeAt(0)) % 256)}`;
      enc.push(encC);
    }
    const str = enc.join('');
    return Buffer.from(str, 'binary').toString('base64');
  };

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
  }


async function server() {
    try{
        await client.connect(function(err) {
            if (err) {
              console.error("Error connecting to MongoDB:", err);
            } else {
              console.log("Connected to Database 1");
            }
        });

        await client2.connect(function(err) {
            if (err) {
              console.error("Error connecting to MongoDB:", err);
            } else {
              console.log("Connected to Database 2");
            }
        });

        const database1 = client.db('ourdb');                           // Database Name 
        const database2 = client2.db('ourdb');                         // database1 Name 
        const usersCollection = database1.collection('user');
        const galleryCollection = database1.collection('all_gallery');
        const noteoneCollection = database1.collection('noteone');
        const notetwoCollection = database1.collection('notetwo');
        const sessionCollection = database2.collection('session');
        const dbsCollection = database1.collection('database');

        app.put('/dbs', async(req, res) => {
            const filter = { identifyer: true };
            const update = {
            $set: { selected: req?.body?.selected },
            };
            const result = await dbsCollection.updateOne(filter, update);
            res.json(result);
        })

        app.get('/dbs', async(req, res) => {
            const user = await dbsCollection.find({}).toArray();
            res.json(user);
        })

        // app.get('/user', async(req, res) => {
        //     const user = await usersCollection.find({}).toArray();
        //     res.json(user);
        // })

        app.post('/user', async(req, res) => {
            const user = await usersCollection.insertOne(req?.body);
            res.json(user);
        })

        app.post('/gallery', async(req, res) => {
            const cursor = await galleryCollection.insertOne(req.body);
            res.json(cursor);
        })

        app.get('/gallery', async(req, res) => {
            const query = {"secret":false};
            const user = await galleryCollection.find(query).toArray();
            res.json(user);
        })

        app.get('/secret', async(req, res) => {
            const query = {"secret":true};
            const user = await galleryCollection.find(query).toArray();
            res.json(user);
        })

        app.get('/userid', async(req, res) => {
            const filter = {email:req?.query?.email};
            const user = await usersCollection.find(filter).toArray();
            res.json(user);
        })

        app.post("/uploads", async(req, res) => {
            const buffer = Buffer.from(req?.files?.file?.data);
            let cursor;
            while(req.body.sldb){
                if(req?.body?.sldb === '1'){
                    const pictureCollection = database1.collection(req?.body?.gallery);
                    let base64String = buffer?.toString('base64');
                    const encodedb64 = encode(req?.body?.secret ,base64String);
                    cursor = await pictureCollection.insertOne({name: req?.files?.file?.name, b64: encodedb64});
                    break;
                } else if(req?.body?.sldb === '2') {
                    const pictureCollection = database2.collection(req?.body?.gallery);
                    let base64String = buffer?.toString('base64');
                    const encodedb64 = encode(req?.body?.secret ,base64String);
                    cursor = await pictureCollection.insertOne({name: req?.files?.file?.name, b64: encodedb64});
                    break;
                }
            }
            res.send(cursor);
        })

        app.post("/noteone", async(req, res) => {
            const textdata = encodeURI(req?.body?.text);
            const datedata = encodeURI(req?.body?.date);
            const encodedbone = encode(req?.body?.secret , textdata);
            const encodedate = encode(req?.body?.secret, datedata);
            const payload = {"date" : encodedate , "story": encodedbone};
            const cursor = await noteoneCollection.insertOne(payload);
            res.json(cursor);
        })

        app.post("/notetwo", async(req, res) => {
            const textdata = encodeURI(req?.body?.text);
            const datedata = encodeURI(req?.body?.date);
            const encodedbone = encode(req?.body?.secret , textdata);
            const encodedate = encode(req?.body?.secret, datedata);
            const payload = {"date" : encodedate , "story": encodedbone};
            const cursor = await notetwoCollection.insertOne(payload);
            res.json(cursor);
        })

        app.post('/noteoneshow', async(req, res) => {
            let data = await noteoneCollection.find({}).toArray();
            const secretcode = req?.body?.codeno;
            let i = 0;
            if(data?.length){
                for(i; i < data?.length; i++){
                    const decoded = decode(secretcode, data[i].story);
                    data[i].story = decoded.toString();
                    const decodeddate = decode(secretcode, data[i].date);
                    data[i].date = decodeddate;
                }
                if(i === data?.length){
                    res.status(200).json(data);
                } else {
                    res.status(200).json("Not Found");
                }
            }
            return;
        })

        app.post('/notetwoshow', async(req, res) => {
            let data = await notetwoCollection.find({}).toArray();
            const secretcode = req?.body?.codeno;
            let i = 0;
            if(data?.length){
                for(i; i < data?.length; i++){
                    const decoded = decode(secretcode, data[i].story);
                    data[i].story = decoded.toString();
                    const decodeddate = decode(secretcode, data[i].date);
                    data[i].date = decodeddate;
                }
                if(i === data?.length){
                    res.status(200).json(data);
                } else {
                    res.status(200).json("Not Found");
                }
            }
            return;
        })

        app.post('/dlen', async(req, res) => {
            let pictureCollection;
            while(req.body.db){
                if(req.body.db == 1){
                    pictureCollection = database1.collection(req?.body?.gallery);
                    break;
                } else if(req.body.db == 2){
                    pictureCollection = database2.collection(req?.body?.gallery);
                    break;
                } else {
                    console.log("Something Went Wrong!");
                    break;
                }
            }
            const len = await pictureCollection.find({}).toArray();
            res.json(len?.length);
        })

        app.post('/picture', async(req, res) => {
            let pictureCollection;
            while(req.body.db){
                if(req.body.db === 1){
                    pictureCollection = database1.collection(req.body?.gallery);
                    break;
                } else if(req.body.db === 2){
                    pictureCollection = database2.collection(req.body?.gallery);
                    break;
                }
            }
            const data = await pictureCollection.find({}).skip(req?.body?.start).limit(req?.body?.limit).toArray();
            res.json(data);
        })

        app.post('/memory', async(req, res) => { 
            let response;
            while(req.body.dbn){
                if(req.body.dbn == 1){
                    response = null;
                    const stats = await  database1.stats();
                    const totalSpace = stats.storageSize;
                    const availSpace = stats.storageSize - stats.dataSize;
                    response = {totalSpace:formatBytes(totalSpace), availSpace:formatBytes(availSpace)};
                    break;
                } else if(req.body.dbn == 2){
                    response = null;
                    const stats = await  database2.stats();
                    const totalSpace = stats.storageSize;
                    const availSpace = stats.storageSize - stats.dataSize;
                    response = {totalSpace:formatBytes(totalSpace), availSpace:formatBytes(availSpace)};
                    break;
                } else {
                    console.log("Executing Else, Something Went Wrong!");
                }
              return;
            }
            res.json(response);
        })

        app.post('/session', async(req, res) => {
            const session = await sessionCollection.insertOne(req?.body);
            res.json(session);
        })

        app.get('/session', async(req, res) => {
            const session = await sessionCollection.find({}).toArray();
            res.json(session);
        })

        app.post('/audio', async (req, res) => {
            try {
                if (!req.body.audio) {
                    return res.status(400).json({ message: 'No audio file uploaded' });
                }
                const audioFile = req.body.audio;
                let cursor;
                while(req.body.audio){
                    if(req.body.db === '1'){
                        console.log("executing 1");
                        const audioCollection = database1.collection('audio');
                        cursor = await audioCollection.insertOne({b64:audioFile, name:req?.body?.name});
                        break;
                    } else if(req.body.db === '2'){
                        console.log("executing 2");
                        const audioCollection = database2.collection('audio');
                        cursor = await audioCollection.insertOne({b64:audioFile, name:req?.body?.name});
                        break;
                    }
                }
                return res.status(200).json(cursor);
            } catch (error) {
                console.error('Error uploading audio:', error);
                res.status(500).json({ message: 'Internal server error' });
            }
            res.status(200).json({ message: 'Internal server error' });
        });

        app.get('/audio', async(req, res) => {
            const audioCollection = database2.collection('audio');
            const audio = await audioCollection.find({}).toArray();
            res.json(audio);
        })

        app.post('/large-json-upload', async (req, res) => {
            try {
                const jsonData = req.body; // Assuming the JSON data is sent in the request body

                // Adjust the logic to fit your data structure
                const result = await audioCollection.insertOne({
                data: jsonData,
                timestamp: new Date(),
                });

                res.json(result);
            } catch (error) {
                console.error('Error handling large JSON data:', error);
                res.status(500).json({ message: 'Internal server error' });
            }
        });

    }
    finally {
            // await client.close();
        }
    }
    
    app.get('/', (req, res) => {
      res.send(`API Rinning On Port : ${port}`)
    })

    server().then(() => {
        app.listen(port, () => {
            console.log(`Example app listening at Port No : ${port}`);
        })
    }).catch(console.dir)


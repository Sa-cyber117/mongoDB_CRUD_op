// const { connect } = require('http2');
const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";

const clientCon = new MongoClient(url);
const database = "monDB";

async function getInfo(){
    let res = await clientCon.connect();
    let c = res.db(database);
    let col = c.collection('pracTwo')
    let response = await col.find({}).toArray();
    console.log(response)
}
getInfo()
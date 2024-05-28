const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';

const dataBase = 'monDB';
const connection = new MongoClient(url);


async function getData(){
    let res = await connection.connect();
    let dbs = res.db(dataBase);
    let cs = dbs.collection("pracTwo");
    return cs
    // let c = await cs.find({}).toArray()
    // console.log(c)
}

module.exports = getData;
// getData();
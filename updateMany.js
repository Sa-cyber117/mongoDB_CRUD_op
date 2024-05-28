const getData = require('./index')

let updateManyData = async ()=>{
    let dbs = await getData();
    let result = await dbs.updateMany({age:23}, {$set:{mature: true}})
    console.warn(result)
}
updateManyData()
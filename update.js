const getData = require("./index")
const updateOneData = async ()=> {
    let database = await getData()
    let result = await database.updateOne(
        {name:"uddin"}, {$set:{name:"Saba-uddin"}}
    )
    // console.log(result)
    console.warn(result)
}

updateOneData()
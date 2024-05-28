const getData = require('./index')
const insert= async ()=>{
    const db = await getData()
    const result = await db.insertOne({
        name: "Raks", age: 22
    })
    if(result.acknowledged){
        console.warn(result)
        console.log("single data inserted",result)
    }
}

insert()

const insertMany = async () =>{
    const db = await getData()
    const res = await db.insertMany([
        {name:'Aks', age:23},{name:"Rohan", age:22}
    ])
    if(res.acknowledged){
        console.warn(res)
        console.log("many data inserted",res)
    }
    
}
insertMany()
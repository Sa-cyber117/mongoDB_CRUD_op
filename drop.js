const getData = require('./index')
let dropData = async ()=>{
    let data = await getData()
    let result = await data.deleteMany({age : { $lt : 10 }})
                                                            // $lt: Less than
                                                            // $lte: Less than or equal to
                                                            // $gt: Greater than
                                                            // $gte: Greater than or equal to
                                                            // $eq: Equal to
                                                            // $ne: Not equal to
    if(result.acknowledged){
        console.log("data deleted")
    }
}

// console.warn(result)
dropData()
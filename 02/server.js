const fs = require('fs')

fs.readFile("data.json","utf-8",(err,data)=>{
    if(err){
        console.err("error reading file",err)
        return;
    }
    let jsonData;
    try{
        jsonData = JSON.parse(data)
        console.log(data)
    }catch(parseerr){
        console.error("error parsing json",parseerr)
        return;
    }
    jsonData.newKey = "newValue";
    const jsonString = JSON.stringify(jsonData,null,2)

    fs.writeFile('data.json',jsonString,(err)=>{
        if(err){
            console.error("error",err)
            return;
        }
    })

})
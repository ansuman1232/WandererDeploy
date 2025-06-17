if(process.env.NODE_ENV !="production"){// when enviroment value != production then use below
    require("dotenv").config({ path: __dirname + '/../.env' })
   
}


const mongoose= require('mongoose');
async function main(){
   
await mongoose.connect( process.env.ATLASDB_URL);
console.log("connected to DB...");
};
main();
const initdata=require("./data.js");
const Listing=require("../models/listing.js");//how to access another folder file 
//when our accessing file is in other folder. 
async function init(){
    await Listing.deleteMany({});
    initdata.data=initdata.data.map((obj)=>{
     return obj={  ...obj,owner:"684fe99b56c1a6c8eaf44489"}      
})
    await Listing.insertMany(initdata.data);
   
    console.log("data inserted...")
};
init();



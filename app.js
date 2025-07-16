if(process.env.NODE_ENV !="production"){// when enviroment value != production then use below
    require("dotenv").config()
   
}



//for express===============
const express=require('express');
const app=express();
const path=require("path");

//for ejs===============
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
//for mongoose=========
const mongoose=require('mongoose');
async function main(){
    await mongoose.connect(process.env.ATLASDB_URL);
}
main().then(()=>{console.log("connecting to db")})
.catch(er=>{console.log(er);});


//to set ejs-mate=================
let ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate);// use ejs-locals for all ejs templates:
//setting to access style sheet=================
app.use(express.static(path.join(__dirname,"/public")));
//requiring my error class==========================
const MyError=require("./utils/myError.js");


//username=password (user6=12345)
//username=password (user5=1234)
//username=password (raja mohan12=raja monan12)







//starting server====================
app.listen(8080,()=>{
    console.log('listening to port 8080');
})

//to read the body of url==========
app.use(express.urlencoded({extended : true}))
app.use(express.json())






//=======require express-session and middleware==============

const session=require("express-session")
const MongoStore = require('connect-mongo');
//creating a store variable to store session in online=========================
const sessionStore=MongoStore.create({
    mongoUrl:process.env.ATLASDB_URL,//where data will be stored in data base
    crypto:{
         secret:process.env.SECRET,//it is not necessary that secret of this will be same as session secret
    },
    touchAfter:24*3600 //By default, each request that modifies the session will trigger a database write.
   // If you have a lot of traffic, this can overwhelm your database even if the session data remains mostly unchanged.
     //The touchAfter option lets you specify a minimum time interval (in seconds) between two consecutive session updates to the database,
     //  even if the session is being touched frequently.
})

sessionStore.on("error",(err)=>{//if there is any error then print that error.
    console.log("ERROR in mongo session:",err)
})
const sessionOption={//setting session options
    store:sessionStore,//here storing the session data in database.
    secret:process.env.SECRET,  //	Used to sign the session ID to prevent tampering
    resave:false,              //Reduces database load by not saving unmodified sessions
    saveUninitialized:true,    // Save uninitialized sessions (can be true for login tracking)
    cookie:{
     expires: new Date( Date.now() +7*24*60*60*1000),// this will ensure that cookie will be delete from browser 
     //after 7 days , if no value is set then it will be deleted just after browser is closed.
     maxAge: 7*24*60*60*1000,//set the max age also with expire date
     httpOnly:true,//to protect form cross scripting attack(not explained in detail)
    }
}
 

app.use(session(sessionOption));
// for passport===============
const User=require("./models/user.js")
const LocalStrategy= require("passport-local")
const passport=require("passport")

//for passport authentication===================================
app.use(passport.initialize())//when ever request comes to any route it must initialize the passport.
app.use(passport.session())//this help  a web app to identify that same user is
 //sending the request to another page or different user.

 passport.use(new LocalStrategy(User.authenticate()))
//here we use LocalStrategy to authenticate users with the 
// help of ‘authenticate()’ of passport-local-mongoose

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//===================for flash and showing login and sign and logout options====================

const flash=require("connect-flash")
app.use(flash())//do these all thing before requiring any route
app.use((req,res,next)=>{//do these all thing before requiring any route
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
  
    res.locals.currUser=req.user;//note keep this after passport only .
 
    next()
})






//requiring the routes==================
const userRoutes=require("./routes/user.js")
app.use('/user',userRoutes)

const listingRoutes=require("./routes/listing.js");
app.use('/listing',listingRoutes)
const reviewRoutes=require('./routes/review.js')
app.use('/review',reviewRoutes)








//==============if any randonm request is send on a route not mentioned=======


app.all(/.*/, (req, res, next) => {
    next(new MyError(404,"Page Not Found"));
  });


//========error handeling middleware===================
app.use((err,req,res,next)=>{

let {statusCode=500,message="some Error occured"}=err;

console.log(statusCode,message);

res.render('./listings/Error.ejs',{msg:message});
});


// login usersname,password:-
// user6,password :12345
// user5,password :1234
// raja mohan12,raja mohan12



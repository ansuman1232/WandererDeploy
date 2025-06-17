//requring export package==============
const Listing=require('../models/listing.js');
const express=require('express')
const router= express.Router()//creating a nuew router object
router.use(express.urlencoded({extended : true}))
 //requiring my error class==========================
const MyError=require("../utils/myError.js");
//========================================================
module.exports.index=async (req,res,next)=>{//for callback for index route.
    const allList= await Listing.find();
    res.render("./listings/list.ejs",{allList});
    }
//for show listing====================
module.exports.showListing= async (req,res,next)=>{
let {id}=req.params;
        
       await Listing.findById(id).populate({
            path:'reviews',
            populate:{
                path:"author"
            }
                })//this means show all reviews of listing and for each review show its author
            .populate("owner").then((data)=>{//inside populte field name is written
                console.log(data)
            if(!(data)){
                req.flash("error","listing dose not exist");
             return   res.redirect('/listing')//note:- don't forget to add return statement or else will lead to unexpected
             //behaviour
            }
           
         
            
            res.render("./listings/show.ejs",{myDest:data})}).catch(err=>next(err));//here used populate method to show the details of id
}
//=========showing for creating new listing form============
module.exports.showNewForm=async (req,res,next)=>{ //direct to new location add===
        res.render("./listings/add.ejs");
    }
//==========creating new Listing ==============================
module.exports.createNewListing=async (req,res,next)=>{//saving to database========
     console.log("adding to database")
    let filename=req.file.filename;
    let url=req.file.path;
    let{country:newCountry  ,title:newTitle, location:newLocation, price:np, description:nd,image:img,category}=req.body.listing;//here deconstructing from 
    //listing body
    let list1=  new Listing({title:newTitle,location:newLocation,price:np,description:nd,country:newCountry,image:img,category})
    list1.owner=req.user;
    list1.image.url=url;
    list1.image.filename=filename;
    let relt= await list1.save()//.then(res.redirect('/listing'))

    req.flash("success","A new listing is Added !")    //creating a flash message==========
    res.redirect('/listing')
    }
//========== showing edit form============================
module.exports.showEditForm=async (req,res,next)=>{//saving to database========
 
let {id}=req.params;

    const data = await Listing.findById(id);
    let originalUrl=data.image.url;
 
    originalUrl= originalUrl.replace("/upload","/upload/w_300,h_250")//to reduce the picture quality 

    res.render("./listings/edit.ejs",{data,originalUrl});
    }
//=================== update in database======================
module.exports.updateDatabase=async (req,res,next)=>{

console.log('update routes.................')
    let {id}=req.params;



    let{country:newCountry  ,title:newTitle, location:newLocation, price:np, description:nd,category}=req.body.listing;
   let list1=  await Listing.findById(id)
   
   list1.title=newTitle
   list1.location=newLocation
   list1.price=np
   list1.description=nd
   list1.country=newCountry
   list1.category=category
   //note:- above can also be written as :-  let list1=await findbyIdAndUpdate(id,{...req.body.listing});
   if(req.file){//if any image is send then only and if no image is passed then no need to update that field
    let filename=req.file.filename;
    let url=req.file.path;
    list1.image.filename=filename;
    list1.image.url=url;
}
 
   await list1.save();

     req.flash("success","listing is Edited")
    res.redirect(`/listing/${id}`);

}
//==========destroy listing========================
module.exports.destroyListing=async(req,res,next)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","listing is deleted")
    res.redirect("/listing");
}
//==========for fileters=================
module.exports.showRooms=async(req,res,next)=>{
      const allList= await Listing.find();
    res.render("./listings/listType/rooms.ejs",{allList})
}

module.exports.showPools=async(req,res,next)=>{
      const allList= await Listing.find();
    res.render("./listings/listType/pools.ejs",{allList})
}


module.exports.showFarm=async(req,res,next)=>{
      const allList= await Listing.find();
    res.render("./listings/listType/farm.ejs",{allList})
}


module.exports.showIconic=async(req,res,next)=>{
      const allList= await Listing.find();
    res.render("./listings/listType/iconic.ejs",{allList})
}



module.exports.showMountain=async(req,res,next)=>{
      const allList= await Listing.find();
    res.render("./listings/listType/mountain.ejs",{allList})
}


module.exports.showBeach=async(req,res,next)=>{
      const allList= await Listing.find();
    res.render("./listings/listType/beach.ejs",{allList})
}

//===========for search================
module.exports.search=async (req,res,next)=>{

   let allList=await Listing.find({country:req.query.country});
 
    res.render('./listings/list.ejs',{allList})
}
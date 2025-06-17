const express=require('express')
const router= express.Router()//creating a nuew router object
const multer  = require('multer')
const {storage}=require("../cloudConfig.js")
// const upload = multer({ dest: 'uploads/' })//here  all the images or files send by user will be stored 
const upload= multer({storage}) //here uploaded the images ot cloudinary.

//===========requiring controllers================================
const listingController=require("../controller/listing.js");


//for method overried===================================
var methodOverride = require('method-override');
router.use(methodOverride('_method'))



const {validateSchema}=require("../middleware.js")
//===================requiing ayncfunction==========
const wrapAsync=require('../utils/wrapAsync.js');

//=====================create route===================
        
 //creating an idex route to show all location title ==============
router.get("/",wrapAsync(listingController.index));
    
 //=======================adding the middle ware to this file===============
    let {isLoggedIn,isOwner ,isReview}=require('../middleware.js')

    
    router.get("/newform",isLoggedIn,wrapAsync(listingController.showNewForm));
    
    router.post("/add",upload.single("listing[image]"),validateSchema, wrapAsync(listingController.createNewListing));
    
//=============================searching data===========================
router.get("/search",wrapAsync(listingController.search))
//========================for fileters=====================

router.get("/rooms",wrapAsync(listingController.showRooms));
router.get("/pools",wrapAsync(listingController.showPools));
router.get("/farm",wrapAsync(listingController.showFarm));
router.get("/iconic",wrapAsync(listingController.showIconic));
router.get("/mountain",wrapAsync(listingController.showMountain));
router.get("/beach",wrapAsync(listingController.showBeach));

 //to show detalis of an particular topic=============
    router.get("/:id",wrapAsync(listingController.showListing));

 //=============update route===================
router.get("/update/:id",isLoggedIn,isOwner,wrapAsync(listingController.showEditForm))

//==========to update in database=========
router.put("/:id",isOwner,upload.single("listing[image]"),validateSchema,wrapAsync(listingController.updateDatabase));
//=============delete route=======================
router.delete("/:id",isLoggedIn,wrapAsync(listingController.destroyListing));


module.exports= router;
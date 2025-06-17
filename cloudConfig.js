const cloudinary=require("cloudinary").v2;//selecting version 2 of cloudinary.
const {CloudinaryStorage}=require("multer-storage-cloudinary")

cloudinary.config({//note:- here cloud_name , api_key ,api_security should be written in same.
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRRET
})

const storage= new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"WandererDev" , //name of floder in cloudinary
        allowedFormats:["jpg","png","jpeg"], //these all types of images are allowed to upload
    }
})

module.exports={
    cloudinary,
    storage
};
const express = require("express");
const userRoute = express();
const body_parser = require("body-parser");
const path = require("path");
const multer = require("multer");
const { constants } = require("buffer");

//setting the body parser
userRoute.use(body_parser.json());
userRoute.use(body_parser.urlencoded({ extended: true }));

// set static folder path
userRoute.use(express.static('public'));

// setting view engine and it's folder path
userRoute.set("view engine", "ejs");
userRoute.set("views", "./views");

const storage_disk=multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, path.join(__dirname,'../public/images'));
    },
    filename:(req, file, cb)=>{
        const fileName= Date.now()+"-"+file.originalname;
        cb(null, fileName)
    }
});

const upload = multer({storage:storage_disk});
module.exports=userRoute;

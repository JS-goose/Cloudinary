require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//List all assets in the remote media folder
// cloudinary.api.resources({folder: 'remote_media'},function(err, res) {console.log('ERR: ', err, 'RES: ', res)})

//Rename an asset
// cloudinary.uploader.rename('mememe.jpeg', 'mememe', {}, function(err, res) {console.log(err,res)})

//Get all resources with a given tag
cloudinary.api.resources_by_tag('space', {}, (err,res)=> {console.log(err, res)});
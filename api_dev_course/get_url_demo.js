require('dotenv').config();
const cloudinary = require('cloudinary').v2;

console.log(cloudinary.url('b7efegnhxn0npijsdl4s',{
    resource_type: 'image',
    height: 800,
    width: 800,
    gravity: 'auto',
}));
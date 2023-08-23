require('dotenv').config();
const cloudinary = require('cloudinary').v2;

console.log(cloudinary.image('cld-sample-4.jpg', { transformation: [{ quality: 'auto' }] }));

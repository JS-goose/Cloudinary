// const fs = require("fs");
require('dotenv').config()
const cloudinary = require("cloudinary").v2;

// const images = [];

// ! Commented out as there's no need to run the upload more than once
// fs.readdir("./assets/private/", (err, files) => {
//   images.push(...files);
//   console.log(images);

//   images.forEach((index) => {
//     cloudinary.uploader.upload(
//       `./assets/private/${index}`,
//       {
//         public_id: `privateImageGallery/${index}`,
//         unique_filename: false,
//         use_filename: true,
//         invalidate: true,
//         resource_type: "image",
//         overwrite: true,
//         type: 'private'
//       },
//       function (error, success) {
//         console.log(error, success);
//       }
//     );
//   });
// });

const modal = document.getElementById('img_modal')

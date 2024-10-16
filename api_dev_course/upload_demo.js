require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const images = [
  'assets/images/baseball_hat_transparent.png',
  'assets/images/black_hole.webp',
  'assets/images/space_rocks.webp',
];
// Original working code
// images.forEach((image) => {
//   cloudinary.uploader.upload(
//     image,
//     {
//       invalidate: true,
//       resource_type: "image",
//       overwrite: true,
//       use_filename: true
//     },
//     function (error, success) {
//       if (error) {
//         console.error("There was an error on upload: ", error);
//       } else {
//         console.log("Success: ", success);
//       }
//     }
//   );

images.forEach((image) => {
  cloudinary.uploader
    .upload(image, {
      invalidate: true,
      resource_type: 'image',
      overwrite: true,
      use_filename: true,
    })
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.log('There was an error:', error);
    });
});

// cloudinary.uploader.upload('assets/images/black_hole.webp',
// {
//     public_id: 'space/black_hole_sun_from_node',
//     invalidate: true,
//     resource_type: 'image',
//     overwrite: true
// },
//  function(error, success){
//     console.log(error, success);
// })

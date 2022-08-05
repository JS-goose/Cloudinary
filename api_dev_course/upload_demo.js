const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "jonathancloudinary",
  api_key: "333687443411313",
  api_secret: "P2sTmibIMeN-9N4YEoJL3uByrQQ",
});

//Add image locations manually
const images = [
  "assets/images/baseball_hat_transparent.png",
  "assets/images/black_hole.webp",
  "assets/images/space_rocks.webp",
];

images.forEach((image) => {
  cloudinary.uploader.upload(
    image,
    {
      invalidate: true,
      resource_type: "image",
      overwrite: true,
    },
    function (error, success) {
      if (error) {
        console.error("There was an error on upload: ", error);
      } else {
        console.log("Success: ", success);
      }
    }
  );
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

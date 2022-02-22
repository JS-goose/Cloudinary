const fs = require("fs");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "jonathancloudinary",
  api_key: "333687443411313",
  api_secret: "P2sTmibIMeN-9N4YEoJL3uByrQQ",
});

const images = [];

fs.readdir("./assets/private/", (err, files) => {
  images.push(...files);
  console.log(images);

  images.forEach((index) => {
    cloudinary.uploader.upload(
      `./assets/private/${index}`,
      {
        public_id: `privateImageGallery/${index}`,
        unique_filename: false,
        use_filename: true,
        invalidate: true,
        resource_type: "image",
        overwrite: true,
        type: 'private'
      },
      function (error, success) {
        console.log(error, success);
      }
    );
  });
});

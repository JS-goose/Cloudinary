// const fs = require("fs");
// require("dotenv").config();
// const cloudinary = require("cloudinary").v2;

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

const eventHolders = [...document.getElementsByClassName("space_image")];
const imageObj = { title: "", src: "" };
const modalContainer = document.getElementById("modal_container");
const modalCloseButton = document.getElementById("modal_close_button");

eventHolders.forEach((image) => {
  image.addEventListener("click", function () {
    imageObj.src = image.src;
    imageObj.title = image.title;
    console.log(imageObj);

    modalContainer.classList.remove("modal_invisible");
    modalContainer.classList.add("modal_visible");
  });
});

function closeModal() {
  console.log("close button clicked");
  modalContainer.classList.add("modal_invisible");
}

if (imageObj.title !== "") console.log(imageObj);

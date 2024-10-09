const myWidget = cloudinary.galleryWidget({
  cloudName: 'cloudNameHere',
  navigation: 'always',
  container: '#cld-gallery',
  preload: [],
  analytics: true,
  mediaAssets: [
    {
      publicId: 'uwp7l4zzgj8ss9hwbnbf.avif',
      mediaType: 'image',
    },
    {
      publicId: 'samples/landscapes/landscape-panorama',
      mediaType: 'image',
    },
    { tag: 'nebula', mediaType: 'image'},
    {
      publicId: 'NasaLogo',
      mediaType: 'image',
    },
    {
      publicId: 'b7efegnhxn0npijsdl4s',
      mediaType: 'image',
    },
    {
      publicId: 'turtle',
      mediaType: 'video',
    },
  ],
});
myWidget.render();
// const firstImg = document.getElementById('cld-gallery').children
// console.log(myWidget)
// const myWidgetTwo = cloudinary.galleryWidget({
//   cloudName: 'jonathancloudinary',
//   navigation: 'always',
//   container: '#cld-gallery-two',
//   placeholderImage: false,
//   mediaAssets: [
//     {
//       publicId: 'uwp7l4zzgj8ss9hwbnbf.avif',
//       mediaType: 'image',
//     },
//     {
//       publicId: 'samples/landscapes/landscape-panorama',
//       mediaType: 'image',
//     },
//     { tag: 'nebula', mediaType: 'image'},
//     {
//       publicId: 'NasaLogo',
//       mediaType: 'image',
//     },
//     {
//       publicId: 'b7efegnhxn0npijsdl4s',
//       mediaType: 'image',
//     },
//     {
//       publicId: 'turtle',
//       mediaType: 'video',
//     },
//   ],
// });
// myWidgetTwo.render();

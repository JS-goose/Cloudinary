require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//List all assets in the remote media folder
// cloudinary.api.resources({folder: 'remote_media'},function(err, res) {console.log('ERR: ', err, 'RES: ', res)})

//Rename an asset
// cloudinary.uploader.rename('mememe.jpeg', 'mememe', {}, function(err, res) {console.log(err,res)})

//Get all resources with a given tag
// cloudinary.api.resources_by_tag('space', {}, (err,res)=> {console.log(err, res)});

// cloudinary.search
//   .expression('resource_type:image AND format:pdf')
//   .max_results(50)
//   .execute()
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

cloudinary.search
  .expression('resource_type:image AND format:pdf')
  .max_results(50)
  .execute()
  .then((result) => {
    result.resources.forEach((resource) => {
      cloudinary.api.delete_resources(resource.public_id)
      console.log(`Delete resource id: ${resource.public_id}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });

// cloudinary.api.resources({
//     type: 'upload',
//     resource_type: 'image',
//     format: 'png'
//   })
//   .then(result => {
//     const publicIds = result.resources.map(resource => resource.public_id);

//     console.log('ids here:', publicIds, publicIds.length)
//     // Delete all PDF files
//     // cloudinary.api.delete_resources(publicIds, (error, result) => {
//     //   if (error) {
//     //     console.error('Error deleting PDF files:', error);
//     //   } else {
//     //     console.log('PDF files deleted successfully', result);
//     //   }
//     // });
//   })
//   .catch(error => {
//     console.error('Error getting PDF files:', error);
//   });

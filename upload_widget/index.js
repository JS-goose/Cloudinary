const widgetCloudName = 'jonathancloudinary'
const uploadWidget = cloudinary.createUploadWidget({
    cloudName: widgetCloudName,
    upload_preset: '',
}, (error,result)=> {
    if (result.event == 'success') {
    console.log(result.info)
} else {
    console.log(error)
}
})

document.getElementById("upload_widget_button").addEventListener("click", function(){
    uploadWidget.open();
}, false);

document.getElementById("cloud_name").innerText = widgetCloudName

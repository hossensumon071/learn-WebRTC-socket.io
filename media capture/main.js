let constraints = {
  'video': true,
  'audio': true,
}

navigator.mediaDevices.getUserMedia(constraints)
.then(function (stream) {
   let video = document.querySelector('video');
   video.srcObject = stream;
   video.play();
})
.catch(function (err) {
  console.log(err)
})

navigator.mediaDevices.getDisplayMedia(constraints)
.then(function (stream) {
   let video = document.querySelector('video');
   video.srcObject = stream;
   video.play();
})
.catch(function (err) {
  console.log(err)
})

navigator.mediaDevices.enumerateDevices()
 .then(function (devices) {
  console.log(devices)
 })


 navigator.mediaDevices.enumerateDevices()
  .then(function (devices) {
    devices.filter(function (item) {
      if(item.kind==="videoinput") {
        if(item.kind==="videoinput") {
          alert("video Start")
        } 
        else {
          alert("Camera not found")
        }
      }
    })
  })
// Media capture --> Audio and Video | Device Permission and Get Stream
    //  . Streaming media is video or audio content
    // . Sent in compressed from over the internet and played immediatly
    // . Rather than being saved the hard drive
    // . With streaming media, a user does not have to wait to download a file to play it 
    // . Media is sent in a continous stream of data it can play as it arrives
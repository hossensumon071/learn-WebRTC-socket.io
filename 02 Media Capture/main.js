let constraints = { video: true, audio: true };

// for video capture
// navigator.mediaDevices
//   .getUserMedia(constraints)
//   .then(function (stream) {
//     let video = document.querySelector("video")
//     video.srcObject = stream;
//     video.play()
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// for screenshare
// navigator.mediaDevices
// .getDisplayMedia(constraints)
// .then(function (stream) {
//   let video = document.querySelector("video")
//   video.srcObject = stream;
//   video.play()
// })
// .catch(function (err) {
//   console.log(err);
// });

// for get divces list
// navigator.mediaDevices.enumerateDevices().then(function (devices) {
//   console.log(devices);
// });


// check audio video input 
navigator.mediaDevices.enumerateDevices()
  .then(function (devices) {
    devices.filter(function (item) {
      if(item.kind==="videoinput") {
        alert("video start")
      }
      else {
        console.log("Camera Not Found")
      }
    })
  })
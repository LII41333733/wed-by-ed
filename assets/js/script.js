// alert("Hello World!")

window.addEventListener("DOMContentLoaded", function(e) {

 var stage = document.getElementById("stage");
 var fadeComplete = function(e) { stage.appendChild(arr[0]); };
 var arr = stage.getElementsByTagName("a");
 for(var i=0; i < arr.length; i++) {
   arr[i].addEventListener("animationend", fadeComplete, false);
 }

}, false);

$(document).ready(function () {



 $(document).on("click", ".imageDiv", function () {

  const order = $(this)[0].dataset.order;


  $(".modalImg").attr(`src`, `./assets/images/packages/Package${order}.png`)
  $(".arrow-right").attr(`data-modal-order`, `${order}`)
  $(".arrow-left").attr(`data-modal-order`, `${order}`)
 })





 $(document).on("click", ".arrow-right", function () {
  let order = parseInt($(this)[0].dataset.modalOrder) + 1;

  if (order !== 21) {
   $(".modalImg").attr(`src`, `./assets/images/packages/Package${order}.png`)
   $(".arrow-right").attr(`data-modal-order`, `${order}`)
   $(".arrow-left").attr(`data-modal-order`, `${order}`)

  } else {
   $(".modalImg").attr(`src`, `./assets/images/packages/Package1.png`)
   $(".arrow-right").attr(`data-modal-order`, 1)
   $(".arrow-left").attr(`data-modal-order`, 1)
  }

 })

 $(document).on("click", ".arrow-left", function () {
  let order = parseInt($(this)[0].dataset.modalOrder) - 1;

  if (order !== 0) {
   $(".modalImg").attr(`src`, `./assets/images/packages/Package${order}.png`)
   $(".arrow-left").attr(`data-modal-order`, `${order}`)
   $(".arrow-right").attr(`data-modal-order`, `${order}`)
  } else {
   $(".modalImg").attr(`src`, `./assets/images/packages/Package20.png`)
   $(".arrow-left").attr(`data-modal-order`, 20)
   $(".arrow-right").attr(`data-modal-order`, 20)
  }

 })





 const $slideshow = $(".slideshow");
 const $gallery = $(".gallery");
 const $contact = $(".contact");

 // $slideshow.hide();
 // $gallery.hide();
 // $contact.show();


 // $slideshow.on("click", function() {
 //  $slideshow.hide();
 //  $gallery.show();
 // })


 let photoIterator = 1;

 for (let x = photoIterator; x <= 20; x++) {

  const $galleryImage = $(`<div class='imageDiv' data-order='${x}' data-toggle='modal' data-target='.bd-example-modal-xl'></div>`);
  const $imgWrap = $(`<div class='img-wrap'></div>`);
  const $invite = `<img class='wedding-invite' src='./assets/images/invites/Invite${x}.png' alt='wedding-invitation' />`;

  // $galleryImage.css(`background-image`, ``)
  $imgWrap.append($invite)
  $galleryImage.append($imgWrap)


  $(".photobucket").append($galleryImage);

 }




})
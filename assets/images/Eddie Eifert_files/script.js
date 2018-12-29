// alert("Hello World!")

$(document).ready(function () {

 $(document).on("click", ".imageDiv", function() {
  console.log($(this)[0].dataset.order)
  $(".modalImg").attr(`src`,`./assets/images/packages/Package${$(this)[0].dataset.order}.png`);
 })
 


 const $slideshow = $(".slideshow");
 const $gallery = $(".gallery");

 $slideshow.hide();
 $gallery.show();
 
 
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
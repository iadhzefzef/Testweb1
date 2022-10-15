var closebtn = document.getElementById("close-btn");
var modalContainer = document.querySelector(".modal-bg");
var images = document.getElementsByClassName("imag");
var imageContaoner = document.getElementById("image-container");
closebtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

for (let i = 0; i < images.length; i++) {
  let im = images[i];

  im.addEventListener("click", function () {
    imageContaoner.src = im.src;
    modalContainer.style.display = "flex";
  });
}

const img = ["img/banda.jpg", "img/[001502].jpg", "img/pp.png"];
const selectImg = document.getElementById("myImg");
let i = 0;
function changeImage() {
  if (i === 0) {
    selectImg.src = img[i];
    i++;
  } else if (i === 1) {
    selectImg.src = img[i];
    i++;
  } else if (i == 2) {
    selectImg.src = img[i];
    i = 0;
  }
}

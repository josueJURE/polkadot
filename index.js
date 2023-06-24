const exchangeIcon = document.querySelector(".fa-exchange");
const plusIcon = document.querySelector(".fa-plus");



if (plusIcon) {
  plusIcon.addEventListener("click", function () {
    window.location.assign("/addGiftcard.html");
  });
}

if (exchangeIcon) {
  exchangeIcon.addEventListener("click", function () {
    window.location.assign("/addGiftcard.html");
  });
}

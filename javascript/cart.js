

window.onload = function() {
  var firstImage = document.querySelector(".columnn img[src*='group-1.jpg']");
  myFunction(firstImage);
}    

function myFunction(imgs) {
var expandImg = document.getElementById("expandedImg");
var imgText = document.getElementById("imgtext");
expandImg.src = imgs.src;
imgText.innerHTML = imgs.alt;
expandImg.parentElement.style.display = "block";
}




function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


const radioButtons = document.querySelectorAll('input[name="plan"]');


radioButtons.forEach((radio) => {
  radio.addEventListener("change", function () {
    document.querySelectorAll(".pay-option-radio").forEach((box) => {
      box.classList.remove("active-box");
    });


    if (this.checked) {
      this.closest(".pay-option-radio").classList.add("active-box");
    }
  });
});


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
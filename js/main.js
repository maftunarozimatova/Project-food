const modalOpenBtns = document.querySelectorAll("[data-modal]");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
modalOpenBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("show", "fade");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  });
});
closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("hide", "fade");
  document.body.style.overflow = "";
});
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.classList.remove("show");
    modal.classList.add("hide", "fade");
    document.body.style.overflow = "";
  }
});
const tabcontent = document.querySelectorAll(".tabcontent");
const tabheader__item = document.querySelectorAll(".tabheader__item");
const tabheader = document.querySelector(".tabheader__items");
function hideTabs() {
  tabcontent.forEach((tabs) => {
    tabs.classList.add("hide");
    tabs.classList.remove("show", "fade");
  });
  tabheader__item.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
}
function showTabs(i = 0) {
  tabcontent[i].classList.add("show", "fade");
  tabheader__item[i].classList.add("tabheader__item_active");
  tabcontent[i].classList.remove("hide");
}
hideTabs();
showTabs();
tabheader.addEventListener("click", (e) => {
  let target = e.target;
  if (target && target.classList.contains("tabheader__item")) {
    tabheader__item.forEach((item, index) => {
      if (target == item) {
        hideTabs();
        showTabs(index);
      }
      console.log("salom");
    });
  }
});

function hideTabs(i = 0) {
tabcontent.forEach((tabs) => {
      tabs.classList.add("hide");
      tabs.classList.remove("show", "fade");
    });
    tabheader__item.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

const prev = document.querySelector(".offer__slider-prev")
const next = document.querySelector(".offer__slider-next")
const current = document.querySelector("#current")
const total = document.querySelector("#total")
const slides = document.querySelectorAll(".offer__slide")


    total.innerHTML = slides.length
    if (slides.length < 10) {
        total.innerHTML = `0${total.innerHTML}`
    }

let slideIndex = 1
showSlides(slideIndex)

function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    slides.forEach(slide => {
        slide.style.display = "none"
    })

    slides[slideIndex - 1].style.display = "block"

    if (slides.length < 10) {
        current.innerHTML = `0${slideIndex}`
    }else{
        current.innerHTML = slideIndex
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n)
}
next.addEventListener("click", () => {
    plusSlides(1)
})
prev.addEventListener("click", () => {
    plusSlides(-1)
})


const datePicker = document.querySelector("#date");
const dateIcon = document.querySelector("#dateIcon");

datePicker.addEventListener("focus", () => {
    datePicker.type = 'date';
    dateIcon.classList.add("d-none");
});

datePicker.addEventListener("focusout", () => {
    datePicker.type = 'text';
    dateIcon.classList.remove("d-none");
});

$(function () {
    AOS.init();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
});

var owl = $('.owl-carousel');
owl.owlCarousel();

$('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
});

$('.customPrevBtn').click(function () {
    owl.trigger('prev.owl.carousel', [300]);
});

const scrollToTop = () => {
    const myBody = document.querySelector("HTML")
    myBody.scrollIntoView({
        behavior: "smooth"
    });
}

const setBtnVisibility = () => {
    if (document.documentElement.scrollTop > 500) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
}

window.addEventListener("scroll", () => {
    setBtnVisibility();
});
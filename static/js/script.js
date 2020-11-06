siteLang();

window.addEventListener("DOMContentLoaded", main)

function main() {
    showDropDown();
    splideSlider();
    parallax();
    stopAnimation();
}

function notExists(target, byLength = false) {
    if (target !== null) {
        if (byLength) {
            return target.length > 0 ? false : true;
        } else {
            return false
        }
    }
    return true;
}

function showDropDown() {
    let dropdowns = document.querySelectorAll(".dropdown");

    if (notExists(dropdowns, true)) return;

    for (dropdown of dropdowns) {
        dropdown.addEventListener("mouseenter", toggleMenu)
        dropdown.addEventListener("mouseleave", toggleMenu)

        function toggleMenu(e) {
            let target = e.target;
            let dropBtn = target.querySelector(".dropdown-toggle");
            let dropMenu = target.querySelector(".dropdown-menu");

            setTimeout(() => {
                if (!target.classList.contains("dropdown-menu") || !target.classList.contains("dropdown")) {
                    if (e.type == "mouseenter") {
                        target.classList.add("show")
                        dropMenu.classList.add("show")
                        dropBtn.setAttribute("aria-expanded", "true");
                    } else {
                        target.classList.remove("show")
                        dropMenu.classList.remove("show")
                        dropBtn.setAttribute("aria-expanded", "false");
                    }
                }
            }, 200);
        }
    }
}

function splideSlider() {
    let sliderItem = document.querySelector(".slider__item");
    
    if (notExists(sliderItem)) return;

    new Splide( '#splide', {
        type: "loop",
        direction: 'ttb',
        height: `${sliderItem.clientHeight}px`,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false
    } ).mount();

    let pagiWrapper = document.querySelector(".slider__index-list");
    let splidePagi = document.querySelector(".splide__pagination");
    pagiWrapper.insertAdjacentElement("afterbegin", splidePagi);
}

function parallax() {
    let ourServices = document.querySelector(".ourservices");
    let parallaxs = Array.from(document.querySelectorAll(".parallax"));
    let windowOffset = window.pageYOffset;
    const offsetMargin = 300;
    const backgroundSpeed = 10;

    !notExists(ourServices) ? ourServices.style.backgroundPositionY = `-${windowOffset / backgroundSpeed}px` : "";

    window.addEventListener("scroll", () => {
        windowOffset = window.pageYOffset;

        !notExists(ourServices) ? ourServices.style.backgroundPositionY = `-${windowOffset / backgroundSpeed}px` : "";

        if (!notExists(parallaxs, true)) {
            for (item of parallaxs) {
                if ((item.offsetTop - offsetMargin) <= windowOffset) {
                    item.classList.contains("statistics") ? statisticsCounter() : "";
    
                    let childs = Array.from(item.querySelector(".parallax__list").children);
    
                    for (child of childs) {
                        let delay = childs.indexOf(child);
                        child.style.transitionDuration = `${(delay + 1) * offsetMargin}ms`;
                        child.classList.add("active");
                    }

                    parallaxs = parallaxs.filter(target => {
                        return item.classList.value !== target.classList.value;
                    });
                };
            };
        }
    });
}

function stopAnimation() {
    let statIcons = document.querySelectorAll(".statistics__icon");
    if (notExists(statIcons, true)) return;
    for (icon of statIcons) {
        icon.addEventListener("click", (e) => e.target.closest(".statistics__icon").classList.add("stop"));
    }
}

function statisticsCounter() {
    let statisNums = document.querySelectorAll(".statistics__num");

    if (notExists(statisNums, true)) return;

    function animateValue(target, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            target.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        
        window.requestAnimationFrame(step);
    };

    for (num of statisNums) {
        const targetCount = num.getAttribute("count-to");
        if (targetCount === null) continue;
        animateValue(num, 0, targetCount, 2000);
    }
}

function siteLang() {
    let langBtn = document.querySelector(".lang__btn");
    let langIcon = langBtn.querySelector("img");
    let currentLang = localStorage.getItem("lang");

    function setEn() {
        localStorage.setItem("lang", "en");
        document.body.classList.remove("rtl");
        langIcon.src = langIcon.src.replace(/eng/, "ar");
        fixSliderImgs("en");
    }

    function setAr() {
        localStorage.setItem("lang", "ar");
        document.body.classList.add("rtl");
        langIcon.src = langIcon.src.replace(/ar/, "eng");
        fixSliderImgs("ar");
    }

    (currentLang == null || currentLang == "en") ? setEn() : setAr();
    
    function switchLang() {
        currentLang = localStorage.getItem("lang");
        (currentLang == "en") ? setAr() : setEn();
    };

    langBtn.addEventListener("click", (e) => {
        e.preventDefault();
        switchLang();
    });
}

// unnecessary function to temporary fix sliders img
function fixSliderImgs(lang) {
    let sliderImgs = document.querySelectorAll(".slider__item");

    if (notExists(sliderImgs, true)) return;

    for (img of sliderImgs) {
        if (lang == "en") {
            img.style.backgroundImage = img.style.backgroundImage.replace(/-rtl.png/i, ".png");
        } else {
            img.style.backgroundImage = img.style.backgroundImage.replace(/.png/i, "-rtl.png");
        }
    }
}
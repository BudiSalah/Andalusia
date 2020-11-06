window.addEventListener("DOMContentLoaded", main)

function main() {
    showDropDown();
    splideSlider();
    parallax();
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
                    parallaxs = parallaxs.filter(target => {
                        return item.classList.value !== target.classList.value;
                    });
    
                    let childs = Array.from(item.children);
    
                    for (child of childs) {
                        let delay = childs.indexOf(child);
                        child.style.transitionDuration = `${(delay + 1) * offsetMargin}ms`;
                        child.classList.add("active");
                    }
                };
            };
        }
    });
}
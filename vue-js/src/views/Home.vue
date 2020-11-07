<template>
  <div class="home">
    <Sliders />
    <Services />
    <Overview />
    <Officers />
    <Statistics />
    <NewsList />
    <Partners />
  </div>
</template>

<script>
import Sliders from "@/components/Sliders";
import Services from "@/components/Services";
import Overview from "@/components/Overview";
import Officers from "@/components/Officers";
import Statistics from "@/components/Statistics";
import NewsList from "@/components/NewsList";
import Partners from "@/components/Partners";

export default {
  name: "Home",
  components: {
    Sliders,
    Services,
    Overview,
    Officers,
    Statistics,
    NewsList,
    Partners,
  },
  methods: {
    notExists: function (target, byLength = false) {
      if (target !== null) {
        if (byLength) {
          return target.length > 0 ? false : true;
        } else {
          return false;
        }
      }
      return true;
    },
    statisticsCounter: function () {
      let statisNums = document.querySelectorAll(".statistics__num");

      if (this.notExists(statisNums, true)) return;

      function animateValue(target, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          target.innerHTML = Math.floor(
            progress * (end - start) + start
          ).toLocaleString();
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };

        window.requestAnimationFrame(step);
      }

      for (let num of statisNums) {
        const targetCount = num.getAttribute("count-to");
        if (targetCount === null) continue;
        animateValue(num, 0, targetCount, 2000);
      }
    },
    parallax: function () {
      let ourServices = document.querySelector(".ourservices");
      let parallaxs = Array.from(document.querySelectorAll(".parallax"));
      let windowOffset = window.pageYOffset;
      const offsetMargin = 300;
      const backgroundSpeed = 10;

      !this.notExists(ourServices)
        ? (ourServices.style.backgroundPositionY = `-${
            windowOffset / backgroundSpeed
          }px`)
        : "";

      window.addEventListener("scroll", () => {
        windowOffset = window.pageYOffset;

        !this.notExists(ourServices)
          ? (ourServices.style.backgroundPositionY = `-${
              windowOffset / backgroundSpeed
            }px`)
          : "";

        if (!this.notExists(parallaxs, true)) {
          for (let item of parallaxs) {
            if (item.offsetTop - offsetMargin <= windowOffset) {
              item.classList.contains("statistics")
                ? this.statisticsCounter()
                : "";

              let childs = Array.from(
                item.querySelector(".parallax__list").children
              );

              for (let child of childs) {
                let delay = childs.indexOf(child);
                child.style.transitionDuration = `${
                  (delay + 1) * offsetMargin
                }ms`;
                child.classList.add("active");
              }

              parallaxs = parallaxs.filter((target) => {
                return item.classList.value !== target.classList.value;
              });
            }
          }
        }
      });
    },
  },
  mounted() {
    this.parallax();
  },
};
</script>

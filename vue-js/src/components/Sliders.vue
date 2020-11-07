<template>
  <section class="slider">
    <div id="splide">
      <div class="slider__controller slider__controller--rtl splide__arrows">
        <img
          src="@/assets/icon/icon-up-arrow.png"
          alt="Slider Icon"
          class="slider__btn slider__prev-btn splide__arrow splide__arrow--prev"
        />
        <div class="slider__index-list"></div>
        <img
          src="@/assets/icon/icon-down-arrow.png"
          alt="Slider Icon"
          class="slider__btn slider__next-btn splide__arrow splide__arrow--next"
        />
      </div>

      <div class="splide__track">
        <div class="slider__list splide__list">
          <!-- slider item goes here -->
          <Slider
            v-for="item in slidersData"
            :key="item.id"
            :sliderImgUrl="getSliderImg"
            :sliderTitle="item.title"
            :sliderText="item.text"
            :sliderMoreUrl="item.moreUrl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "./unites/Slider";
import { mapGetters } from "vuex";
import Splide from "@splidejs/splide";

export default {
  name: "Sliders",
  components: {
    Slider,
  },
  data: function () {
    return {
      slidersData: [
        {
          id: 1,
          title: "We are growing fast do you see.",
          text:
            "Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length.",
          moreUrl: "#",
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit, amet consectetur.",
          text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor provident possimus, tempora sed eos facere reiciendis.",
          moreUrl: "#",
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet.",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam doloremque doloribus odio corrupti a nostrum hic voluptatem architecto alias?",
          moreUrl: "#",
        },
      ],
    };
  },
  computed: mapGetters(["getSliderImg"]),
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
  },
  mounted() {
    let sliderItem = document.querySelector(".slider__item");

    if (this.notExists(sliderItem)) return;

    new Splide("#splide", {
      type: "loop",
      direction: "ttb",
      height: `${sliderItem.clientHeight}px`,
      autoplay: true,
      pauseOnHover: false,
      pauseOnFocus: false,
    }).mount();

    let pagiWrapper = document.querySelector(".slider__index-list");
    let splidePagi = document.querySelector(".splide__pagination");
    pagiWrapper.insertAdjacentElement("afterbegin", splidePagi);
  },
};
</script>
<template>
  <section class="slider">
    <div id="splide">
      <div class="slider__controller slider__controller--rtl splide__arrows">
        <img src="@/assets/icon/icon-up-arrow.png" alt="Slider Icon" class="slider__btn slider__prev-btn splide__arrow splide__arrow--prev">
        <div class="slider__index-list"></div>
        <img src="@/assets/icon/icon-down-arrow.png" alt="Slider Icon" class="slider__btn slider__next-btn splide__arrow splide__arrow--next">
      </div>

      <div class="splide__track">
        <div class="slider__list splide__list">
          <!-- slider item goes here -->
          <Slider
            :sliderImgUrl="getSliderImg"
            sliderTitle="We are growing fast do you see."
            sliderText="Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length."
            sliderMoreUrl="#"
          />
          <Slider
            :sliderImgUrl="getSliderImg"
            sliderTitle="We are growing fast do you see."
            sliderText="Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length."
            sliderMoreUrl="#"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "./unites/Slider";
import {mapGetters} from "vuex";

export default {
  name: 'Sliders',
  components: {
    Slider
  },
  computed: mapGetters(["getSliderImg"]),
  data: function() {
    return {
      // sliderImg: require("@/assets/bg/bg-slide1.png")
    }
  }
}
</script>
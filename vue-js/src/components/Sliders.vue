<template>
  <section class="slider">
    <div id="splide">
      <div class="slider__controller slider__controller--rtl splide__arrows">
        <img src="images/icon/icon-up-arrow.png" alt="Slider Icon" class="slider__btn slider__prev-btn splide__arrow splide__arrow--prev">
        <div class="slider__index-list"></div>
        <img src="images/icon/icon-down-arrow.png" alt="Slider Icon" class="slider__btn slider__next-btn splide__arrow splide__arrow--next">
      </div>

      <div class="splide__track">
        <div class="slider__list splide__list">
          <div class="slider__item splide__slide" style="background-image: url('./assets/bg/bg-slide1.png');">
            <div class="container">
              <div class="row slider__row">
                <div class="col-12 col-md-6">
                  <h1 class="slider__title text-rtl">We are growing fast <br>do you see.</h1>
                  <p class="slider__text text-rtl">Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length.</p>
                  
                  <div class="btn-wrapper text-rtl">
                    <a href="http://" class="btn">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="slider__item splide__slide" style="background-image: url('./assets/bg/bg-slide1.png');">
            <div class="container">
              <div class="row slider__row">
                <div class="col-12 col-md-6">
                  <h1 class="slider__title text-rtl">We are growing fast <br>do you see.</h1>
                  <p class="slider__text text-rtl">Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length.</p>
                  
                  <div class="btn-wrapper text-rtl">
                    <a href="http://" class="btn">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="slider__item splide__slide" style="background-image: url('./assets/bg/bg-slide1.png');">
            <div class="container">
              <div class="row slider__row">
                <div class="col-12 col-md-6">
                  <h1 class="slider__title text-rtl">We are growing fast <br>do you see.</h1>
                  <p class="slider__text text-rtl">Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length.</p>
                  
                  <div class="btn-wrapper text-rtl">
                    <a href="http://" class="btn">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

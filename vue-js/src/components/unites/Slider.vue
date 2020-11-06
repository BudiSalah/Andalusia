<template>
  <div class="slider__item splide__slide" :style="{backgroundImage: 'url(' + sliderImgUrl + ')'}">
    <div class="container">
      <div class="row slider__row">
        <div class="col-12 col-md-6">
          <h1 class="slider__title text-rtl">{{sliderTitle}}</h1>
          <p class="slider__text text-rtl">{{sliderText}}</p>
          
          <div class="btn-wrapper text-rtl">
            <a :href="sliderMoreUrl" class="btn">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    sliderImgUrl: String,
    sliderTitle: String,
    sliderText: String,
    sliderMoreUrl: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

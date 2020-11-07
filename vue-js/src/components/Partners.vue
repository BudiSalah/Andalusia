<template>
  <section class="partners section">
    <div class="container">
      <Headline
        title="Great Partners"
        class="headline__text--white"
        :icon="whiteIcon"
      />

      <div class="partners__list">
        <div class="partners__item">
          <img
            src="@/assets/icon/partners/icon-cib.png"
            alt="CIB Logo"
            class="partners__img"
          />
        </div>
        <div class="partners__item">
          <img
            src="@/assets/icon/partners/icon-unb.png"
            alt="CIB Logo"
            class="partners__img"
          />
        </div>
        <div class="partners__item">
          <img
            src="@/assets/icon/partners/icon-nbe.png"
            alt="CIB Logo"
            class="partners__img"
          />
        </div>
        <div class="partners__item">
          <img
            src="@/assets/icon/partners/icon-ba.png"
            alt="CIB Logo"
            class="partners__img"
          />
        </div>
        <div class="partners__item">
          <img
            src="@/assets/icon/partners/icon-ncb.png"
            alt="CIB Logo"
            class="partners__img"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Headline from "./unites/Headline";

export default {
  name: "Partners",
  props: {},
  data: () => {
    return {
      whiteIcon: require("@/assets/icon/icon-headling-white.png"),
    };
  },
  components: {
    Headline,
  },
};
</script>
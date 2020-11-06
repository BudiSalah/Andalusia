<template>
  <div class="headline text-center text-uppercase">
    <h1 class="headline__text">{{ title }}</h1>

    <img class="headline__icon" :src="icon" alt="Headline Icon" />
  </div>
</template>

<script>
export default {
  name: "Headline",
  props: {
    title: String,
    icon: {
      type: String,
      default: require("@/assets/icon/icon-headling.png"),
    },
  },
};
</script>
<template>
  <div class="services__item col-12 col-md-4 text-center">
    <img
      class="services__icon"
      :src="iconUrl"
      alt="Service Icon"
    />
    <h3 class="services__title">{{title}}</h3>
    <p class="services__text">
      {{description}}
    </p>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: {
      iconUrl: String,
      title: String,
      description: String
  }
};
</script>
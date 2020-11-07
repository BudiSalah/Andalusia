<template>
  <div class="footer__col col-6 col-lg-3 text-rtl">
    <div class="footer__title">{{menuTitle}}</div>
    <ul class="footer__list">
      <li v-for="item in menuItems" :key="item.id" class="footer__item">
        <router-link class="footer__link" :to="item.url">{{
          item.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VerticalMenu",
  props: {
    menuTitle: String,
    menuItems: Array,
  },
};
</script>
<template>
  <div class="news__list col-12 col-lg-4 mb-5 mb-lg-0">
    <img
      class="officers__pic"
      :src="imgUrl"
      alt="News 1 Pic"
    />

    <div class="officers__card">
      <h2 class="officers__name officers__name--news text-rtl">
        {{title}}
      </h2>
      <h6 class="officers__date officers__date--news text-rtl">{{date}}</h6>
      <p class="officers__quote officers__quote--news text-rtl">
        {{excerpt}}
      </p>

      <div class="btn-wrapper text-rtl">
        <a :href="moreUrl" class="btn btn--read-more">Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsItem",
  props: {
      imgUrl: String,
      title: String,
      date: String,
      excerpt: String,
      moreUrl: String
  }
};
</script>
<template>
  <section class="news section parallax">
    <div class="container">
      <Headline title="recent news" />

      <div class="statistics__list statistics__list--news row parallax__list">
        <!-- news item goes here! -->
        <NewsItem
          v-for="item in newsData"
          :key="item.id"
          :imgUrl="item.imgUrl"
          :title="item.title"
          :date="item.date"
          :excerpt="item.excerpt"
          :moreUrl="item.moreUrl"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Headline from "./unites/Headline";
import NewsItem from "./unites/NewsItem";

export default {
  name: "NewsList",
  components: {
    Headline,
    NewsItem,
  },
  data: () => {
    return {
      newsData: [
        {
          id: 1,
          title: "How to Improve Your Sales Volume",
          date: "23 AUG, 2018",
          excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teminc ididunt ut labore et dolore.",
          moreUrl: "https://news/single",
          imgUrl: require("@/assets/bg/bg-news-1.png")
        },
        {
          id: 2,
          title: "How to Improve Your Sales Volume",
          date: "23 AUG, 2018",
          excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teminc ididunt ut labore et dolore.",
          moreUrl: "https://news/single",
          imgUrl: require("@/assets/bg/bg-news-2.png")
        },
        {
          id: 3,
          title: "How to Improve Your Sales Volume",
          date: "23 AUG, 2018",
          excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod teminc ididunt ut labore et dolore.",
          moreUrl: "https://news/single",
          imgUrl: require("@/assets/bg/bg-news-3.png")
        },
      ],
    };
  },
};
</script>
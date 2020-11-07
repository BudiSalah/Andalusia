<template>
  <section class="statistics section parallax">
    <div class="container">
      <Headline title="statistics" class="headline__text--white" />

      <div class="statistics__list row parallax__list">
        <!-- statistic item goes here -->
        <Statistic
          v-for="item in statisticsData"
          :key="item.id"
          :countTo="item.number"
          :name="item.title"
          :icon="item.iconName"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Headline from "./unites/Headline";
import Statistic from "./unites/Statistic";

export default {
  name: "Statistics",
  components: {
    Headline,
    Statistic,
  },
  data: () => {
    return {
      statisticsData: [
        {
          id: 1,
          title: "clients serviced",
          number: 321570,
          iconName: "walk",
        },
        {
          id: 2,
          title: "machienes",
          number: 5140,
          iconName: "gear",
        },
        {
          id: 3,
          title: "qulified staff",
          number: 61473,
          iconName: "people",
        },
        {
          id: 4,
          title: "sites",
          number: 126,
          iconName: "location",
        },
      ],
    };
  },
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
    stopAnimation: function () {
      let statIcons = document.querySelectorAll(".statistics__icon");
      if (this.notExists(statIcons, true)) return;
      for (let icon of statIcons) {
        icon.addEventListener("click", (e) =>
          e.target.closest(".statistics__icon").classList.add("stop")
        );
      }
    },
  },
  mounted() {
    this.stopAnimation();
  },
};
</script>
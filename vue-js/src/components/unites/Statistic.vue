<template>
  <div class="statistics__item col-12 col-sm-6 col-md-3">
    <div class="statistics__icon">
      <walk_svg v-if="iconName == 'walk'"/>
      <gear_svg v-if="iconName == 'gear'"/>
      <people_svg v-if="iconName == 'people'"/>
      <location_svg v-if="iconName == 'location'"/>
    </div>
    <div class="statistics__num" :count-to="countTo"></div>
    <div class="statistics__name">{{ name }}</div>
  </div>
</template>

<script>
import walk_svg from "./svg-icons/walk";
import people_svg from "./svg-icons/people";
import gear_svg from "./svg-icons/gear";
import location_svg from "./svg-icons/location";

export default {
  name: "Statistic",
  components: {
    walk_svg,
    people_svg,
    gear_svg,
    location_svg
  },
  props: {
    countTo: Number,
    name: String,
    icon: String,
  },
  computed: {
    iconName() {
      switch (this.icon) {
        case "walk":
          return "walk";
        case "gear":
          return "gear";
        case "people":
          return "people";
        case "location":
          return "location";
        default:
          return "";
      }
    },
  },
};
</script>
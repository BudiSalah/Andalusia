<template>
  <section
    class="ourservices section section--services-pb section--services-bg parallax"
  >
    <div class="container">
      <Headline title="Our services" />

      <div class="services row parallax__list">
        <!-- service item goes here! -->
        <Service v-for="item in servicesData" :key="item.id" :iconUrl="item.iconUrl" :title="item.title" :description="item.description" />
      </div>

      <div class="btn-wrapper text-center">
        <a href="#" class="btn btn--trans">View all services</a>
      </div>
    </div>
  </section>
</template>

<script>
import Headline from "./unites/Headline";
import Service from "./unites/Service";

export default {
  name: "Services",
  components: {
    Service,
    Headline
  },
  data: () => {
    return {
      servicesData: [
          {
              id: 1,
              iconUrl: require("@/assets/icon/icon-hospital.png"),
              title: "Service one",
              description: "Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted."
          },
          {
              id: 2,
              iconUrl: require("@/assets/icon/icon-tooth.png"),
              title: "Service two",
              description: "Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted."
          },
          {
              id: 3,
              iconUrl: require("@/assets/icon/icon-hospital2.png"),
              title: "Service three",
              description: "Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted."
          },
      ],
    };
  },
};
</script>
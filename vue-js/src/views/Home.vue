<template>
  <div class="home">
    <Sliders />
    <Services />
    <Overview />
  </div>
</template>

<script>
// @ is an alias to /src
import Sliders from "@/components/Sliders";
import Services from "@/components/Services";
import Overview from "@/components/Overview";

export default {
  name: "Home",
  components: {
    Sliders,
    Services,
    Overview
  },
};
</script>

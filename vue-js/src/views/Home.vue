<template>
  <div class="home">
    <Sliders />
    <Services />
    <Overview />
    <Officers />
  </div>
</template>

<script>
// @ is an alias to /src
import Sliders from "@/components/Sliders";
import Services from "@/components/Services";
import Overview from "@/components/Overview";
import Officers from "@/components/Officers";

export default {
  name: "Home",
  components: {
    Sliders,
    Services,
    Overview,
    Officers
  },
};
</script>

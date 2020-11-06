<template>
  <div class="home">
    <Sliders />
    <Services />
  </div>
</template>

<script>
// @ is an alias to /src
import Sliders from "@/components/Sliders";
import Services from "@/components/Services";

export default {
  name: "Home",
  components: {
    Sliders,
    Services,
  },
};
</script>

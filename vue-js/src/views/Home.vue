<template>
  <div class="home">
    <Sliders />
    <Services />
    <Overview />
    <Officers />
    <Statistics />
    <NewsList />
    <Partners />
  </div>
</template>

<script>
import Sliders from "@/components/Sliders";
import Services from "@/components/Services";
import Overview from "@/components/Overview";
import Officers from "@/components/Officers";
import Statistics from "@/components/Statistics";
import NewsList from "@/components/NewsList";
import Partners from "@/components/Partners";

export default {
  name: "Home",
  components: {
    Sliders,
    Services,
    Overview,
    Officers,
    Statistics,
    NewsList,
    Partners
  },
};
</script>

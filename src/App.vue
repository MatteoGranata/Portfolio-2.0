<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container-effect w-full h-fit">
    <RouterView />
  </div>
</template>


<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  data() {
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap
      .timeline({ yoyo: true })

    const Container = gsap.utils.toArray('.container-effect');

    tl.fromTo(Container, { backgroundColor: "#EADAAD", color: "#DD5E3F" },
      {
        backgroundColor: "#DD5E3F",
        color: "#EADAAD",
        scrollTrigger: {
          trigger: Container,
          start: "center top",
          end: "center bottom",
          scrub: 2,
          markers: false
        }
      })

  },


};
</script>

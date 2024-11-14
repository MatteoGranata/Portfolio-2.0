<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container-effect w-full h-fit">
    <NavBarComponent />
    <RouterView />
  </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import NavBarComponent from './components/NavBarComponent.vue'

export default {
  components: {
    NavBarComponent
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    let tl = gsap.timeline({ yoyo: true })
    const Container = gsap.utils.toArray('.container-effect')
    tl.fromTo(
      Container,
      { backgroundColor: '#DD5E3F', color: '#EADAAD' },
      {
        backgroundColor: '#EADAAD',
        color: '#DD5E3F',
        scrollTrigger: {
          trigger: Container,
          start: 'center top',
          end: 'center bottom',
          scrub: 2,
          markers: false
        }
      }
    )
  }
}
</script>

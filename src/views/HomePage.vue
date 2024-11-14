<template>
  <div
    ref="container"
    class="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-50 bg-[#DD5E3F]"
  >
    <div
      class="flex justify-center items-center text-[2rem] sm:text-[3rem] font-[Roboto] text-[#EADAAD]"
    >
      <span
        v-for="(letter, index) in letters"
        :key="index"
        class="absolute inline-block"
        :ref="(el) => (letterRefs[index] = el)"
      >
        {{ letter }}
      </span>
      <div
        class="absolute left-0 w-full h-fit flex flex-col justify-center content-center items-center"
      >
        <p class="final-letter text-[5rem] sm:text-[7rem] md:text-[10rem] opacity-0" ref="letterG">
          GRANATA
        </p>
        <p class="final-letter text-[5rem] sm:text-[7rem] md:text-[10rem] opacity-0" ref="letterM">
          MATTEO
        </p>
      </div>
    </div>
  </div>
  <PortfolioItem />
</template>

<script>
import { gsap } from 'gsap'
import PortfolioItem from '@/components/PortfolioItem.vue'

export default {
  components: {
    PortfolioItem
  },
  data() {
    return {
      letters: [...'.M.A.T.T.E.O.G.R.A.N.A.T.A..'],
      letterRefs: [],
      loading: true
    }
  },
  mounted() {
    this.animateLetters()
    this.getResponsiveValues()
  },
  methods: {
    getResponsiveValues() {
      if (window.innerWidth < 640) {
        return { xPosition: 180, yPosition: 280 } // Mobile
      } else if (window.innerWidth < 768) {
        return { xPosition: 200, yPosition: 120 }
      } else if (window.innerWidth < 1024) {
        return { xPosition: 320, yPosition: 480 } // Tablet
      } else {
        return { xPosition: 600, yPosition: 300 } // Desktop
      }
    },
    getRandomPosition(min, max) {
      return Math.random() * (max - min) + min
    },
    animateLetters() {
      const { xPosition, yPosition } = this.getResponsiveValues()
      const tl = gsap.timeline({
        repeat: false,
        yoyo: false,
        repeatDelay: false,
        onComplete: this.hidePreloader
      })
      this.letterRefs.forEach((letter, index) => {
        tl.fromTo(
          letter,
          {
            x: this.getRandomPosition(-xPosition, xPosition),
            y: this.getRandomPosition(-yPosition, yPosition),
            opacity: 1
          },
          {
            rotate: 90,
            x: 0,
            y: 0,
            opacity: 0,
            duration: 1.5,
            delay: index * 0.05,
            ease: 'expo.inOut'
          },
          0
        )
      })

      tl.to(
        this.$refs.letterG,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.inOut'
        },
        '-=.7'
      )
      tl.to(
        this.$refs.letterM,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.inOut'
        },
        '-=1'
      )
      tl.to(this.$refs.container, {
        y: '100%',
        duration: 1,
        ease: 'expo.in'
      })
      tl.to([this.$refs.letterM, this.$refs.letterG], {
        duration: 0,
        display: 'none'
      }),
        '-=.1'
    },
    hidePreloader() {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.final-letter {
  transform: scale(0);
}
</style>

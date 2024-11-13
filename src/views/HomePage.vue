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
  <!-- Il contenuto principale della pagina sarà visibile solo quando loading è false -->
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
      letters: [...'.M.A.T.T.E.O.G.R.A.N.A.T.A..'], // Dividi il nome in singole lettere
      letterRefs: [], // Array per tenere i riferimenti a ogni lettera
      loading: true // Variabile per gestire la visibilità del preloader
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
      return Math.random() * (max - min) + min // Restituisce valore casuale tra min e max
    },
    animateLetters() {
      const { xPosition, yPosition } = this.getResponsiveValues()
      const tl = gsap.timeline({
        repeat: false, // Animazione non ripetuta
        yoyo: false,
        repeatDelay: false,
        onComplete: this.hidePreloader // Nasconde il preloader al termine
      })

      // Prima fase: le lettere si muovono verso il centro
      this.letterRefs.forEach((letter, index) => {
        tl.fromTo(
          letter,
          {
            x: this.getRandomPosition(-xPosition, xPosition),
            y: this.getRandomPosition(-yPosition, yPosition),
            opacity: 1 // Visibili all'inizio
          },
          {
            rotate: 90,
            x: 0, // Raggiungono il centro
            y: 0, // Raggiungono il centro
            opacity: 0, // Si fondono scomparendo
            duration: 1.5, // Durata dell'animazione
            delay: index * 0.05, // Ritardo per creare l'effetto a catena
            ease: 'expo.inOut' // Easing per un movimento fluido
          },
          0
        )
      })

      // Seconda fase: dopo che tutte le lettere sono scomparse, appaiono le lettere "G" e "M"
      tl.to(
        this.$refs.letterG,
        {
          opacity: 1,
          scale: 1, // Scala "G"
          duration: 1, // Durata dell'animazione
          ease: 'power2.inOut' // Easing fluido
        },
        '-=.7'
      ) // Inizia leggermente prima della fine della scomparsa delle lettere

      tl.to(
        this.$refs.letterM,
        {
          opacity: 1, // Mostra "M"
          scale: 1, // Scala "M"
          duration: 1, // Durata dell'animazione
          ease: 'power2.inOut' // Easing fluido
        },
        '-=1'
      )
      // Fase finale: nascondi il contenitore del preloader
      tl.to(this.$refs.container, {
        y: '100%',
        duration: 1,
        ease: 'expo.in'
      })
      tl.to([this.$refs.letterM, this.$refs.letterG], {
        duration: 0,
        display: 'none' // Mostra "M"
      }),
        '-=.1'
    },
    hidePreloader() {
      this.loading = false // Nascondi il preloader e mostra la pagina
    }
  }
}
</script>

<style scoped>
.final-letter {
  transform: scale(0);
}
</style>

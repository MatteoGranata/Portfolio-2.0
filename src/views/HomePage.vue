<template>
  <!-- <div ref="container" class="preloader-container bg-[#DD5E3F]">
    <div class="name-container font-[Roboto]  text-[#EADAAD]">
      <span v-for="(letter, index) in letters" :key="index" class="letter" :ref="el => letterRefs[index] = el">
        {{ letter }}
      </span>
      <span class="final-letter" ref="letterG">GRANATA</span>
      <span class="final-letter" ref="letterM">MATTEO</span>
    </div>
  </div> -->

  <!-- Il contenuto principale della pagina sarà visibile solo quando loading è false -->
  <HeaderPage />
  <PortfolioItem />
  <FooterPage />
</template>

<script>
import { gsap } from "gsap";
import HeaderPage from "./HeaderPage.vue";
import PortfolioItem from "@/components/PortfolioItem.vue";
import FooterPage from "./FooterPage.vue";

export default {
  components: {
    HeaderPage,
    PortfolioItem,
    FooterPage,
  },
  data() {
    return {
      letters: [...".M.A.T.T.E.O.G.R.A.N.A.T.A.."], // Dividi il nome in singole lettere
      letterRefs: [], // Array per tenere i riferimenti a ogni lettera
      loading: true,  // Variabile per gestire la visibilità del preloader
    };
  },
  mounted() {
    this.animateLetters();
  },
  methods: {
    getRandomPosition(min, max) {
      return Math.random() * (max - min) + min; // Restituisce un valore casuale tra min e max
    },
    animateLetters() {
      const tl = gsap.timeline({
        repeat: false, // Ripete l'animazione una volta
        yoyo: false,
        repeatDelay: false,
        onComplete: this.hidePreloader, // Nasconde il preloader al termine dell'animazione
      });

      // Prima fase: le lettere si muovono verso il centro
      this.letterRefs.forEach((letter, index) => {
        tl.fromTo(
          letter,
          {
            x: this.getRandomPosition(-600, 600),
            y: this.getRandomPosition(-300, 300),
            opacity: 1, // Visibili all'inizio
          },
          {
            rotate: 90,
            x: 0, // Raggiungono il centro
            y: 0, // Raggiungono il centro
            opacity: 0, // Si fondono scomparendo
            duration: 1.5, // Durata dell'animazione
            delay: index * 0.05, // Ritardo per creare l'effetto a catena
            ease: "expo.inOut", // Easing per un movimento fluido
          },
          0
        );
      });

      // Seconda fase: dopo che tutte le lettere sono scomparse, appaiono le lettere "G" e "M"
      tl.to(
        this.$refs.letterG,
        {
          opacity: 1,
          x: -160, // Mostra "G"
          scale: 0.5, // Scala "G"
          duration: 1, // Durata dell'animazione
          ease: "power2.inOut", // Easing fluido
        },
        "-=.7"
      ); // Inizia leggermente prima della fine della scomparsa delle lettere

      tl.to(
        this.$refs.letterM,
        {
          opacity: 1, // Mostra "M"
          x: 160, // Mostra "M"
          scale: 0.5, // Scala "M"
          duration: 1, // Durata dell'animazione
          ease: "power2.inOut", // Easing fluido
        },
        "-=1"
      );
      // Fase finale: nascondi il contenitore del preloader
      tl.to(this.$refs.container, {
        y: 1000,
        duration: 1,
        ease: "expo.in",
      });
      tl.to(
        [this.$refs.letterM, this.$refs.letterG],
        {
          duration: 0,
          display: "none" // Mostra "M"
        }
      ), "-=.1";
    },
    hidePreloader() {
      this.loading = false; // Nascondi il preloader e mostra la pagina
    },
  },
};
</script>

<style scoped>
.preloader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  /* Assicurati che copra tutto */
}

.name-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
}

.letter {
  position: absolute;
  display: inline-block;
}

.final-letter {
  position: absolute;
  font-size: 10rem;
  opacity: 0;
  transform: scale(0);
  font-weight: bold;
}

.page-content {
  visibility: visible;
}
</style>
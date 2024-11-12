<template>
  <div ref="container" class="work-section font-[Roboto] w-fit h-fit flex flex-col justify-center">
    <div ref="loader" class="w-full h-screen z-50 bg-white fixed left-0 top-full"></div>
    <div
      class="sticky top-1/4 left-1/4 w-full h-full flex items-center justify-center font-[Raleway]"
    >
      <p
        ref="text"
        class="text-[6rem] sm:text-[11rem] md:text-[12rem] lg:text-[20rem] text-center w-fit h-fit"
      >
        WORKS
      </p>
    </div>
    <div class="grid grid-cols-1 gap-10 sm:gap-60 lg:gap-0 lg:grid-cols-2 h-fit drop-shadow-md">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="[
          'section',
          sectionClasses[index],
          'h-max lg:h-screen w-full flex flex-col relative px-10 object-contain',
          'perspective'
        ]"
      >
        <div ref="videos" class="w-screen sm:w-fit h-fit p-4">
          <video
            :src="image"
            :alt="titles[index]"
            class="image w-full h-full rounded-lg"
            @mousemove="handleMouseMove($event, index)"
            @mouseleave="handleMouseLeave(index)"
            @click="handleVideoClick(index)"
            autoplay
            muted
            loop
          ></video>
          <div class="sm:text-2xl flex justify-between w-full h-fit">
            <p class="">{{ titles[index] }}</p>
            <p class="">{{ others[index] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import PrimoPortfolioVideo from '../assets/video/Registrazione_Primo-Portfolio.mp4'
import PortfolioRagusaVideo from '../assets/video/Registrazione_Portfolio-Ragusa.mp4'
import CounterVideo from '../assets/video/Registrazione_Contatore.mp4'
import ReadBooksVideo from '../assets/video/Registrazione_ReadBooks.mp4'
// video moove
import TicTacToeVideo from '../assets/video/Registrazione_Tic-Tac-Toe.mp4'
import SunneeVideo from '../assets/video/Registrazione_Sunnee.mp4'
// video orizon
import AngelVideo from '../assets/video/Registrazione_Angel.mp4'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'ImageScroll',
  data() {
    return {
      titles: [
        'Primo Portfolio',
        'Portfolio Raugusa',
        'Counter',
        'ReadBooks',
        'Moove',
        'Tic Tac Toe',
        'Sunnee',
        'Orizon',
        'Angel'
      ],
      others: [
        'CSS | HTML', // primo portfolio
        'CSS | HTML - Bootstrap', // portfolio ragusa
        'JavaScript', // counter
        'JavaScript | HTML | CSS - Webpack - axios', // readbooks
        'Typescript', // moove
        'Vue', // tic tac toe
        'Vue Router', // sunnee
        'Node | API-JsonRESTful', // orizon
        'Vue Router | Node - TailwindCSS - MongoDB Atlas' // angel
      ],
      images: [
        PrimoPortfolioVideo,
        PortfolioRagusaVideo,
        CounterVideo,
        ReadBooksVideo,
        AngelVideo, // moove
        TicTacToeVideo,
        SunneeVideo,
        AngelVideo, // orizon
        AngelVideo
      ],
      colors: [
        '#00051C', // Colore per primo portfolio
        '#2E2E2E', // Colore per portfolio ragusa
        '#00051C', // Colore per Counter
        '#FCBA69', // Colore per Readbooks
        '#FF4500', // Colore per moove
        '#0D0D0D', // Colore per Tic-Tac-toe
        '#FFDEAD', // Colore per Sunnee
        '#20B2AA', // Colore per orizon
        '#F8F8FF' // Colore per angel
      ],
      textColors: [
        '#E2B6FF', // Colore per primo portfolio
        '#FDD835', // Colore per portfolio ragusa
        '#E2B6FF', // Colore per Counter
        '#000000', // Colore per ReadBooks
        '#FF4500', // Colore per moove
        '#E4DFD9', // Colore per Tic-Tac-Toe
        '#000000', // Colore per Sunnee
        '#20B2AA', // Colore per orizon
        '#1E293B' // Colore per angel
      ],
      sectionClasses: [
        'justify-center sm:items-start items-center',
        'justify-end sm:items-end items-center',
        'justify-center sm:items-start items-center',
        'justify-end sm:items-end items-center',
        'justify-center sm:items-start items-center',
        'justify-end sm:items-end items-center',
        'justify-center sm:items-start items-center',
        'justify-end sm:items-end items-center',
        'justify-center sm:items-start items-center',
        'justify-end sm:items-end items-center'
      ],
      path: [
        '/primo-portfolio',
        '/portfolio-ragusa',
        '/counter',
        '/readbooks',
        '/moove',
        '/tic-tac-toe',
        '/sunnee',
        '/orizon',
        '/angel'
      ]
    }
  },
  methods: {
    handleVideoClick(index) {
      const loader = this.$refs.loader
      // Seleziona il video cliccato
      // const container = this.$refs.container;

      // Animazione di espansione
      gsap.fromTo(
        loader,
        { top: '100%', backgroundColor: this.colors[index] },
        {
          duration: 1, // Durata dell'animazione
          top: 0,
          ease: 'power3.in', // Effetto easing
          onComplete: () => {
            // Una volta terminata l'animazione, mostra il nuovo componente
            this.$router.push({ path: this.path[index] }).then(() => {
              // Ricarica la pagina solo dopo che la navigazione è stata completata
              window.location.reload()
              localStorage.setItem('textColor', this.colors[index])
              localStorage.setItem('color', this.textColors[index])
            })
          }
        }
      )
    },
    handleMouseMove(event, index) {
      const video = this.$refs.videos[index] // Ottieni il video corrispondente
      const container = this.$refs.container
      const text = this.$refs.text
      const rect = video.getBoundingClientRect()

      // Calcola le posizioni relative del mouse
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      // Calcola la rotazione in base alla posizione del mouse
      const rotateX = (mouseY / rect.height - 0.5) * -7 // Rotazione sull'asse X
      const rotateY = (mouseX / rect.width - 0.5) * 7 // Rotazione sull'asse Y

      // Cambia il colore dello sfondo in base all'indice del video

      // Utilizza GSAP per animare la trasformazione con perspective
      gsap.to(video, {
        duration: 0.3, // Durata dell'animazione
        rotationX: rotateX, // Applica la rotazione calcolata sull'asse X
        rotationY: rotateY, // Applica la rotazione calcolata sull'asse Y
        ease: 'power2.out', // Effetto di easing
        transformOrigin: '50% 50%' // Origine della trasformazione
      })
      gsap.to(container, {
        duration: 0.5, // Durata dell'animazione
        backgroundColor: this.colors[index],
        ease: 'power2.out' // Effetto di easing
      })
      gsap.to(text, {
        duration: 0.5, // Durata dell'animazione
        color: this.textColors[index],
        ease: 'power2.out' // Effetto di easing
      })
    },
    handleMouseLeave(index) {
      const video = this.$refs.videos[index] // Ottieni il video corrispondente
      const container = this.$refs.container
      const text = this.$refs.text
      // Utilizza GSAP per riportare la trasformazione a zero (posizione originale)
      gsap.to(video, {
        duration: 0.5, // Durata dell'animazione
        rotationX: 0, // Ripristina la rotazione sull'asse X
        rotationY: 0, // Ripristina la rotazione sull'asse Y
        ease: 'power2.inOut' // Effetto di easing
      })
      // Ripristina il colore di sfondo originale
      gsap.to(container, {
        duration: 0.5, // Durata dell'animazione
        backgroundColor: 'transparent',
        ease: 'power2.out' // Effetto di easing
      })

      gsap.to(text, {
        duration: 0.5, // Durata dell'animazione
        color: '',
        ease: 'power2.inOut' // Effetto di easing
      })
    }
  }
}
</script>

<style scoped>
.section {
  /* Assicurati che non ci siano sovrapposizioni */
  perspective: 1000px;
  /* Imposta la prospettiva per l'effetto 3D */
}
</style>

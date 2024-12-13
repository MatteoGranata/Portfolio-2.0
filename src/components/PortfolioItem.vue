<template>
  <div ref="container" class="font-[Roboto] w-fit h-fit flex flex-col justify-center">
    <HeaderPage />
    <div class="w-full h-full work-section">
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
              playsinline
              loading="lazy"
            ></video>
            <div class="sm:text-2xl flex justify-between w-full h-fit">
              <p class="">{{ titles[index] }}</p>
              <p class="">{{ others[index] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterPage />
  </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import HeaderPage from '@/views/HeaderPage.vue'
import FooterPage from '@/views/FooterPage.vue'

import PrimoPortfolioVideo from '../assets/video/Registrazione_Primo-Portfolio.mp4'
import PortfolioRagusaVideo from '../assets/video/Registrazione_Portfolio-Ragusa.mp4'
import CounterVideo from '../assets/video/Registrazione_Contatore.mp4'
import ReadBooksVideo from '../assets/video/Registrazione_ReadBooks.mp4'
import TicTacToeVideo from '../assets/video/Registrazione_Tic-Tac-Toe.mp4'
import SunneeVideo from '../assets/video/Registrazione_Sunnee.mp4'
import AngelVideo from '../assets/video/Registrazione_Angel.mp4'

gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    HeaderPage,
    FooterPage
  },
  name: 'ImageScroll',
  data() {
    return {
      titles: [
        'Primo Portfolio',
        'Portfolio Raugusa',
        'Counter',
        'ReadBooks',
        'Tic Tac Toe',
        'Sunnee',
        'Angel'
      ],
      others: [
        'CSS | HTML', // primo portfolio
        'CSS | HTML - Bootstrap', // portfolio ragusa
        'JavaScript', // counter
        'JavaScript | HTML | CSS - Webpack - axios', // readbooks
        'Vue', // tic tac toe
        'Vue Router', // sunnee
        'Vue Router | Node - TailwindCSS - MongoDB Atlas' // angel
      ],
      images: [
        PrimoPortfolioVideo,
        PortfolioRagusaVideo,
        CounterVideo,
        ReadBooksVideo,
        TicTacToeVideo,
        SunneeVideo,
        AngelVideo
      ],
      colors: [
        '#00051C', // Colore per primo portfolio
        '#2E2E2E', // Colore per portfolio ragusa
        '#00051C', // Colore per Counter
        '#FCBA69', // Colore per Readbooks
        '#0D0D0D', // Colore per Tic-Tac-toe
        '#FFDEAD', // Colore per Sunnee
        '#F8F8FF' // Colore per angel
      ],
      textColors: [
        '#E2B6FF', // Colore per primo portfolio
        '#FDD835', // Colore per portfolio ragusa
        '#E2B6FF', // Colore per Counter
        '#000000', // Colore per ReadBooks
        '#E4DFD9', // Colore per Tic-Tac-Toe
        '#000000', // Colore per Sunnee
        '#1E293B' // Colore per angel
      ],
      sectionClasses: [
        'justify-center sm:items-start items-center',
        'justify-end sm:items-end items-center',
        'justify-center sm:items-start items-center',
        'justify-end sm:items-end items-center',
        'justify-center sm:items-start items-center',
        'justify-end sm:items-end items-center',
        'justify-center sm:items-start items-center'
      ],
      path: [
        '/primo-portfolio',
        '/portfolio-ragusa',
        '/counter',
        '/readbooks',
        '/tic-tac-toe',
        '/sunnee',
        '/angel'
      ]
    }
  },
  methods: {
    handleVideoClick(index) {
      const loader = this.$refs.loader
      gsap.fromTo(
        loader,
        { top: '100%', backgroundColor: this.colors[index] },
        {
          duration: 1,
          top: 0,
          ease: 'power3.in',
          onComplete: () => {
            this.$router.push({ path: this.path[index] }).then(() => {
              localStorage.setItem('textColor', this.colors[index])
              localStorage.setItem('color', this.textColors[index])
              window.location.reload()
            })
          }
        }
      )
    },
    handleMouseMove(event, index) {
      const video = this.$refs.videos[index]
      const container = this.$refs.container
      const text = this.$refs.text
      const rect = video.getBoundingClientRect()

      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      const rotateX = (mouseY / rect.height - 0.5) * -7
      const rotateY = (mouseX / rect.width - 0.5) * 7

      gsap.to(video, {
        duration: 0.3,
        rotationX: rotateX,
        rotationY: rotateY,
        ease: 'power2.out',
        transformOrigin: '50% 50%'
      })
      gsap.to(container, {
        duration: 0.5,
        backgroundColor: this.colors[index],
        ease: 'power2.out'
      })
      gsap.to(text, {
        duration: 0.5,
        color: this.textColors[index],
        ease: 'power2.out'
      })
    },
    handleMouseLeave(index) {
      const video = this.$refs.videos[index]
      const container = this.$refs.container
      const text = this.$refs.text
      gsap.to(video, {
        duration: 0.5,
        rotationX: 0,
        rotationY: 0,
        ease: 'power2.inOut'
      })
      gsap.to(container, {
        duration: 0.5,
        backgroundColor: 'transparent',
        ease: 'power2.out'
      })
      gsap.to(text, {
        duration: 0.5,
        color: '',
        ease: 'power2.inOut'
      })
    }
  }
}
</script>

<style scoped>
.section {
  perspective: 1000px;
}
</style>

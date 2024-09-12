<template>
  <div class="grid grid-cols-40 grid-rows-20 w-full h-screen absolute z-10 mix-blend-difference">
    <div v-for="( index) in squares" :key="index" class="square w-12 h-12 bg-white opacity-0"
      @mouseenter="handleMouseEnter($event)"></div>
  </div>
  <div class="font-[League-Spartan] text-[#F0ECE2] bg-[#000000] font-bold flex flex-col w-full h-screen m-0">
    <div class="flex items-center justify-center w-full h-fit">
      <h1 class="text-[8rem]">
        FULL STACK DEVELOPER
      </h1>
    </div>
    <div class="flex items-top justify-center w-[30%] h-full w-full">
      <div class="flex flex-col items-center">
        <div class="flex flex-row text-[25rem]">
          <p class="w-fit h-fit bg-transparent text-end leading-[7.rem] m">
            M
          </p>
          <p class="w-fit h-fit bg-transparent text-end leading-[7.rem] g">
            G
          </p>
        </div>
        <div class="flex flex-row w-fit uppercase">
          <p id="nome" class="bg-transparent w-fit h-fit mb-5 mr-[20px] text-[4rem] text-end leading-[7.rem] name">
            Matteo
          </p>
          <p id="cognome" class="w-fit bg-transparent h-fit mb-5 text-[4rem] text-end leading-[7.rem] surname">
            Granata
          </p>
        </div>
      </div>
    </div>
  </div>
  <PortfolioItem />
</template>

<script>
import PortfolioItem from '../components/PortfolioItem.vue'
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

export default {
  name: "HoverChangeColorSquares",
  components: {
    PortfolioItem
  },
  data() {
    return {
      squares: new Array(800).fill(null), // Crea una griglia di 400 quadrati (20x20)
    };
  },
  methods: {
    handleMouseEnter(event) {
      const tl = gsap
        .timeline({ yoyo: false })
      // Quando il mouse entra nel quadrato, cambia colore con GSAP
      tl.to(event.target, {
        opacity: '100%', // Cambia colore (ad esempio, rosso)
        duration: 0, // Durata della transizione
        ease: "power2.inOut",
        borderRadius: 0,

      });
      tl.to(event.target, {
        opacity: 0, // Cambia colore (ad esempio, rosso)
        duration: .1, // Durata della transizione
        ease: "power2.inOut",
        borderRadius: 0,
      }, '+=0.2');
    },
  },

  setup() {
    const main = ref();
    let ctx;

    onMounted(() => {

      const name = gsap.utils.toArray('.name');
      const surname = gsap.utils.toArray('.surname');

      const M = gsap.utils.toArray('.m');
      const G = gsap.utils.toArray('.g');

      const tl = gsap
        .timeline({ repeat: -1, yoyo: false })



      tl.to([M, G], {
        rotation: 180,
        y: (i) => (i === 0 ? -140 : 140),
        duration: 1.5,
        ease: "elastic.inOut"
      })

      tl.to([M, G], {
        x: (i) => (i === 0 ? 330 : -330),
        duration: 1,
        ease: "elastic.inOut"
      })

      tl.to([M, G], {
        rotation: 360,
        y: 'start',
        duration: 1.5,
        ease: "elastic.inOut"
      })

      tl.to([name, surname], {
        x: (i) => (i === 0 ? 310 : -280),
        y: -150,
        duration: 1.5,
        ease: "elastic.inOut"
      }, "-=1.5")

      tl.to([M, G], {
        rotation: 180,
        y: (i) => (i === 0 ? 140 : -140),
        duration: 1.5,
        ease: "elastic.inOut"
      })
      tl.to([name, surname], {
        y: "start",
        duration: 1.5,
        ease: "elastic.inOut"
      }, "-=2")

      tl.to([M, G], {
        x: "start",
        duration: 1,
        ease: "elastic.inOut"
      })

      tl.to([M, G], {
        rotation: 360,
        y: "start",
        duration: 1.5,
        ease: "elastic.inOut"
      })
      tl.to([name, surname], {
        x: 0,
        y: -150,
        duration: 1.5,
        ease: "elastic.inOut",
      }, "-=1.5")
      tl.to([name, surname], {
        y: 0,
        duration: 1.5,
        ease: "elastic.inOut"
      }, "-=.3")




    }, main.value); // <- Scope!

    onUnmounted(() => {
      ctx.revert(); // <- Easy Cleanup!
    });

    return { main };
  },
};
</script>

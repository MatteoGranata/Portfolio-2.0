<template>
  <div class="font-[League-Spartan] font-bold text-[11rem] flex flex-row w-full h-screen border border-green-200 m-0">
    <div class="flex items-center justify-center w-[30%] h-full border border-blue-500">
      <div class="flex flex-col">
        <div class="flex flex-row">
          <p class="w-fit h-fit mb-5 text-black text-end leading-[7.rem] m">
            M
          </p>
          <p class="w-fit h-fit mb-5 text-black text-end leading-[7.rem] g">
            G
          </p>
        </div>
        <div class="flex flex-row">
          <p id="nome" class="w-fit h-fit mb-5 mr-2 text-[2rem] text-black text-end leading-[7.rem] name">
            Matteo
          </p>
          <p id="cognome" class="w-fit h-fit mb-5 text-[2rem] text-black text-end leading-[7.rem] surname">
            Granata
          </p>
        </div>
      </div>
    </div>
    <div class="flex items-center w-full h-full border border-yellow-500">
      <h1 class="w-fit h-fit mt-5 ml-3 leading-[7.5rem] work border border-yellow-200">
        FULL STACK DEVELOPER
      </h1>
    </div>
  </div>
  <PortfolioItem />
</template>

<script>
import PortfolioItem from '../components/PortfolioItem.vue'
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

export default {
  components: {
    PortfolioItem
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
        y: (i) => (i === 0 ? -65 : 65),
        duration: 1.5,
        ease: "elastic.inOut"
      })

      tl.to([M, G], {
        x: (i) => (i === 0 ? 145 : -145),
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
        x: (i) => (i === 0 ? 150 : -100),
        duration: 1.5,
        ease: "elastic.inOut"
      }, "-=1.5")
      tl.to([M, G], {
        rotation: 180,
        y: (i) => (i === 0 ? 65 : -65),
        duration: 1.5,
        ease: "elastic.inOut"
      })

      tl.to([M, G], {
        x: 0,
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
        x: 0,
        duration: 1.5,
        ease: "elastic.inOut",
      }, "-=1.5")




    }, main.value); // <- Scope!

    onUnmounted(() => {
      ctx.revert(); // <- Easy Cleanup!
    });

    return { main };
  },
};
</script>
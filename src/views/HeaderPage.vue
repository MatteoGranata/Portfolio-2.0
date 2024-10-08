<template>

  <div class="font-[Anton] text-[#DD5E3F] bg-[#EADAAD] font-bold flex flex-col w-full h-screen m-0">
    <div class="flex items-center justify-center w-full h-fit">
      <h1 class="text-[8rem]">
        FULL STACK DEVELOPER
      </h1>
    </div>
    <div class="flex items-top justify-center h-full w-full">
      <div class="flex flex-col items-center ">
        <div class="flex flex-row text-[25rem] font-[Raleway]">
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
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';

export default {
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

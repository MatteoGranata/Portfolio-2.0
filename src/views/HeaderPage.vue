<template>
  <div
    class="font-[Roboto] font-bold flex flex-col justify-center w-full h-screen sm:h-full md:h-screen m-0"
  >
    <div class="flex items-center justify-center w-full h-fit">
      <h1 class="text-[4rem] text-center sm:text-[3.3rem] md:text-[8rem] leading-tight">
        FULL STACK DEVELOPER
      </h1>
    </div>
    <div class="flex items-top justify-center h-fit w-full">
      <div class="flex flex-col items-center">
        <div
          class="flex flex-row text-[10rem] sm:text-[8rem] md:text-[20rem] lg:text-[25rem] font-[Raleway]"
        >
          <p class="w-fit h-fit bg-transparent text-end m">M</p>
          <p class="w-fit h-fit bg-transparent text-end g">G</p>
        </div>
        <div class="flex flex-row w-fit uppercase">
          <p
            id="nome"
            class="bg-transparent w-fit h-fit mb-5 mr-[3vw] text-[2.6rem] sm:text-[3.2rem] md:text-[4rem] text-end leading-[7.rem] name"
          >
            Matteo
          </p>
          <p
            id="cognome"
            class="w-fit bg-transparent h-fit mb-5 text-[2.6rem] sm:text-[3.2rem] md:text-[4rem] text-end leading-[7.rem] surname"
          >
            Granata
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'

export default {
  setup() {
    const main = ref()
    let ctx

    onMounted(() => {
      const name = gsap.utils.toArray('.name')
      const surname = gsap.utils.toArray('.surname')
      const M = gsap.utils.toArray('.m')
      const G = gsap.utils.toArray('.g')

      const getResponsiveValues = () => {
        if (window.innerWidth < 640) {
          // Mobile
          return {
            xMove: 130,
            yMove: 70,
            rotation: 180,
            yPos: -30,
            nameX: 180,
            surnameX: -160
          }
        } else if (window.innerWidth < 768) {
          return {
            xMove: 100,
            yMove: 50,
            rotation: 180,
            yPos: -30,
            nameX: 230,
            surnameX: -200
          }
        } else if (window.innerWidth < 1024) {
          // Tablet
          return {
            xMove: 280,
            yMove: 120,
            rotation: 180,
            yPos: -120,
            nameX: 310,
            surnameX: -280
          }
        } else {
          // Desktop
          return {
            xMove: 330,
            yMove: 140,
            rotation: 180,
            yPos: -150,
            nameX: 310,
            surnameX: -280
          }
        }
      }
      const updateTimeline = () => {
        const { xMove, yMove, rotation, yPos, nameX, surnameX } = getResponsiveValues()
        const tl = gsap.timeline({ repeat: -1, yoyo: false })
        tl.clear()

        tl.to([M, G], {
          rotation,
          y: (i) => (i === 0 ? -yMove : yMove),
          duration: 1.5,
          ease: 'elastic.inOut'
        })

        tl.to([M, G], {
          x: (i) => (i === 0 ? xMove : -xMove),
          duration: 1,
          ease: 'elastic.inOut'
        })

        tl.to([M, G], {
          rotation: rotation * 2,
          y: 'start',
          duration: 1.5,
          ease: 'elastic.inOut'
        })

        tl.to(
          [name, surname],
          {
            x: (i) => (i === 0 ? nameX : surnameX),
            y: yPos,
            duration: 1.5,
            ease: 'elastic.inOut'
          },
          '-=1.5'
        )

        tl.to([M, G], {
          rotation,
          y: (i) => (i === 0 ? yMove : -yMove),
          duration: 1.5,
          ease: 'elastic.inOut'
        })
        tl.to(
          [name, surname],
          {
            y: 'start',
            duration: 1.5,
            ease: 'elastic.inOut'
          },
          '-=2'
        )

        tl.to([M, G], {
          x: 'start',
          duration: 1,
          ease: 'elastic.inOut'
        })

        tl.to([M, G], {
          rotation: rotation * 2,
          y: 'start',
          duration: 1.5,
          ease: 'elastic.inOut'
        })
        tl.to(
          [name, surname],
          {
            x: 0,
            y: yPos,
            duration: 1.5,
            ease: 'elastic.inOut'
          },
          '-=1.5'
        )
        tl.to(
          [name, surname],
          {
            y: 0,
            duration: 1.5,
            ease: 'elastic.inOut'
          },
          '-=.3'
        )
      }

      updateTimeline()

      window.addEventListener('resize', updateTimeline)

      onUnmounted(() => {
        ctx.revert()
        window.removeEventListener('resize', updateTimeline)
      })
    }, main.value)

    return { main }
  }
}
</script>

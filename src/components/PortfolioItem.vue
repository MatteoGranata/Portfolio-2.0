<template>
    <main class="h-screen w-full border border-red-500 font-[League-Spartan] text-7xl">
        <div class="flex flex-col text-center items-center w-full h-full cards border-black" ref="main">

            <div class="card object-contain w-full container h-20 border border-black my-0 bg-white ">
                <p>COVID-19 manifesto</p>
            </div>
            <div class="card object-contain w-full container h-20 border border-black my-0 bg-white">
                <p>MILANO BEAUTY WEEK illustration</p>
            </div>
            <div class="card object-contain w-full container h-20 border border-black my-0 bg-white">
                <p>CITROËN restyling</p>
            </div>
            <div class="card object-contain w-full container h-20 border border-black my-0 bg-white">
                <p>DnA Web Development</p>
            </div>
            <div class="card object-contain w-full container h-20 border border-black my-0 bg-white">
                <p>TAFFO manifesto</p>
            </div>
            <div class="card object-contain w-full container h-20 border border-black my-0 bg-white">
                <p>HAi PAura vero? manifesto</p>
            </div>
            <div class="card object-contain w-full container h-20 border border-black my-0 bg-white">
                <p>CALCIO Ca segnalibro</p>
            </div>
            <div class="card object-contain w-full container h-20 border border-black my-0 bg-white">
                <p>CONTATORE Javascript app</p>
            </div>
            <div class="card object-contain w-full container h-20 border border-black my-0 bg-white">
                <p>SUNNEE Vue.js app</p>
            </div>
            <div class="card object-contain w-full container h-20 border border-black my-0 bg-white">
                <p>ANGEL Full-Stack app</p>
            </div>
            <div class="card object-contain w-full container h-20 border border-black my-0 bg-white">
                <p>ReadBooks JavaScript API app</p>
            </div>
            <div class="card object-contain w-full container h-20 border border-black my-0 bg-white">
                <p>Orizon API-JsonRESTfull</p>
            </div>
            <div class="card object-contain w-full container h-20 border border-black my-0 bg-white">
                <p>Tic-Tac-Toe Vue.js app</p>
            </div>
        </div>

    </main>
    <section class="h-screen border border-red-500">
    </section>
    <section class="h-screen"></section>
    <section class="h-screen"></section>


</template>




<script>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default {
    setup() {

        gsap.registerPlugin(ScrollTrigger);

        const main = ref();
        let ctx;

        onMounted(() => {
            const cards = gsap.utils.toArray(".card");

            cards.forEach((card) => {
                const tl = gsap.timeline()
                tl.to(card, {
                    start: "+=500",
                    end: "bottom bottom",
                    zIndex: 1,
                    scale: 1.2,
                    rotateX: 0,
                    scrollTrigger: {
                        trigger: card,
                        start: 'bottom bottom',
                        end: 'center center',
                        markers: true,
                        scrub: true,

                    },
                });
                // tl.from(card, {
                //     x: -500,
                //     zIndex: 1,
                //     scale: 1.2,
                //     rotateX: 0,
                //     scrollTrigger: {
                //         trigger: card,
                //         start: 'center center',
                //         end: 'top top',
                //         scrub: true,
                //         markers: true,

                //     },
                // });

                // ScrollTrigger.create({
                //     trigger: card,
                //     start: "top top",
                //     pin: true,
                //     pinSpacing: false,
                //     markers: true,
                //     id: 'pin',
                //     end: 'max',
                // });




            }, main.value);
        });

        onUnmounted(() => {
            ctx.revert(); // <- Easy Cleanup!
            ScrollTrigger.getAll().forEach((st) => st.kill());

        });
    }
}
</script>

<style>
.card {
    transform: rotateX(45deg)
}
</style>
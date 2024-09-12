<!-- <template> -->
<!-- <main class="h-screen w-full border border-red-500 font-[League-Spartan] text-7xl">
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
    <section class="h-screen"></section> -->

<!-- <div class="w-full h-screen">
        <div class="object-contain w-fit h-fit m-2 rounded-xl p-1 px-2 border border-black bg-white ">
            <p>COVID-19 manifesto</p>
        </div>
        <div class="object-contain w-fit h-fit m-2 rounded-xl p-1 px-2 border border-black bg-white">
            <p>MILANO BEAUTY WEEK illustration</p>
        </div>
        <div class="object-contain w-fit h-fit m-2 rounded-xl p-1 px-2 border border-black bg-white">
            <p>CITROËN restyling</p>
        </div>
        <div class="object-contain w-fit h-fit m-2 rounded-xl p-1 px-2 border border-black bg-white">
            <p>DnA Web Development</p>
        </div>
        <div class="object-contain w-fit h-fit m-2 rounded-xl p-1 px-2 border border-black bg-white">
            <p>TAFFO manifesto</p>
        </div>
        <div class="object-contain w-fit h-fit m-2 rounded-xl p-1 px-2 border border-black bg-white">
            <p>HAi PAura vero? manifesto</p>
        </div>
        <div class="object-contain w-fit h-fit m-2 rounded-xl p-1 px-2 border border-black bg-white">
            <p>CALCIO Ca segnalibro</p>
        </div>
        <div class="object-contain w-fit h-fit m-2 rounded-xl p-1 px-2 border border-black bg-white">
            <p>CONTATORE Javascript app</p>
        </div>
        <div class="object-contain w-fit h-fit m-2 rounded-xl p-1 px-2 border border-black bg-white">
            <p>SUNNEE Vue.js app</p>
        </div>
        <div class="object-contain w-fit h-fit m-2 rounded-xl p-1 px-2 border border-black bg-white">
            <p>ANGEL Full-Stack app</p>
        </div>
        <div class="object-contain w-fit h-fit m-2 rounded-xl p-1 px-2 border border-black bg-white">
            <p>ReadBooks JavaScript API app</p>
        </div>
        <div class="object-contain w-fit h-fit m-2 rounded-xl p-1 px-2 border border-black bg-white">
            <p>Orizon API-JsonRESTfull</p>
        </div>
        <div class="object-contain w-fit h-fit m-2 rounded-xl p-1 px-2 border border-black bg-white">
            <p>Tic-Tac-Toe Vue.js app</p>
        </div>
    </div>
</template> -->




<!-- <script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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




//     }, main.value);
// });

// onUnmounted(() => {
//     ctx.revert(); // <- Easy Cleanup!
//     ScrollTrigger.getAll().forEach((st) => st.kill());

// });

// </script>

// <style>
// .card {
//     transform: rotateX(45deg)
// }
// </style>


--->

<template>
    <section class="p-8 bg-gray-100">
        <h2 class="text-3xl font-bold text-center mb-8">I nostri Progetti</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(project, index) in projects" :key="index"
                class="project-card relative bg-white p-6 rounded-lg shadow-lg">
                <img :src="project.image" alt="Project Image" class="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
                <p class="text-gray-600">{{ project.description }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "ProjectSection",
    data() {
        return {
            projects: [
                { title: "Progetto 1", description: "Descrizione del progetto 1", image: "https://via.placeholder.com/400" },
                { title: "Progetto 2", description: "Descrizione del progetto 2", image: "https://via.placeholder.com/400" },
                { title: "Progetto 3", description: "Descrizione del progetto 3", image: "https://via.placeholder.com/400" },
                { title: "Progetto 4", description: "Descrizione del progetto 4", image: "https://via.placeholder.com/400" },
                { title: "Progetto 5", description: "Descrizione del progetto 5", image: "https://via.placeholder.com/400" },
            ],
        };
    },
    mounted() {
        this.initAnimations();
    },
    methods: {
        initAnimations() {
            gsap.utils.toArray('.project-card').forEach(card => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                });

                gsap.to(card, {
                    duration: 0.3,
                    scale: 1.05,
                    ease: "power1.inOut",
                    paused: true,
                    onStart: () => card.classList.add('hover:scale-105'),
                    onComplete: () => card.classList.remove('hover:scale-105'),
                });
            });
        },
    },
};
</script>

<style scoped>
.project-card:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 0.3s ease;
}
</style>
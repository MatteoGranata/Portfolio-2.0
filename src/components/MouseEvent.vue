<template>
    <div class="grid grid-cols-40 grid-rows-20 w-[99vw] h-screen absolute z-10 mix-blend-difference">
        <div v-for="( index) in squares" :key="index" class="square w-12 h-12 bg-white opacity-0 "
            @mouseenter="handleMouseEnter($event)"></div>
    </div>

</template>

<script>
import gsap from 'gsap';

export default {
    name: "HoverChangeColorSquares",
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
};
</script>
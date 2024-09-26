<template>
    <div class="name-container font-[Roboto] bg-[#EADAAD] text-[#DD5E3F] ">

        <span v-for="(letter, index) in letters" :key="index" class="letter" :ref="el => letterRefs[index] = el">
            {{ letter }}
        </span>
        <!-- Lettere grandi "G" e "M" che appariranno alla fine -->
        <span class="final-letter" ref="letterG">GRANATA</span>
        <span class="final-letter" ref="letterM">MATTEO</span>

        <div ref="line" class="border border-[#DD5E3F] w-full h-0 absolute hidden">
        </div>
    </div>

</template>

<script>
import { gsap } from "gsap";

export default {
    data() {
        return {
            letters: [...".M.A.T.T.E.O.G.R.A.N.A.T.A.."], // Dividi il nome in singole lettere
            letterRefs: [], // Array per tenere i riferimenti a ogni lettera
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
                repeatDelay: false
                // Le lettere tornano indietro
            });

            // Prima fase: le lettere si muovono verso il centro
            this.letterRefs.forEach((letter, index) => {
                tl.fromTo(
                    letter,
                    {
                        x: this.getRandomPosition(-500, 500),
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
                    }, 0
                );
            });

            // Seconda fase: dopo che tutte le lettere sono scomparse, appaiono le lettere "G" e "M"
            tl.to(this.$refs.letterG, {
                opacity: 1,
                x: -160,// Mostra "G"
                scale: .5, // Scala "G"
                duration: 1, // Durata dell'animazione
                ease: "power2.inOut", // Easing fluido
            }, "-=.7"); // Inizia leggermente prima della fine della scomparsa delle lettere

            tl.to(this.$refs.letterM, {
                opacity: 1, // Mostra "M"
                x: 160,// Mostra "G"
                scale: .5, // Scala "M"
                duration: 1, // Durata dell'animazione
                ease: "power2.inOut", // Easing fluido
            }, "-=1");

            // Inizia leggermente prima della fine dell'apparizione di "G"
            tl.to(this.$refs.line, {
                display: 'block',
                height: "100%",
                duration: 2,
                ease: "power2.in",
            }) // Inizia leggermente prima della fine dell'apparizione di "G"
            tl.to(this.$refs.line, {
                opacity: 0,
                duration: 0,
                ease: "power2.in",
            }) // Inizia leggermente prima della fine dell'apparizione di "G"
        },
    },
};
</script>

<style scoped>
.name-container {
    position: relative;
    width: 100%;
    height: 100vh;
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
    /* Partono invisibili */
    transform: scale(0);
    /* Partono molto piccole */
    font-weight: bold;
}
</style>

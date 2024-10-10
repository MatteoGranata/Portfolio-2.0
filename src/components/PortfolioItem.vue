<template>
    <div ref="container" class="font-[Roboto] w-fit h-fit flex flex-col justify-center ">
        <div class="sticky top-1/4 left-1/4 w-full h-full flex items-center justify-center">
            <p ref="text" class="text-[20rem] text-center w-fit h-fit">
                WORKS
            </p>
        </div>
        <div class="grid grid-cols-2 h-fit">
            <div v-for="(image, index) in images" :key="index"
                :class="['section', sectionClasses[index], 'h-screen flex flex-col relative px-10 object-contain', 'perspective']">
                <div ref="videos" class="w-fit h-fit">
                    <video :src="image" :alt="titles[index]" class="image w-full h-full rounded-lg"
                        @mousemove="handleMouseMove($event, index)" @mouseleave="handleMouseLeave(index)" autoplay muted
                        loop>
                    </video>
                    <div class="text-2xl flex justify-between w-full h-fit shadow-xl">
                        <p class="">{{ titles[index] }}</p>
                        <p class="">{{ others[index] }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>



<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AngelImage from "../assets/video/Registrazione_Angel.mp4";
import CounterVideo from "../assets/video/Registrazione_Contatore.mp4";
import ReadBooksVideo from "../assets/video/Registrazione_ReadBooks.mp4";
import SunneeVideo from "../assets/video/Registrazione_Schermo_Sunnee.mp4";
import TicTacToeVideo from "../assets/video/Registrazione_Tic-Tac-Toe.mp4";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "ImageScroll",
    data() {
        return {
            titles: [
                "Tic Tac Toe Games",
                "ReadBooks",
                "Counter",
                "Sunnee",
                "Angel",
                "Image 6",
                "Image 7",
                "Image 8",
                "Image 9",
                "Image 10",
            ],
            others: [
                "vue",
                "lalal",
                "Counter",
                "Sunnee",
                "Angel",
                "Image 6",
                "Image 7",
                "Image 8",
                "Image 9",
                "Image 10",
            ],
            images: [
                TicTacToeVideo,
                ReadBooksVideo,
                CounterVideo,
                SunneeVideo,
                AngelImage,
                AngelImage,
                AngelImage,
                AngelImage,
                AngelImage,
                AngelImage,
            ],
            colors: [
                "#FFC0CB", // Colore per il primo video
                "#ADD8E6", // Colore per il secondo video
                "#90EE90", // Colore per il terzo video
                "#FFD700", // Colore per il quarto video
                "#FFA07A", // Colore per il quinto video
                "#DDA0DD", // Colore per il sesto video
                "#FF4500", // Colore per il settimo video
                "#20B2AA", // Colore per l'ottavo video
                "#9370DB", // Colore per il nono video
                "#FF6347", // Colore per il decimo video
            ],
            textColors: [
                "#FFC0CB", // Colore per il primo video
                "#ADD8E6", // Colore per il secondo video
                "#90EE90", // Colore per il terzo video
                "#FFD700", // Colore per il quarto video
                "#FFA07A", // Colore per il quinto video
                "#DDA0DD", // Colore per il sesto video
                "#FF4500", // Colore per il settimo video
                "#20B2AA", // Colore per l'ottavo video
                "#9370DB", // Colore per il nono video
                "#FF6347", // Colore per il decimo video
            ],
            sectionClasses: [
                "justify-center items-start",
                "justify-end items-end",
                "justify-center items-start",
                "justify-end items-end",
                "justify-center items-start",
                "justify-end items-end",
                "justify-center items-start",
                "justify-end items-end",
                "justify-center items-start",
                "justify-end items-end",
            ],
        };
    },
    methods: {
        handleMouseMove(event, index) {
            const video = this.$refs.videos[index]; // Ottieni il video corrispondente
            const container = this.$refs.container;
            const text = this.$refs.text;
            const rect = video.getBoundingClientRect();

            // Calcola le posizioni relative del mouse
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            // Calcola la rotazione in base alla posizione del mouse
            const rotateX = ((mouseY / rect.height) - 0.5) * -7;  // Rotazione sull'asse X
            const rotateY = ((mouseX / rect.width) - 0.5) * 7;   // Rotazione sull'asse Y

            // Cambia il colore dello sfondo in base all'indice del video

            // Utilizza GSAP per animare la trasformazione con perspective
            gsap.to(video, {
                duration: 0.3, // Durata dell'animazione
                rotationX: rotateX, // Applica la rotazione calcolata sull'asse X
                rotationY: rotateY, // Applica la rotazione calcolata sull'asse Y
                ease: "power2.out", // Effetto di easing
                transformOrigin: "50% 50%", // Origine della trasformazione
            });
            gsap.to(container, {
                duration: 1, // Durata dell'animazione
                backgroundColor: this.colors[index],
                ease: "power2.out", // Effetto di easing
            });
            gsap.to(text, {
                duration: 1, // Durata dell'animazione
                color: this.textColors[index],
                ease: "power2.out", // Effetto di easing
            });
        },
        handleMouseLeave(index) {
            const video = this.$refs.videos[index]; // Ottieni il video corrispondente
            const container = this.$refs.container;
            const text = this.$refs.text;

            // Ripristina il colore di sfondo originale
            gsap.to(container, {
                duration: 1, // Durata dell'animazione
                backgroundColor: "transparent",
                ease: "power2.out", // Effetto di easing
            });
            // Utilizza GSAP per riportare la trasformazione a zero (posizione originale)
            gsap.to(video, {
                duration: 0.5, // Durata dell'animazione
                rotationX: 0, // Ripristina la rotazione sull'asse X
                rotationY: 0, // Ripristina la rotazione sull'asse Y
                ease: "power2.inOut", // Effetto di easing
            });
            gsap.to(text, {
                duration: 1, // Durata dell'animazione
                color: "",
                ease: "power2.inOut", // Effetto di easing
            });
        },
    },
};
</script>




<style scoped>
.section {
    /* Assicurati che non ci siano sovrapposizioni */
    perspective: 1000px;
    /* Imposta la prospettiva per l'effetto 3D */
}
</style>

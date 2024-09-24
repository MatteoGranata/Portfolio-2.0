<template>
    <div class="font-[League-Spartan] w-full h-fit flex justify-center bg-[#0f0f0f]">
        <div class="flex flex-col">
            <div v-for="(image, index) in images" :key="index"
                class="section h-screen flex flex-col justify-center items-center relative  bg-[#0f0f0f] ">
                <MouseEvent />
                <div class="flex title items-center justify-center w-full h-12 rounded-lg mb-5 bg-[#F0ECE2]">
                    <!-- Titolo dell'immagine -->
                    <div class=" text-[#000000] text-center text-[1.5rem] font-bold w-full h-fit">
                        {{
                            titles[index] }}
                    </div>
                </div>
                <!-- Immagine -->
                <video :src="image" :alt="titles[index]" class="image w-full h-full object-cover rounded-lg" autoplay
                    muted loop></video>
            </div>
        </div>
    </div>
</template>


<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AngelImage from "../assets/video/Registrazione_Angel.mp4"
import CounterVideo from "../assets/video/Registrazione_Contatore.mp4"
import ReadBooksVideo from "../assets/video/Registrazione_ReadBooks.mp4"
import SunneeVideo from "../assets/video/Registrazione_Schermo_Sunnee.mp4"
import TicTacToeVideo from "../assets/video/Registrazione_Tic-Tac-Toe.mp4"
import MouseEvent from "./MouseEvent.vue";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "ImageScroll",
    components: {
        MouseEvent
    },
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
        };
    },
    mounted() {
        this.createScrollAnimation();
    },
    methods: {
        createScrollAnimation() {
            const sections = document.querySelectorAll('.section');
            const images = document.querySelectorAll('.image');

            sections.forEach((section, index) => {
                const img = images[index];

                gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                        pin: true,
                        markers: true,
                    },
                })
                    .fromTo(
                        img,
                        { height: '80%', objectFit: 'cover' },
                        { height: '0vh', duration: 1 }
                    )
            });
        },
    }

};
</script>

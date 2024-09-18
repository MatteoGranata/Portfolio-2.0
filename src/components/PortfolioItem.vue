<!-- <template>
    <div class="w-full h-screen overflow-hidden relative">
        <div class="horizontal-container bg-black w-screen h-full relative border">
            <MouseEvent />
            <section v-for="(project, index) in projects" :key="index"
                class="panel w-4/6 h-fit lala flex flex-col -z-20 justify-center items-center absolute top-[-42rem] left-[119rem] border border-blue-800 bg-transparent">
                <div class="text-white border h-fit w-fit flex items-end text-[5rem] uppercase justify-center">
                    {{ project.description }}
                </div>
                <div class="project flex justify-center h-fit items-center w-fit">
                    <video :src="project.video" class="w-full h-fit" autoplay muted loop></video>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MouseEvent from "./MouseEvent.vue";
import videoAngel from "../assets/video/Registrazione_Angel.mp4";

// Registra il plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        MouseEvent
    },
    name: "ImageHoverVideo",
    data() {
        return {
            projects: [
                { video: videoAngel, description: 'Project 1' },
                { video: videoAngel, description: 'Project 2' },
                { video: videoAngel, description: 'Project 3' },
                { video: videoAngel, description: 'Project 4' },
                { video: videoAngel, description: 'Project 5' },
                { video: videoAngel, description: 'Project 6' },
                { video: videoAngel, description: 'Project 7' },
                { video: videoAngel, description: 'Project 8' },
                { video: videoAngel, description: 'Project 9' },
                { video: videoAngel, description: 'Project 10' }
            ]
        };
    },
    mounted() {
        const sections = gsap.utils.toArray(".panel");
        const totalSections = sections.length;
        const scrollLength = totalSections * 100;

        sections.forEach((section, index) => {
            gsap.to(section,
                {
                    x: "-235rem",  // Si muove in diagonale a destra
                    y: 2000, // Si muove in diagonale verso l'alto
                    duration: 2,
                    zIndex: "=+1", // Durata del movimento
                    ease: "none",
                    scrollTrigger: {

                        trigger: section, // Trigger per tutto il container
                        start: `top+=${index * 100}% top`, // Ogni sezione inizia a comparire più rapidamente
                        end: `top+=${(index + 3) * 100}% top`, // Sovrapposizione aumentata tra le sezioni
                        scrub: true,
                        markers: true, // Marker visibili per debug
                    }
                }
            );
        });


        // Mantieni lo sfondo "pinnato"
        ScrollTrigger.create({
            trigger: ".horizontal-container",
            start: "top top",
            end: `+=${scrollLength}%`, // Imposta la lunghezza totale dello scroll
            pin: true,
            scrub: true,
            markers: true
        });
    },
    beforeUnmount() {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
};
</script> -->











<template>
    <div class="w-full h-fit flex justify-center bg-black">

        <div class="flex flex-col ">
            <div v-for="(image, index) in images" :key="index"
                class="h-screen flex flex-col justify-center items-center relative" :ref="'section' + index">
                <MouseEvent />
                <!-- Titolo dell'immagine -->
                <div class="text-white text-center text-[2oem] font-bold border" :ref="'title' + index">{{ titles[index]
                    }}
                </div>

                <!-- Immagine -->
                <video :src="image" :alt="titles[index]" class="image border w-full h-full object-cover "
                    :ref="'image' + index" autoplay muted loop></video>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AngelImage from "../assets/video/Registrazione_Angel.mp4"
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
                "Image 1",
                "Image 2",
                "Image 3",
                "Image 4",
                "Image 5",
                "Image 6",
                "Image 7",
                "Image 8",
                "Image 9",
                "Image 10",
            ],
            images: [
                AngelImage,
                AngelImage,
                AngelImage,
                AngelImage,
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
            this.titles.forEach((title, index) => {
                const section = this.$refs['section' + index][0];
                const img = this.$refs['image' + index][0];

                gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "center center",
                        end: "bottom top",
                        scrub: true,
                        markers: true,
                        pin: true,
                        opacity: 0,
                    },
                }).fromTo(
                    img,
                    { height: '100vh', objectFit: 'cover' },
                    {
                        height: '0vh', duration: 1, scrollTrigger: {
                            pin: true
                        }
                    }
                )
            });
        },
    },
};
</script>

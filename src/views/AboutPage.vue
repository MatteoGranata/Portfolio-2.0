<template>
    <div class="font-[Roboto] justify-center w-full h-full">

        <div ref="textContainer" class="p-0 max-w-[80%] h-full m-auto text-start relative">
            <!-- Cicla attraverso le righe e visualizza ogni riga -->
            <div v-for="(line, index) in lines" :key="index" class="opacity-0 w-full text-[2rem]">
                {{ line }}
            </div>
        </div>
        <div class="h-screen">

        </div>
        <!-- <div class="h-screen w-full flex justify-center">
            <p class="text-[15rem]">SKILLS</p>
        </div> -->
    </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
    data() {
        return {
            text: "Sono un Full-Stack Developer italiano di Sesto San Giovanni, provincia di Milano, con una formazione in grafica pubblicitaria e una forte passione per la programmazione. Ho completato un corso di programmazione full-stack presso start2impact, sviluppando competenze in JavaScript, Node.js, Express e Vue.js. Sono motivato a contribuire al settore tecnologico con soluzioni innovative, utilizzando tecnologie avanzate e affrontando nuove sfide per crescere professionalmente. Il mio obiettivo è migliorare continuamente le mie competenze tecniche e collaborare a progetti di grande impatto.",
            lines: [], // Array che conterrà le righe di testo
            maxLineWidth: 0, // Larghezza massima delle righe, impostata dinamicamente
            context: null // Contesto canvas per calcolare larghezza testo
        };
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        this.updateMaxLineWidth();

        this.$nextTick(() => {
            this.applyAnimations(); // Applica animazioni GSAP alle righe
        });
        window.addEventListener("resize", this.handleResize);

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

        tl.to([M, G], {
            rotation: 180,
            y: (i) => (i === 0 ? 140 : -140),
            duration: 1.5,
            ease: "elastic.inOut"
        })

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
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.handleResize);
    },
    methods: {
        // Funzione per ottenere la larghezza di un testo
        getTextWidth(text) {
            if (!this.context) {
                const canvas = document.createElement("canvas");
                this.context = canvas.getContext("2d");
                this.context.font = "3rem Roboto"; // Font per misurazione
            }
            return this.context.measureText(text).width; // Larghezza del testo
        },
        // Aggiorna la larghezza massima della linea in base alla larghezza del text-container
        updateMaxLineWidth() {
            const container = this.$refs.textContainer;
            if (container) {
                const newWidth = container.getBoundingClientRect().width;
                if (newWidth !== this.maxLineWidth) {
                    this.maxLineWidth = newWidth;
                    this.divideText(); // Suddividi il testo solo se la larghezza è cambiata
                }
            }
        },
        // Suddivide il testo in righe in base alla larghezza massima
        divideText() {
            const words = this.text.split(" ");
            let currentLine = "";
            let currentLineWidth = 0;
            this.lines = [];

            words.forEach((word) => {
                const wordWidth = this.getTextWidth(word + " ");
                if (currentLineWidth + wordWidth > this.maxLineWidth) {
                    this.lines.push(currentLine.trim());
                    currentLine = word + " ";
                    currentLineWidth = wordWidth;
                } else {
                    currentLine += word + " ";
                    currentLineWidth += wordWidth;
                }
            });

            if (currentLine) {
                this.lines.push(currentLine.trim());
            }
        },
        // Applica le animazioni GSAP alle righe
        applyAnimations() {
            this.lines.forEach((line, index) => {
                const lineElement = this.$refs.textContainer.children[index];
                gsap.fromTo(
                    lineElement,
                    { opacity: 0.2 },
                    {
                        opacity: 1,
                        duration: 1,
                        scrollTrigger: {
                            trigger: lineElement,
                            start: "top +=450",
                            end: "top +=400",
                            scrub: true,
                            markers: false
                        }
                    }
                );
            });
        },
        // Gestisce il ridimensionamento della finestra
        handleResize() {
            this.updateMaxLineWidth();
        }
    }
};
</script>

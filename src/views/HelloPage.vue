<template>
    <div class="font-[Roboto] justify-center">

        <div ref="textContainer" class="p-5 max-w-[80%] h-full m-auto text-start relative left-44 ">
            <!-- Cicla attraverso le righe e visualizza ogni riga -->
            <!-- <h1 class="text-[5rem]"></h1> -->
            <div v-for="(line, index) in lines" :key="index" class="opacity-0 w-full text-[2.5rem]">
                {{ line }}
            </div>
        </div>
    </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
    data() {
        return {
            text: "Sono un Full-Stack Developer con una formazione superiore in grafica pubblicitaria e una forte passione per la programmazione. Ho completato un corso come programmatore full-stack presso start2impact, dove ho sviluppato competenze avanzate in tecnologie come JavaScript, Node.js, Express e Vue.js. Durante il mio percorso formativo, ho lavorato su diversi progetti personali, tra cui una web app full-stack chiamata Angel. Questa applicazione permette la gestione di progetti personali e rappresenta un esempio concreto del mio impegno nel creare soluzioni innovative e pratiche. Sono particolarmente interessato a lavorare nel settore tecnologico e software, dove posso contribuire a progetti innovativi e di grande impatto. Amo lavorare con tecnologie all'avanguardia e sono sempre alla ricerca di nuove sfide che mi permettano di crescere e apprendere continuamente. Le mie passioni includono la programmazione e l'innovazione tecnologica. Sono determinato a dimostrare le mie capacità e a costruire una carriera solida e significativa nel campo dello sviluppo web. I miei obiettivi a lungo termine includono il continuo miglioramento delle mie competenze tecniche e l'acquisizione di nuove conoscenze. Credo fortemente nel valore della collaborazione e sono entusiasta di contribuire a team dinamici e a progetti che fanno la differenza.",
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

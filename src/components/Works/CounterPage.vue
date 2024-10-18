<template>
    <div class="w-full h-full font-[Roboto]">
        <div ref="container" class="overflow-hidden w-full h-screen">
            <div ref="loader"
                class="w-full z-50 h-full flex justify-center items-center absolute text-[#E2B6FF] bg-[#00051C] top-0 left-0 opacity-100">
                <h1 ref="text" class="text-[10rem] text-center">COUNTER</h1>
            </div>
            <div class="w-full h-full relative left-0 -top-10 z-0 flex justify-center">
                <video ref="video" :src="video" class="image w-full h-full object-fill" autoplay muted loop>
                </video>
            </div>
            <div class="w-full h-fit px-10 mb-10">
                <div class="w-full h-fit grid grid-cols-2 mb-10">
                    <div class="flex justify-start gap-2">
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">JavaScript</p>
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">CSS</p>
                    </div>
                    <div class="flex justify-end">
                        <p class="h-fit w-fit rounded-xl py-1 px-3 border">start2impact project</p>
                    </div>
                </div>
                <div class="w-full h-full grid grid-cols-2">
                    <p class="text-[3rem]">COUNTER</p>
                    <div>
                        <p class="text-[1.5rem]">
                            Il componente dedicato alla homepage e al contatore si integra nel sito mantenendo uno stile
                            minimalista, con un design verticale e una disposizione chiara dei pulsanti interattivi (+,
                            -, reset) che gestiscono il contatore. L'uso dei colori garantisce continuità con il resto
                            del portfolio, riflettendo l'identità visiva del progetto. Un'animazione personalizzata del
                            cursore migliora l'esperienza utente, con due cerchi che si animano al clic o al passaggio
                            del mouse. Un sistema di conferma al reset aggiunge un livello di sicurezza, evitando
                            perdite accidentali di conteggio. Il codice è stato realizzato utilizzando JavaScript per le
                            funzionalità e CSS per lo stile.
                        </p>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 auto-rows-auto gap-60 py-10 px-10 justify-center">
                <!-- Immagine grande che occupa tutte e 4 le colonne -->
                <div
                    class="w-full rounded-2xl flex items-center h-[50rem] overflow-hidden col-span-2 place-self-center">
                    <img :src="mockup" class="object-cover w-full h-full">
                </div>
                <div class="h-fit w-full">
                    <img :src="Screen" class="rounded-xl object-cover w-full">
                </div>
                <div class="h-fit w-full">
                    <img :src="complimentiScreen" class="rounded-xl object-cover w-full">
                </div>
                <div class="h-fit w-full col-span-2">
                    <img :src="resetScreen" class="rounded-xl object-cover w-full">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CounterVideo from "@/assets/video/Registrazione_Contatore.mp4";

import CounterMokup from "@/assets/img/Mockups/Mockup_Counter.png";
import CounterComplimentiScreen from "@/assets/img/screen/Counter/Screen_Counter-complimenti.png";
import CounterResetScreen from "@/assets/img/screen/Counter/Screen_Counter-reset.png";
import CounterScreen from "@/assets/img/screen/Counter/Screen_Counter.png";
import { WorkMixin } from "@/mixins/WorkMixin"

export default {
    mixins: [WorkMixin],
    data() {
        return {
            video: CounterVideo,
            mockup: CounterMokup,
            Screen: CounterScreen,
            complimentiScreen: CounterComplimentiScreen,
            resetScreen: CounterResetScreen,
        };
    },
    mounted() {
        this.viewAnimation();
    },

}
</script>
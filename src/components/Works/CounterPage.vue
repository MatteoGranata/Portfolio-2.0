<template>
    <TemplateWorks title="Counter" :videoSrc="video" :details="details" description="Il componente dedicato alla homepage e al contatore si integra nel sito mantenendo uno stile
                            minimalista, con un design verticale e una disposizione chiara dei pulsanti interattivi (+,
                            -, reset) che gestiscono il contatore. L'uso dei colori garantisce continuità con il resto
                            del portfolio, riflettendo l'identità visiva del progetto. Un'animazione personalizzata del
                            cursore migliora l'esperienza utente, con due cerchi che si animano al clic o al passaggio
                            del mouse. Un sistema di conferma al reset aggiunge un livello di sicurezza, evitando
                            perdite accidentali di conteggio. Il codice è stato realizzato utilizzando JavaScript per le
                            funzionalità e CSS per lo stile.">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-60 py-10 px-5 lg:px-10 justify-center">
            <!-- Immagine grande che occupa tutte e 4 le colonne -->
            <div
                class="w-full rounded-2xl flex items-center h-[20rem] lg:h-[60rem] overflow-hidden col-span-2 place-self-center">
                <img :src="mockup" class="object-cover w-full h-[27rem] lg:h-full">
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
    </TemplateWorks>
</template>
<script>
import TemplateWorks from "./TemplateWorks.vue";

import CounterVideo from "@/assets/video/Registrazione_Contatore.mp4";
import CounterMokup from "@/assets/img/Mockups/Mockup_Counter.png";
import CounterComplimentiScreen from "@/assets/img/screen/Counter/Screen_Counter-complimenti.png";
import CounterResetScreen from "@/assets/img/screen/Counter/Screen_Counter-reset.png";
import CounterScreen from "@/assets/img/screen/Counter/Screen_Counter.png";

export default {
    components: { TemplateWorks },
    data() {
        return {
            video: CounterVideo,
            mockup: CounterMokup,
            Screen: CounterScreen,
            complimentiScreen: CounterComplimentiScreen,
            resetScreen: CounterResetScreen,
            details: [
                { label: 'Code', value: 'JavaScript, CSS' },
                { label: 'For', value: 'Start2impact' }
            ],
        };
    },
}
</script>
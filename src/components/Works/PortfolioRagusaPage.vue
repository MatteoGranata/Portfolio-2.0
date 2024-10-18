<template>
    <div class="w-full h-full font-[Roboto]">
        <div ref="container" class="overflow-hidden w-full h-screen">
            <div ref="loader"
                class="w-full z-50 h-full flex justify-center items-center absolute text-[#FDD835] bg-[#2E2E2E] top-0 left-0 opacity-100">
                <h1 ref="text" class="text-[10rem] text-center">Portfolio Ragusa</h1>
            </div>
            <div class="w-full h-screen relative left-0 -top-10 z-0 flex justify-center">
                <video ref="video" :src="video" class="image w-full h-full object-cover" autoplay muted loop>
                </video>
            </div>
            <div class="w-full h-fit px-10 mb-10">
                <div class="w-full h-fit grid grid-cols-2 mb-10">
                    <div class="flex justify-start gap-2">
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">CSS</p>
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">HTML</p>
                        <p class="h-fit w-fit py-1 px-0">\</p>
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">BOOTSTRAP</p>
                    </div>
                    <div class="flex justify-end">
                        <p class="h-fit w-fit rounded-xl py-1 px-3">PER: Lorenzo Ragusa</p>
                    </div>
                </div>
                <div class="w-full h-full grid grid-cols-2">
                    <p class="text-[3rem]">Portfolio Ragusa</p>
                    <div>
                        <p class="text-[1.5rem]">
                            Il componente dedicato alla homepage di un portfolio fotografico si integra nel sito
                            mantenendo uno stile visivo minimale, coerente con il resto del design. La pagina presenta
                            un'intestazione centrale con il nome del fotografo e il titolo professionale, sovrapposti a
                            un'immagine di sfondo a pieno schermo, offrendo un impatto visivo immediato e coinvolgente.
                            Le immagini della galleria sono disposte in una griglia a colonne multiple, con un effetto
                            di zoom al passaggio del mouse per un'interazione fluida e dinamica. La galleria è
                            organizzata per mostrare i lavori in modo ordinato e con uno stile coerente, mantenendo alta
                            la qualità visiva. Una sezione "Contattami" con un form personalizzato permette agli utenti
                            di inviare facilmente messaggi, mentre il footer include collegamenti social come Instagram
                            per un contatto diretto. L'interfaccia è ottimizzata per dispositivi mobili, con elementi
                            adattati per garantire una fruizione intuitiva e scorrevole.
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
                    <img :src="galleriaScreen" class="rounded-xl object-cover w-full">
                </div>
                <div class="h-fit w-full col-span-2">
                    <img :src="contattiScreen" class="rounded-xl object-cover w-full">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PortfolioRagusaVideo from "@/assets/video/Registrazione_Portfolio-Ragusa.mp4";

import PortfolioRagusaMokup from "@/assets/img/Mockups/Mokup_Portfolio-Ragusa.png";
import PortfolioRagusaScreen from "@/assets/img/screen/Portfolio_ragusa/Screen_Portfolio-Ragusa.png";
import PortfolioRagusaGalleriaScreen from "@/assets/img/screen/Portfolio_ragusa/Screen_Galleria-portfolio-ragusa.png";
import PortfolioRagusaContattiScreen from "@/assets/img/screen/Portfolio_ragusa/Screen_Contatti-portfolio-ragusa.png";
import { WorkMixin } from "@/mixins/WorkMixin"

export default {
    mixins: [WorkMixin],
    data() {
        return {
            video: PortfolioRagusaVideo,
            mockup: PortfolioRagusaMokup,
            Screen: PortfolioRagusaScreen,
            galleriaScreen: PortfolioRagusaGalleriaScreen,
            contattiScreen: PortfolioRagusaContattiScreen,
        };
    },
    mounted() {
        this.viewAnimation();
    },

}
</script>
<template>
    <div class="w-full h-full font-[Roboto]">
        <div ref="container" class="overflow-hidden w-full h-screen">
            <div ref="loader"
                class="w-full z-50 h-full flex justify-center items-center absolute text-[#E2B6FF] bg-[#00051C] top-0 left-0 opacity-100">
                <h1 ref="text" class="text-[10rem] text-center">Primo Portfolio Web</h1>
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
                    </div>
                    <div class="flex justify-end">
                        <p class="h-fit w-fit rounded-xl py-1 px-3">start2impact project</p>
                    </div>
                </div>
                <div class="w-full h-full grid grid-cols-2">
                    <p class="text-[3rem]">Primo Portfolio Web</p>
                    <div>
                        <p class="text-[1.5rem]">
                            Il componente Lavoro si integra nel sito seguendo uno stile minimal, mantenendo la coerenza
                            visiva
                            con
                            il resto del design. È progettato per offrire un'esperienza fluida e interattiva, con
                            animazioni
                            leggere
                            e colori personalizzati per ogni progetto. La disposizione degli elementi e l'uso delle
                            animazioni
                            al
                            passaggio del mouse rendono la navigazione dinamica e coinvolgente.

                            Quando un utente passa il mouse su un progetto nella lista, la sezione vuota alla sinistra
                            della
                            pagina
                            viene riempita da un'anteprima del progetto. Al clic, una nuova pagina si apre con una
                            descrizione
                            dettagliata del progetto selezionato. Su dispositivi mobili, l'interfaccia si adatta per
                            centralizzare
                            la lista, migliorando l'accessibilità e mantenendo l'esperienza utente semplice e diretta.

                            In aggiunta, una galleria sottostante permette agli utenti di visualizzare tutti i lavori
                            senza
                            doverli
                            aprire singolarmente. Su dispositivi mobili, la galleria viene sostituita da una gif animata
                            che
                            scorre
                            attraverso i vari progetti, assicurando un’esperienza visiva accattivante e compatta.
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
                    <img :src="portfolioScreen" class="rounded-xl object-cover w-full">
                </div>
                <div class="h-fit w-full">
                    <img :src="menuScreen" class="rounded-xl object-cover w-full">
                </div>
                <div class="h-fit w-full col-span-2">
                    <img :src="chiSonoScreen" class="rounded-xl object-cover w-full">
                </div>
                <div class="h-fit w-full">
                    <img :src="lavoriScreen" class="rounded-xl object-cover w-full">
                </div>
                <div class="h-fit w-full">
                    <img :src="contattiScreen" class="rounded-xl object-cover w-full">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PrimoPortfolioVideo from "@/assets/video/Registrazione_Primo-Portfolio.mp4";
import PrimoPortfolioMokup from "@/assets/img/Mockups/Mockup_Primo-Portfolio.png";
import PrimoPortfolioMenuScreen from "@/assets/img/screen/Primo_portfolio/Screen_menu-primo-portfolio.png";
import PrimoPortfolioLavoriScreen from "@/assets/img/screen/Primo_portfolio/Screen_lavori-primo-porfolio.png";
import PrimoPortfolioChiSonoScreen from "@/assets/img/screen/Primo_portfolio/Screen_chisono-primo-porfolio.png";
import PrimoPortfolioContattiScreen from "@/assets/img/screen/Primo_portfolio/Screen_contatti-primo-portfolio.png";
import PrimoPortfolioScreen from "@/assets/img/screen/Primo_portfolio/Screen_Primo_Portfolio.png";
import { WorkMixin } from "@/mixins/WorkMixin"

export default {
    mixins: [WorkMixin],
    data() {
        return {
            video: PrimoPortfolioVideo,
            mockup: PrimoPortfolioMokup,
            menuScreen: PrimoPortfolioMenuScreen,
            lavoriScreen: PrimoPortfolioLavoriScreen,
            chiSonoScreen: PrimoPortfolioChiSonoScreen,
            portfolioScreen: PrimoPortfolioScreen,
            contattiScreen: PrimoPortfolioContattiScreen
        };
    },
    mounted() {
        this.viewAnimation();
    },

}
</script>
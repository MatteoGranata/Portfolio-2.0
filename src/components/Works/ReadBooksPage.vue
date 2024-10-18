<template>
    <div class="w-full h-full font-[Roboto]">
        <div ref="container" class="overflow-hidden w-full h-screen">
            <div ref="loader"
                class="w-full z-50 h-full flex justify-center items-center absolute text-[#000000] bg-[#FCBA69] top-0 left-0 opacity-100">
                <h1 ref="text" class="text-[10rem] text-center">ReadBooks</h1>
            </div>
            <div class="w-full h-full relative left-0 -top-10 z-0 flex justify-center">
                <video ref="video" :src="video" class="image w-full h-full object-fill" autoplay muted loop>
                </video>
            </div>
            <div class="w-full h-fit px-10 mb-10">
                <div class="w-full h-fit grid grid-cols-2 mb-10">
                    <div class="flex justify-start gap-2">
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">JavaScript</p>
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">HTML</p>
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">CSS</p>
                        <p class="h-fit w-fit py-1 px-0">|</p>
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">Webpack</p>
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">axios</p>
                    </div>
                    <div class="flex justify-end">
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">start2impact project</p>
                    </div>
                </div>
                <div class="w-full h-full grid grid-cols-2">
                    <p class="text-[3rem]">ReadBooks</p>
                    <div>
                        <p class="text-[1.5rem]">
                            L'applicazione permette agli utenti di cercare libri per categoria, visualizzando i
                            risultati in una griglia ordinata con copertine, titoli e autori. Cliccando su un libro,
                            l'utente può aprire una scheda con una descrizione dettagliata. Le animazioni rendono
                            l'interfaccia più accattivante e fluida, mentre la gestione degli errori garantisce
                            un’esperienza utente chiara e priva di interruzioni. Se le informazioni sui libri non sono
                            disponibili, vengono forniti avvisi visivi personalizzati per copertine mancanti e
                            descrizioni assenti. L'applicazione è stata realizzata utilizzando WebPack, JavaScript, HTML
                            e CSS, sfruttando le librerie axios per le richieste HTTP, anime.js per le animazioni e
                            Letterize.js per la gestione delle animazioni del testo di sfondo. Il progetto è stato
                            deployato su Netlify.
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
import ReadBooksVideo from "@/assets/video/Registrazione_ReadBooks.mp4";

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
            video: ReadBooksVideo,
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
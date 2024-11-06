<template>
    <TemplateWorks title="ReadBooks" :videoSrc="video" :details="details" description=" L'applicazione permette agli utenti di cercare libri per categoria, visualizzando i
                            risultati in una griglia ordinata con copertine, titoli e autori. Cliccando su un libro,
                            l'utente può aprire una scheda con una descrizione dettagliata. Le animazioni rendono
                            l'interfaccia più accattivante e fluida, mentre la gestione degli errori garantisce
                            un’esperienza utente chiara e priva di interruzioni. Se le informazioni sui libri non sono
                            disponibili, vengono forniti avvisi visivi personalizzati per copertine mancanti e
                            descrizioni assenti. L'applicazione è stata realizzata utilizzando WebPack, JavaScript, HTML
                            e CSS, sfruttando le librerie axios per le richieste HTTP, anime.js per le animazioni e
                            Letterize.js per la gestione delle animazioni del testo di sfondo. Il progetto è stato
                            deployato su Netlify.">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-60 py-10 px-5 lg:px-10 justify-center">
            <!-- Immagine grande che occupa tutte e 4 le colonne -->
            <div
                class="w-full rounded-2xl flex items-center h-[20rem] lg:h-[50rem] overflow-hidden col-span-2 place-self-center">
                <img :src="mockup" class="object-cover w-full h-[30rem] lg:h-full">
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
    </TemplateWorks>
</template>
<script>
import TemplateWorks from "./TemplateWorks.vue";
import ReadBooksVideo from "@/assets/video/Registrazione_ReadBooks.mp4";

import PrimoPortfolioMokup from "@/assets/img/Mockups/Mockup_Primo-Portfolio.png";
import PrimoPortfolioMenuScreen from "@/assets/img/screen/Primo_portfolio/Screen_menu-primo-portfolio.png";
import PrimoPortfolioLavoriScreen from "@/assets/img/screen/Primo_portfolio/Screen_lavori-primo-porfolio.png";
import PrimoPortfolioChiSonoScreen from "@/assets/img/screen/Primo_portfolio/Screen_chisono-primo-porfolio.png";
import PrimoPortfolioContattiScreen from "@/assets/img/screen/Primo_portfolio/Screen_contatti-primo-portfolio.png";
import PrimoPortfolioScreen from "@/assets/img/screen/Primo_portfolio/Screen_Primo_Portfolio.png";

export default {
    components: { TemplateWorks },
    data() {
        return {
            video: ReadBooksVideo,
            mockup: PrimoPortfolioMokup,
            menuScreen: PrimoPortfolioMenuScreen,
            lavoriScreen: PrimoPortfolioLavoriScreen,
            chiSonoScreen: PrimoPortfolioChiSonoScreen,
            portfolioScreen: PrimoPortfolioScreen,
            contattiScreen: PrimoPortfolioContattiScreen,
            details: [
                { label: 'Code', value: 'HTML, CSS, JavaScript' },
                { label: 'Framework', value: 'WebPack, axios' },
                { label: 'For', value: 'Start2impact' }
            ],
        };
    },
}
</script>
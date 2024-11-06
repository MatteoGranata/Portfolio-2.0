<template>
    <TemplateWorks title="Primo portfolio" :videoSrc="video" :details="details" description=" Il componente Lavoro si integra nel sito seguendo uno stile minimal, mantenendo la coerenza
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
                            attraverso i vari progetti, assicurando un’esperienza visiva accattivante e compatta.">

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
import PrimoPortfolioVideo from "@/assets/video/Registrazione_Primo-Portfolio.mp4";
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
            video: PrimoPortfolioVideo,
            mockup: PrimoPortfolioMokup,
            menuScreen: PrimoPortfolioMenuScreen,
            lavoriScreen: PrimoPortfolioLavoriScreen,
            chiSonoScreen: PrimoPortfolioChiSonoScreen,
            portfolioScreen: PrimoPortfolioScreen,
            contattiScreen: PrimoPortfolioContattiScreen,
            details: [
                { label: 'Code', value: 'HTML, CSS' },
                { label: 'For', value: 'Start2impact' }
            ],
        };
    },

}
</script>
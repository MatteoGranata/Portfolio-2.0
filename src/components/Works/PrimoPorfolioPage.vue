<template>
  <TemplateWorks
    title="Primo portfolio"
    :videoSrc="video"
    :details="details"
    description="Il sito web è stato realizzato esclusivamente con HTML e CSS, ad eccezione di Formspree per il modulo di contatto. La Home page presenta uno stile minimalista, con uno sfondo animato e colori studiati per ridurre l'affaticamento visivo. La Navbar si espande con un'animazione a cascata e include effetti hover. La pagina Contatti offre un modulo collegato a Formspree e link ai social nel footer. La sezione About è divisa tra una foto e una breve descrizione, con un effetto sticky sul testo. Nella pagina Portfolio, i progetti sono mostrati con anteprime al passaggio del mouse, mentre su mobile l'elenco è centrato. La galleria dei lavori si trova sotto il portfolio e su mobile viene sostituita da una GIF dei lavori."
    :link="link"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-60 py-10 px-5 lg:px-10 justify-center"
    >
      <!-- Immagine grande che occupa tutte e 4 le colonne -->
      <div
        class="w-full rounded-2xl flex items-center h-[20rem] lg:h-[50rem] overflow-hidden col-span-2 place-self-center"
      >
        <img :src="mockup" class="object-cover w-full h-[30rem] lg:h-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="portfolioScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="menuScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full col-span-2">
        <img :src="chiSonoScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="lavoriScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="contattiScreen" class="rounded-xl object-cover w-full" />
      </div>
    </div>
  </TemplateWorks>
</template>
<script>
import TemplateWorks from './TemplateWorks.vue'
import PrimoPortfolioVideo from '@/assets/video/Registrazione_Primo-Portfolio.mp4'
import PrimoPortfolioMokup from '@/assets/img/Mockups/Mockup_Primo-Portfolio.png'
import PrimoPortfolioMenuScreen from '@/assets/img/screen/Primo_portfolio/Screen_menu-primo-portfolio.png'
import PrimoPortfolioLavoriScreen from '@/assets/img/screen/Primo_portfolio/Screen_lavori-primo-porfolio.png'
import PrimoPortfolioChiSonoScreen from '@/assets/img/screen/Primo_portfolio/Screen_chisono-primo-porfolio.png'
import PrimoPortfolioContattiScreen from '@/assets/img/screen/Primo_portfolio/Screen_contatti-primo-portfolio.png'
import PrimoPortfolioScreen from '@/assets/img/screen/Primo_portfolio/Screen_Primo_Portfolio.png'

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
      link: `https://talent.start2impact.it/corsi/javascript-advanced#project_to_show`
    }
  }
}
</script>

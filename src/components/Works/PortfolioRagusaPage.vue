<template>
  <TemplateWorks
    title="Portfolio Ragusa Lorenzo"
    :videoSrc="video"
    :details="details"
    :link="link"
    description=" La homepage di questo portfolio fotografico adotta uno stile visivo minimale, integrato nel design generale del sito. Un’intestazione centrale con il nome del fotografo e il titolo professionale si sovrappone a un’immagine di sfondo a pieno schermo, creando un impatto visivo immediato e coinvolgente. Le immagini della galleria sono disposte in una griglia a colonne multiple e arricchite da un effetto di zoom al passaggio del mouse, che rende l’interazione fluida e dinamica. La disposizione ordinata delle foto mantiene alta la qualità visiva, valorizzando ogni lavoro. Una sezione 'Contattami' con form personalizzato consente di inviare facilmente messaggi, mentre il footer include collegamenti ai social come Instagram per un contatto diretto. L’interfaccia è ottimizzata per dispositivi mobili, con elementi adattati per un’esperienza intuitiva e fluida su schermi ridotti."
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-60 py-10 px-5 lg:px-10 justify-center"
    >
      <div
        class="w-full rounded-2xl flex items-center h-[20rem] lg:h-[50rem] overflow-hidden col-span-2 place-self-center"
      >
        <img :src="mockup" class="object-cover w-full h-[30rem] lg:h-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="Screen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="galleriaScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full col-span-2">
        <img :src="contattiScreen" class="rounded-xl object-cover w-full" />
      </div>
    </div>
  </TemplateWorks>
</template>
<script>
import TemplateWorks from './TemplateWorks.vue'

import PortfolioRagusaVideo from '@/assets/video/Registrazione_Portfolio-Ragusa.mp4'
import PortfolioRagusaMokup from '@/assets/img/Mockups/Mokup_Portfolio-Ragusa.png'
import PortfolioRagusaScreen from '@/assets/img/screen/Portfolio_ragusa/Screen_Portfolio-Ragusa.png'
import PortfolioRagusaGalleriaScreen from '@/assets/img/screen/Portfolio_ragusa/Screen_Galleria-portfolio-ragusa.png'
import PortfolioRagusaContattiScreen from '@/assets/img/screen/Portfolio_ragusa/Screen_Contatti-portfolio-ragusa.png'

export default {
  components: { TemplateWorks },

  data() {
    return {
      video: PortfolioRagusaVideo,
      mockup: PortfolioRagusaMokup,
      Screen: PortfolioRagusaScreen,
      galleriaScreen: PortfolioRagusaGalleriaScreen,
      contattiScreen: PortfolioRagusaContattiScreen,
      details: [
        { label: 'Code', value: 'HTML, CSS' },
        { label: 'Framework', value: 'Bootstrap' },
        { label: 'For', value: 'Lorenzo Ragusa Photographer' }
      ],
      link: `https://lorenzoragusa.it/`
    }
  }
}
</script>

<template>
  <TemplateWorks
    title="Portfolio Ragusa Lorenzo"
    :videoSrc="video"
    :details="details"
    description=" Il componente dedicato alla homepage di un portfolio fotografico si integra nel sito
                            mantenendo uno stile visivo minimale, coerente con il resto del design. La pagina presenta
                            un'intestazione centrale con il nome del fotografo e il titolo professionale, sovrapposti a
                            un'immagine di sfondo a pieno schermo, offrendo un impatto visivo immediato e coinvolgente.
                            Le immagini della galleria sono disposte in una griglia a colonne multiple, con un effetto
                            di zoom al passaggio del mouse per un'interazione fluida e dinamica. La galleria è
                            organizzata per mostrare i lavori in modo ordinato e con uno stile coerente, mantenendo alta
                            la qualità visiva. Una sezione 'Contattami' con un form personalizzato permette agli
        utenti di inviare facilmente messaggi, mentre il footer include collegamenti social come Instagram per un
        contatto diretto. L'interfaccia è ottimizzata per dispositivi mobili, con elementi adattati per garantire una
        fruizione intuitiva e scorrevole."
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
      ]
    }
  }
}
</script>

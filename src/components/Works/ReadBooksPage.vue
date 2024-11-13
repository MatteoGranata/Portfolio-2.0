<template>
  <TemplateWorks title="ReadBooks" :link="link" :videoSrc="video" :details="details"
    description="ReadBooks è un'applicazione web avanzata, realizzata con WebPack, che consente agli utenti di cercare libri per categoria, utilizzando l'API di Open Library. L'app visualizza i risultati in una griglia interattiva con copertine, titoli, autori e descrizioni. L'interfaccia è arricchita da animazioni grazie alle librerie anime.js e Letterize.js, e offre una gestione completa degli errori di ricerca. In caso di dati mancanti, l'app mostra messaggi informativi o immagini alternative. La ricerca può essere effettuata tramite il pulsante 'Search' o premendo 'Enter'.">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-60 py-10 px-5 lg:px-10 justify-center">
      <!-- Immagine grande che occupa tutte e 4 le colonne -->
      <div
        class="w-full rounded-2xl flex items-center h-[20rem] lg:h-[60rem] overflow-hidden col-span-2 place-self-center">
        <img :src="mockup" class="object-cover w-full h-[20rem] lg:h-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="readbooksScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="risultatiScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full col-span-2">
        <img :src="descrizioneScreen" class="rounded-xl object-cover w-full" />
      </div>
    </div>
  </TemplateWorks>
</template>
<script>
import TemplateWorks from './TemplateWorks.vue'
import ReadBooksVideo from '@/assets/video/Registrazione_ReadBooks.mp4'

import ReadBooksMockup from '@/assets/img/Mockups/Mockup_ReadBooks.png'
import ReadBooksRisultati from '@/assets/img/screen/ReadBooks/Screen_risultati.png'
import ReadBooksDescrizione from '@/assets/img/screen/ReadBooks/Screen_descrizione.png'
import ReadbooksScreen from '@/assets/img/screen/ReadBooks/Screen_Readbooks.png'

export default {
  components: { TemplateWorks },
  data() {
    return {
      video: ReadBooksVideo,
      mockup: ReadBooksMockup,
      risultatiScreen: ReadBooksRisultati,
      descrizioneScreen: ReadBooksDescrizione,
      readbooksScreen: ReadbooksScreen,
      details: [
        { label: 'Code', value: 'HTML, CSS, JavaScript' },
        { label: 'Framework', value: 'WebPack, axios' },
        { label: 'API', value: 'Open Library' },
        { label: 'For', value: 'Start2impact' }
      ],
      link: `https://readbookshelf.netlify.app/`
    }
  }
}
</script>

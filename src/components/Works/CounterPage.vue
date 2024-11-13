<template>
  <TemplateWorks title="Counter" :videoSrc="video" :details="details" :link="link"
    description="La struttura della pagina è verticale, con tre pulsanti principali nella parte inferiore: ‘+’, ‘-’ e ‘reset’. Ogni volta che il contatore raggiunge multipli di 10 o viene azzerato, appare un messaggio che segnala i progressi. Se si sceglie di resettare, compaiono due pulsanti di conferma per evitare azzeramenti accidentali. Il cursore è stato personalizzato per trasformarsi in due cerchi animati al movimento e al clic, aggiungendo un tocco di interattività. <br><br> Il sito è stato sviluppato con JavaScript per la gestione delle funzionalità, mentre CSS è stato utilizzato per le personalizzazioni visive.">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-60 py-10 px-5 lg:px-10 justify-center">
      <!-- Immagine grande che occupa tutte e 4 le colonne -->
      <div
        class="w-full rounded-2xl flex items-center h-[20rem] lg:h-[60rem] overflow-hidden col-span-2 place-self-center">
        <img :src="mockup" class="object-cover w-full h-[27rem] lg:h-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="Screen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="complimentiScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full col-span-2">
        <img :src="resetScreen" class="rounded-xl object-cover w-full" />
      </div>
    </div>
  </TemplateWorks>
</template>
<script>
import TemplateWorks from './TemplateWorks.vue'

import CounterVideo from '@/assets/video/Registrazione_Contatore.mp4'
import CounterMokup from '@/assets/img/Mockups/Mockup_Counter.png'
import CounterComplimentiScreen from '@/assets/img/screen/Counter/Screen_Counter-complimenti.png'
import CounterResetScreen from '@/assets/img/screen/Counter/Screen_Counter-reset.png'
import CounterScreen from '@/assets/img/screen/Counter/Screen_Counter.png'

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
      link: `https://matteogranata.github.io/Counter/`
    }
  }
}
</script>

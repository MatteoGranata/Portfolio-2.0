<template>
  <TemplateWorks
    title="Sunnee"
    :link="link"
    :videoSrc="video"
    :details="details"
    description="Un configuratore interattivo di bottiglie termiche, realizzato con Vue.js, CSS e JavaScript, e pubblicato su Netlify. L'app è organizzata in sette componenti Vue distinti, ciascuno responsabile di un'area specifica, facilitando manutenzione e gestione. L'utente può personalizzare vari elementi della bottiglia, visualizzando un'anteprima in tempo reale delle modifiche. La navigazione tra le sezioni permette la scelta del colore per ciascuna parte, con un riepilogo finale delle selezioni. La comunicazione tra componenti è gestita tramite eventi Vue, rendendo fluido il processo di configurazione."
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-60 py-10 px-5 lg:px-10 justify-center"
    >
      <!-- Immagine grande che occupa tutte e 4 le colonne -->
      <div
        class="w-full rounded-2xl flex items-center h-[20rem] lg:h-[60rem] overflow-hidden col-span-2 place-self-center"
      >
        <img :src="mockup" class="object-cover w-full h-[26rem] lg:h-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="Screen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="capScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full col-span-2">
        <img :src="bodyScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="bottomScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="thanksScreen" class="rounded-xl object-cover w-full" />
      </div>
    </div>
  </TemplateWorks>
</template>
<script>
import TemplateWorks from './TemplateWorks.vue'
import SunneeVideo from '@/assets/video/Registrazione_Sunnee.mp4'

import SunneeMokup from '@/assets/img/Mockups/Mockup_Sunnee.png'
import SunneeScreen from '@/assets/img/screen/Sunnee/Screen_sunnee.png'
import SunneeCapScreen from '@/assets/img/screen/Sunnee/Screen_sunnee-cap.png'
import SunneeBodyScreen from '@/assets/img/screen/Sunnee/Screen_sunnee-body.png'
import SunneeBottomScreen from '@/assets/img/screen/Sunnee/Screen_sunnee-bottom.png'
import SunneeThanksScreen from '@/assets/img/screen/Sunnee/Screen_sunnee-thanks.png'

export default {
  components: { TemplateWorks },
  data() {
    return {
      video: SunneeVideo,
      mockup: SunneeMokup,
      Screen: SunneeScreen,
      capScreen: SunneeCapScreen,
      bodyScreen: SunneeBodyScreen,
      bottomScreen: SunneeBottomScreen,
      thanksScreen: SunneeThanksScreen,
      details: [
        { label: 'Code', value: 'Vue Router' },
        { label: 'For', value: 'Start2impact' }
      ],
      link: `https://main--sunnee.netlify.app/`
    }
  }
}
</script>

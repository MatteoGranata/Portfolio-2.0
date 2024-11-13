<template>
  <TemplateWorks title="Angel" :videoSrc="video" :details="details"
    description="Angel è una web app per la gestione del tempo e delle attività quotidiane, progettata con un'interfaccia intuitiva e un design pulito per aumentare la produttività. La piattaforma consente di gestire note personali, monitorare le finanze, calcolare il tempo speso su attività e salvare password in sicurezza. <br> <br>

Il front-end è sviluppato in Vue.js con Tailwind CSS e Vite, mentre il back-end utilizza Node.js e Express, supportato da MongoDB tramite Mongoose. Per garantire sicurezza e fluidità, sono stati implementati strumenti come bcryptjs per le password e multer per il caricamento dei file. Angel è ospitata su Netlify (front-end) e Render (back-end), con MongoDB Atlas come database, assicurando un’architettura scalabile. L'interfaccia è ottimizzata per dispositivi mobili, offrendo una navigazione facile e immediata.">
    <div class=" grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-60 py-10 px-5 lg:px-10 justify-center">
      <!-- Immagine grande che occupa tutte e 4 le colonne -->
      <div
        class="w-full rounded-2xl flex items-center h-[20rem] lg:h-[60rem] overflow-hidden col-span-2 place-self-center">
        <img :src="mockup" class="object-cover w-full h-[24rem] lg:h-max" />
      </div>
      <div class="h-fit w-full">
        <img :src="Screen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="howtouseScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full col-span-2">
        <img :src="loginScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="projectsScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="notesScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full col-span-2">
        <img :src="timerScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="passwordScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="financeScreen" class="rounded-xl object-cover w-full" />
      </div>
    </div>
  </TemplateWorks>
</template>
<script>
import TemplateWorks from './TemplateWorks.vue'
import AngelVideo from '@/assets/video/Registrazione_Angel.mp4'
import AngelMokup from '@/assets/img/Mockups/Mockup_Angel.png'
import AngelScreen from '@/assets/img/screen/Angel/Screen_angel.png'
import AngelHowToUseScreen from '@/assets/img/screen/Angel/Screen_angel-howtouse.png'
import AngelLoginScreen from '@/assets/img/screen/Angel/Screen_angel-login.png'
import AngelProjectsScreen from '@/assets/img/screen/Angel/Screen_angel-projects.png'
import AngelNotesScreen from '@/assets/img/screen/Angel/Screen_angel-notes.png'
import AngelTimerScreen from '@/assets/img/screen/Angel/Screen_angel-timer.png'
import AngelPasswordsScreen from '@/assets/img/screen/Angel/Screen_angel-passwords.png'
import AngelFinanceScreen from '@/assets/img/screen/Angel/Screen_angel-finance.png'

export default {
  components: { TemplateWorks },
  data() {
    return {
      video: AngelVideo,
      mockup: AngelMokup,
      Screen: AngelScreen,
      howtouseScreen: AngelHowToUseScreen,
      loginScreen: AngelLoginScreen,
      projectsScreen: AngelProjectsScreen,
      notesScreen: AngelNotesScreen,
      timerScreen: AngelTimerScreen,
      passwordScreen: AngelPasswordsScreen,
      financeScreen: AngelFinanceScreen,
      details: [
        { label: 'Code', value: 'Vue Router, Node' },
        { label: 'Framework', value: 'TailwindCSS' },
        { label: 'DataBase', value: 'MongoDB Atlas' },
        { label: 'For', value: 'Start2impact' }
      ],
    }
  }
}
</script>

<template>
  <TemplateWorks title="Tic Tac Toe" :link="link" :videoSrc="video" :details="details"
    description="Un'applicazione web interattiva di Tic-Tac-Toe, realizzata con Vue.js, CSS e JavaScript, pubblicata su Netlify. La homepage presenta le regole di gioco, che scompaiono al primo clic, lasciando spazio alla tabella di gioco.<br> L'interfaccia minimalista e intuitiva include il nome del gioco, il giocatore corrente, il tabellone e il conteggio dei punteggi per vittorie e pareggi, con un pulsante di reset per avviare nuove partite senza perdere i punteggi accumulati.">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-60 py-10 px-5 lg:px-10 justify-center">
      <!-- Immagine grande che occupa tutte e 4 le colonne -->
      <div
        class="w-full rounded-2xl flex items-center h-[20rem] lg:h-[55rem] overflow-hidden col-span-2 place-self-center">
        <img :src="mockup" class="object-cover w-full h-[50rem] lg:h-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="Screen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full">
        <img :src="rulesScreen" class="rounded-xl object-cover w-full" />
      </div>
      <div class="h-fit w-full col-span-2">
        <img :src="winScreen" class="rounded-xl object-cover w-full" />
      </div>
    </div>
  </TemplateWorks>
</template>
<script>
import TemplateWorks from './TemplateWorks.vue'
import TicTacToeVideo from '@/assets/video/Registrazione_Tic-Tac-Toe.mp4'
import TicTacToeMokup from '@/assets/img/Mockups/Mockup_Tic-tac-toe.png'
import TicTacToeScreen from '@/assets/img/screen/Tic-Tac-Toe/Screen_Tic-tac-toe.png'
import TicTacToeRulesScreen from '@/assets/img/screen/Tic-Tac-Toe/Screen_Tic-tac-toe-rules.png'
import TicTacToeWinScreen from '@/assets/img/screen/Tic-Tac-Toe/Screen_Tic-tac-toe-win.png'

export default {
  components: { TemplateWorks },
  data() {
    return {
      video: TicTacToeVideo,
      mockup: TicTacToeMokup,
      Screen: TicTacToeScreen,
      rulesScreen: TicTacToeRulesScreen,
      winScreen: TicTacToeWinScreen,
      details: [
        { label: 'Code', value: 'Vue' },
        { label: 'For', value: 'Start2impact' }
      ],
      link: `https://main--tictactoegamevue.netlify.app/`
    }
  }
}
</script>

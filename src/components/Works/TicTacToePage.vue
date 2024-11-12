<template>
  <TemplateWorks
    title="Tic Tac Toe"
    :videoSrc="video"
    :details="details"
    description="La homepage del sito presenta
                            inizialmente le regole del gioco, che scompaiono cliccando in un punto qualsiasi dello
                            schermo, rivelando la tabella di gioco. La struttura minimale e intuitiva della pagina si
                            concentra sugli elementi essenziali, quali il titolo, il giocatore corrente, la tabella di
                            gioco e i punteggi. Al termine di ogni partita, il sito mostra il vincitore o segnala un
                            pareggio, mantenendo il punteggio mentre il pulsante di restart consente di azzerare la
                            tabella per iniziare una nuova partita. Il sito è stato pubblicato tramite Netlify."
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-60 py-10 px-5 lg:px-10 justify-center"
    >
      <!-- Immagine grande che occupa tutte e 4 le colonne -->
      <div
        class="w-full rounded-2xl flex items-center h-[20rem] lg:h-[55rem] overflow-hidden col-span-2 place-self-center"
      >
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
      ]
    }
  }
}
</script>

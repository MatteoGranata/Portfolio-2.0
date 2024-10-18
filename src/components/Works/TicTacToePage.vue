<template>
    <div class="w-full h-full font-[Roboto]">
        <div ref="container" class="overflow-hidden w-full h-screen">
            <div ref="loader"
                class="w-full z-50 h-full flex justify-center items-center absolute text-[#E4DFD9] bg-[#0D0D0D] top-0 left-0 opacity-100">
                <h1 ref="text" class="text-[10rem] text-center">Tic Tac Toe</h1>
            </div>
            <div class="w-full h-screen relative left-0 -top-10 z-0 flex justify-center">
                <video ref="video" :src="video" class="image w-full h-full object-cover" autoplay muted loop>
                </video>
            </div>
            <div class="w-full h-fit px-10 mb-10">
                <div class="w-full h-fit grid grid-cols-2 mb-10">
                    <div class="flex justify-start gap-2">
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">Vue3</p>
                    </div>
                    <div class="flex justify-end">
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">start2impact project</p>
                    </div>
                </div>
                <div class="w-full h-full grid grid-cols-2">
                    <p class="text-[3rem]">Tic Tac Toe</p>
                    <div>
                        <p class="text-[1.5rem]">
                            La homepage del sito presenta
                            inizialmente le regole del gioco, che scompaiono cliccando in un punto qualsiasi dello
                            schermo, rivelando la tabella di gioco. La struttura minimale e intuitiva della pagina si
                            concentra sugli elementi essenziali, quali il titolo, il giocatore corrente, la tabella di
                            gioco e i punteggi. Al termine di ogni partita, il sito mostra il vincitore o segnala un
                            pareggio, mantenendo il punteggio mentre il pulsante di restart consente di azzerare la
                            tabella per iniziare una nuova partita. Il sito è stato pubblicato tramite Netlify.
                        </p>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 auto-rows-auto gap-60 py-10 px-10 justify-center">
                <!-- Immagine grande che occupa tutte e 4 le colonne -->
                <div
                    class="w-full rounded-2xl flex items-center h-[50rem] overflow-hidden col-span-2 place-self-center">
                    <img :src="mockup" class="object-contain w-full relative top-20 h-max">
                </div>
                <div class="h-fit w-full">
                    <img :src="Screen" class="rounded-xl object-cover w-full">
                </div>
                <div class="h-fit w-full">
                    <img :src="rulesScreen" class="rounded-xl object-cover w-full">
                </div>
                <div class="h-fit w-full col-span-2">
                    <img :src="winScreen" class="rounded-xl object-cover w-full">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TicTacToeVideo from "@/assets/video/Registrazione_Tic-Tac-Toe.mp4";
import TicTacToeMokup from "@/assets/img/Mockups/Mockup_Tic-tac-toe.png";
import TicTacToeScreen from "@/assets/img/screen/Tic-Tac-Toe/Screen_Tic-tac-toe.png";
import TicTacToeRulesScreen from "@/assets/img/screen/Tic-Tac-Toe/Screen_Tic-tac-toe-rules.png";
import TicTacToeWinScreen from "@/assets/img/screen/Tic-Tac-Toe/Screen_Tic-tac-toe-win.png";
import { WorkMixin } from "@/mixins/WorkMixin"

export default {
    mixins: [WorkMixin],
    data() {
        return {
            video: TicTacToeVideo,
            mockup: TicTacToeMokup,
            Screen: TicTacToeScreen,
            rulesScreen: TicTacToeRulesScreen,
            winScreen: TicTacToeWinScreen,
        };
    },
    mounted() {
        this.viewAnimation();
    },

}
</script>
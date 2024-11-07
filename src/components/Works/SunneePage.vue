<template>
    <TemplateWorks title="Sunnee" :videoSrc="video" :details="details" description="  Configuratore di Bottiglia Termica, un progetto sviluppato con Vue.js che permette agli
                            utenti di personalizzare una bottiglia scegliendo i colori di diverse parti, con
                            un'anteprima in tempo reale. L'applicazione offre un'interfaccia chiara e coinvolgente, con
                            un'anteprima visibile del thermos e colori accattivanti che invitano alla personalizzazione.

                            Il progetto è stato suddiviso in sette componenti Vue.js distinti per facilitare la gestione
                            e la manutenzione del codice. La struttura include una pagina di benvenuto che introduce
                            l'utente al configuratore, e un componente finale che mostra un riepilogo delle scelte
                            fatte, permettendo eventuali modifiche. Il componente principale, responsabile della
                            gestione della personalizzazione e dell'anteprima, è il cuore del progetto, in quanto
                            gestisce la selezione dei colori e la navigazione tra i vari passaggi del processo di
                            personalizzazione. Ogni fase permette di selezionare il colore di una specifica parte del
                            thermos, con un'anteprima costantemente aggiornata.

                            La principale difficoltà affrontata durante lo sviluppo è stata quella di garantire una
                            comunicazione fluida tra i componenti, così da rendere possibile l'aggiornamento in tempo
                            reale dell'anteprima del thermos. Inoltre, è stato complesso gestire l'impostazione corretta
                            delle immagini per applicare i colori selezionati dagli utenti.">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-60 py-10 px-5 lg:px-10 justify-center">
            <!-- Immagine grande che occupa tutte e 4 le colonne -->
            <div
                class="w-full rounded-2xl flex items-center h-[20rem] lg:h-[60rem] overflow-hidden col-span-2 place-self-center">
                <img :src="mockup" class="object-cover w-full h-[26rem] lg:h-full">
            </div>
            <div class="h-fit w-full">
                <img :src="Screen" class="rounded-xl object-cover w-full">
            </div>
            <div class="h-fit w-full">
                <img :src="capScreen" class="rounded-xl object-cover w-full">
            </div>
            <div class="h-fit w-full col-span-2">
                <img :src="bodyScreen" class="rounded-xl object-cover w-full">
            </div>
            <div class="h-fit w-full">
                <img :src="bottomScreen" class="rounded-xl object-cover w-full">
            </div>
            <div class="h-fit w-full">
                <img :src="thanksScreen" class="rounded-xl object-cover w-full">
            </div>
        </div>
    </TemplateWorks>

</template>
<script>
import TemplateWorks from "./TemplateWorks.vue";
import SunneeVideo from "@/assets/video/Registrazione_Sunnee.mp4";

import SunneeMokup from "@/assets/img/Mockups/Mockup_Sunnee.png";
import SunneeScreen from "@/assets/img/screen/Sunnee/Screen_sunnee.png";
import SunneeCapScreen from "@/assets/img/screen/Sunnee/Screen_sunnee-cap.png";
import SunneeBodyScreen from "@/assets/img/screen/Sunnee/Screen_sunnee-body.png";
import SunneeBottomScreen from "@/assets/img/screen/Sunnee/Screen_sunnee-bottom.png";
import SunneeThanksScreen from "@/assets/img/screen/Sunnee/Screen_sunnee-thanks.png";

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
        };
    },
}
</script>
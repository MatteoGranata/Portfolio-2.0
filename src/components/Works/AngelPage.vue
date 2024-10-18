<template>
    <div class="w-full h-full font-[Roboto]">
        <div ref="container" class="overflow-hidden w-full h-screen">
            <div ref="loader"
                class="w-full z-50 h-full flex justify-center items-center absolute text-[#1E293B] bg-[#F8F8FF] top-0 left-0 opacity-100">
                <h1 ref="text" class="text-[10rem] text-center">Angel</h1>
            </div>
            <div class="w-full h-screen relative left-0 -top-10 z-0 flex justify-center">
                <video ref="video" :src="video" class="image w-full h-full object-cover" autoplay muted loop>
                </video>
            </div>
            <div class="w-full h-fit px-10 mb-10">
                <div class="w-full h-fit grid grid-cols-2 mb-10">
                    <div class="flex justify-start gap-2">
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">Vue Router</p>
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">Node</p>
                        <p class="h-fit w-fit py-1 px-0">|</p>
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">TailwindCSS</p>
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">MongoDB Atlas</p>
                    </div>
                    <div class="flex justify-end">
                        <p class="border h-fit w-fit rounded-xl py-1 px-3">start2impact project</p>
                    </div>
                </div>
                <div class="w-full h-full grid grid-cols-2">
                    <p class="text-[3rem]">Angel</p>
                    <div>
                        <p class="text-[1.5rem]">
                            Angel è una web app progettata per semplificare la gestione del tempo e delle attività
                            quotidiane. L'idea nasce dall'osservazione delle difficoltà che molte persone incontrano nel
                            mantenere tutto organizzato e produttivo. La soluzione proposta è una piattaforma che
                            riunisce diverse funzionalità in un unico strumento, tra cui la gestione delle note
                            personali, il monitoraggio delle finanze, il calcolo del tempo speso su specifiche attività
                            e la gestione sicura delle password.

                            L'interfaccia utente è stata creata con un design pulito e intuitivo per ridurre le
                            distrazioni e aumentare la produttività. Quando l'utente accede alla web app, viene accolto
                            da una pagina di benvenuto che introduce Angel e lo invita a provare l'app. Dopo essersi
                            registrato, l'utente può creare il suo primo progetto e, navigando attraverso un layout
                            semplice e funzionale, gestire le varie sezioni in modo facile e veloce.

                            Dal punto di vista grafico, il logo di Angel è una rappresentazione stilizzata di un angelo,
                            simboleggiando luce, speranza e guida. I colori vivaci trasmettono un senso di pace,
                            crescita e felicità, e lo sfondo della web app, un motivo astratto a vortice, richiama
                            l'energia e il movimento, pur restando delicato per adattarsi all'ambiente
                            dell'applicazione.

                            Il progetto è stato strutturato in modo ordinato, separando chiaramente il front-end e il
                            back-end. Il front-end è stato sviluppato utilizzando Vue.js, con l'implementazione di tool
                            come Tailwind CSS per lo stile e Vite per la build. L'integrazione di librerie come axios e
                            vue-router facilita la gestione delle richieste HTTP e del routing. Il back-end, realizzato
                            con Node.js, utilizza Express per la gestione delle richieste web e Mongoose per
                            l'interazione con il database MongoDB. Funzionalità avanzate come la sicurezza delle
                            password (gestita da bcryptjs) e il caricamento di file (multer) sono state implementate per
                            garantire un’esperienza d'uso fluida e sicura.

                            Angel è stato deployato su Netlify per il front-end, mentre il back-end è ospitato su
                            Render. La scelta di MongoDB Atlas come database permette una gestione scalabile e
                            flessibile dei dati. Questo approccio tecnico garantisce una solida architettura per un'app
                            che vuole essere tanto potente quanto semplice da usare.
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
                    <img :src="howtouseScreen" class="rounded-xl object-cover w-full">
                </div>
                <div class="h-fit w-full col-span-2">
                    <img :src="loginScreen" class="rounded-xl object-cover w-full">
                </div>
                <div class="h-fit w-full">
                    <img :src="projectsScreen" class="rounded-xl object-cover w-full">
                </div>
                <div class="h-fit w-full">
                    <img :src="notesScreen" class="rounded-xl object-cover w-full">
                </div>
                <div class="h-fit w-full col-span-2">
                    <img :src="timerScreen" class="rounded-xl object-cover w-full">
                </div>
                <div class="h-fit w-full">
                    <img :src="passwordScreen" class="rounded-xl object-cover w-full">
                </div>
                <div class="h-fit w-full">
                    <img :src="financeScreen" class="rounded-xl object-cover w-full">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AngelVideo from "@/assets/video/Registrazione_Angel.mp4";
import AngelMokup from "@/assets/img/Mockups/Mockup_Angel.png";
import AngelScreen from "@/assets/img/screen/Angel/Screen_angel.png";
import AngelHowToUseScreen from "@/assets/img/screen/Angel/Screen_angel-howtouse.png";
import AngelLoginScreen from "@/assets/img/screen/Angel/Screen_angel-login.png";
import AngelProjectsScreen from "@/assets/img/screen/Angel/Screen_angel-projects.png";
import AngelNotesScreen from "@/assets/img/screen/Angel/Screen_angel-notes.png";
import AngelTimerScreen from "@/assets/img/screen/Angel/Screen_angel-timer.png";
import AngelPasswordsScreen from "@/assets/img/screen/Angel/Screen_angel-passwords.png";
import AngelFinanceScreen from "@/assets/img/screen/Angel/Screen_angel-finance.png";
import { WorkMixin } from "@/mixins/WorkMixin"

export default {
    mixins: [WorkMixin],
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
        };
    },
    mounted() {
        this.viewAnimation();
    },

}
</script>
<template>
    <TemplateWorks title="New York Times Clone" :videoSrc="video" :details="details" :link="link"
        description="Ho sviluppato un'applicazione React che replica la homepage del New York Times, mantenendo un layout fedele all'originale e aggiornando le notizie in tempo reale grazie alle API ufficiali del New York Times. Il progetto utilizza React, Redux Toolkit, React-Router, Axios e TailwindCSS per garantire una navigazione fluida e un design responsive. Gli utenti possono esplorare le sezioni principali, effettuare ricerche avanzate con filtri e visualizzare gli articoli più popolari. Inoltre, il sistema gestisce gli errori API con retry e fallback per un'esperienza d'uso ottimale.">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-60 py-10 px-5 lg:px-10 justify-center">
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

import NytCloneVideo from '../../assets/video/Registrazione_New_York_Times_Clone.mp4'
import NytCloneMokup from '../../assets/img/Mockups/Mockup_nyt_clone.png'
import NytCloneHome from '../../assets/img/screen/New_York_Times_Clone/screen_nyt_clone_home.png'
import NytCloneSection from '../../assets/img/screen/New_York_Times_Clone/screen_nyt_clone_section.png'
import NytCloneSearch from '../../assets/img/screen/New_York_Times_Clone/screen_nyt_clone_search.png'

export default {
    components: { TemplateWorks },
    data() {
        return {
            video: NytCloneVideo,
            mockup: NytCloneMokup,
            Screen: NytCloneHome,
            complimentiScreen: NytCloneSection,
            resetScreen: NytCloneSearch,
            details: [
                { label: 'Code', value: 'React, React-router, Redux' },
                { label: 'Framework', value: 'TailwindCSS' },
                { label: 'For', value: 'Start2impact' }
            ],
            link: `https://nyt-nyclone.netlify.app/`
        }
    }
}
</script>
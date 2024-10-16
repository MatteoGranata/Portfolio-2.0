<template>
    <div class="w-full h-full bg-[#00051C] font-[Roboto] text-[#E2B6FF]">
        <div ref="container" class="overflow-hidden w-full h-full">
            <div ref="loader"
                class="w-full z-50 h-full flex justify-center items-center absolute bg-[#00051C] top-0 left-0 opacity-100">
                <h1 ref="text" class="text-[10rem] text-center">Primo Portfolio Web</h1>
            </div>
            <div class="w-full h-screen relative left-0 -top-10 z-0">
                <video :src="images" class="image w-full h-full object-cover" autoplay muted loop>
                </video>
            </div>
        </div>
    </div>
</template>
<script>
import PrimoPortfolioVideo from "@/assets/video/Registrazione_Primo-Portfolio.mp4";
import { WorkMixin } from "@/mixins/WorkMixin"

export default {
    mixins: [WorkMixin],
    data() {
        return {
            images: PrimoPortfolioVideo,
        };
    },
    mounted() {
        this.viewAnimation();
    },

}
</script>
<template>
    <div class="w-full h-full bg-[#FFDEAD] font-[Roboto] text-[#000000]">
        <div ref="container" class="overflow-hidden w-full h-full">
            <div ref="loader"
                class="w-full z-50 h-full flex justify-center items-center absolute bg-[#FFDEAD] top-0 left-0 opacity-100">
                <h1 ref="text" class="text-[10rem] text-center">Sunnee</h1>
            </div>
            <div class="w-full h-screen relative left-0 -top-10 z-0">
                <video :src="images" class="image w-full h-full object-cover" autoplay muted loop>
                </video>
            </div>
        </div>
    </div>
</template>
<script>
import SunneeVideo from "@/assets/video/Registrazione_Sunnee.mp4";
import { WorkMixin } from "@/mixins/WorkMixin"

export default {
    mixins: [WorkMixin],
    data() {
        return {
            images: SunneeVideo,
        };
    },
    mounted() {
        this.viewAnimation();
    },

}
</script>
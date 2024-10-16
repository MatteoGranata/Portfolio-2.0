<template>
    <div class="w-full h-full bg-[#2E2E2E] font-[Roboto] text-[#FDD835]">
        <div ref="container" class="overflow-hidden w-full h-full">
            <div ref="loader"
                class="w-full z-50 h-full flex justify-center items-center absolute bg-[#2E2E2E] top-0 left-0 opacity-100">
                <h1 ref="text" class="text-[10rem] text-center">Portfolio Ragusa</h1>
            </div>
            <div class="w-full h-screen relative left-0 -top-10 z-0">
                <video :src="images" class="image w-full h-full object-cover" autoplay muted loop>
                </video>
            </div>
        </div>
    </div>
</template>
<script>
import PortfolioRagusaVideo from "@/assets/video/Registrazione_Portfolio-Ragusa.mp4";
import { WorkMixin } from "@/mixins/WorkMixin"

export default {
    mixins: [WorkMixin],
    data() {
        return {
            images: PortfolioRagusaVideo,
        };
    },
    mounted() {
        this.viewAnimation();
    },

}
</script>
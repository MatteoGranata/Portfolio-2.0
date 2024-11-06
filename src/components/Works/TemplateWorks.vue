<template>
    <div class="w-full h-full font-[Roboto]" :style="{ color: textColor, backgroundColor: color }">
        <div ref="container" class="overflow-hidden w-full h-screen">
            <div ref="loader"
                class="w-full z-50 h-full flex justify-center items-center absolute top-0 left-0 opacity-100"
                :style="{ backgroundColor: textColor, color: color }">
                <h1 ref="text" class="text-[5rem] lg:text-[10rem] text-center">{{ title }}</h1>
            </div>

            <div class="w-full lg:h-screen relative left-0 lg:-top-5 z-0 flex justify-center mb-5 sm:mb-0">
                <video ref="video" :src="videoSrc" class="image w-full h-full lg:object-cover" autoplay muted
                    loop></video>
            </div>

            <div class="w-full h-fit px-5 lg:px-10 mb-10 mt-5">
                <div class="w-full h-full grid lg:grid-cols-2">
                    <!-- Dettagli tecnici -->
                    <div class="w-full grid grid-cols-2 h-fit text-[1.1rem] lg:text-[1.5rem] mb-10 lg:mb-0">
                        <div v-for="(detail, index) in details" :key="index" class="w-11/12"
                            :style="{ borderTop: '2px solid ' + textColor }">
                            <h1>{{ detail.label }}:</h1>
                            <p class="h-fit w-fit">{{ detail.value }}</p>
                        </div>
                    </div>

                    <!-- Descrizione -->
                    <div>
                        <p class="text-[1.3rem] lg:text-[1.5rem]">{{ description }}</p>
                    </div>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { WorkMixin } from "@/mixins/WorkMixin";

export default {
    mixins: [WorkMixin],
    data() {
        return {
            color: '',
            textColor: ''
        };
    },
    props: {
        title: {
            type: String,
            required: true
        },
        videoSrc: {
            type: String,
            required: true
        },
        details: {
            type: Array,
            default: () => []
        },
        description: {
            type: String,
            required: true
        },
    },
    mounted() {
        this.viewAnimation();
        this.textColor = localStorage.getItem('textColor')
        this.color = localStorage.getItem('color')
    }
};
</script>
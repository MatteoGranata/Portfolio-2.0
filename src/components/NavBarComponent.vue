<template>
    <nav class="fixed w-full h-fit font-[Roboto] z-10" :style="{ color: textColor }">
        <!-- Navbar principale -->
        <div v-if="isMainPage" class="flex justify-between w-full p-4">
            <div @mouseover="onMouseOver" @mouseleave="onMouseleave" class="flex z-50">
                <button @click="scrollToWork"
                    class="rounded-2xl px-3 py-1 backdrop-blur-lg bg-neutral-100/30 text-lg drop-shadow-lg">
                    Work
                </button>
                <button @click="scrollToAbout" ref="about"
                    class="relative -left-[3.8rem] top-0 rounded-2xl px-3 py-1 backdrop-blur-lg bg-neutral-100/30 text-lg text-transparent -z-10 drop-shadow-lg">
                    About
                </button>
            </div>
            <p class="uppercase rounded-2xl px-3 py-1 backdrop-blur-lg bg-neutral-100/30 text-lg drop-shadow-lg">
                {{ time }}
            </p>
        </div>

        <!-- Navbar alternativa per le sottopagine -->
        <div v-else class="flex justify-between w-full p-4">
            <div class="flex z-50">
                <button @click="scrollToWork"
                    class="rounded-2xl px-3 py-1 backdrop-blur-lg bg-neutral-100/30 text-lg drop-shadow-lg">
                    Home
                </button>
            </div>
            <p class="uppercase rounded-2xl px-3 py-1 backdrop-blur-lg bg-neutral-100/30 text-lg drop-shadow-lg">
                {{ time }}
            </p>
        </div>
    </nav>
</template>

<script>
import { gsap } from "gsap";

export default {
    data() {
        return {
            time: this.getCurrentTime(),
            textColor: ""
        };
    },
    computed: {
        isMainPage() {
            // Controlla se il percorso è la homepage, per mostrare la navbar principale
            return this.$route.path === "/";
        }
    },
    methods: {
        goBack() {
            // Torna alla pagina principale
            this.$router.push({ path: "/" });
        },
        scrollToWork() {
            const workSection = document.querySelector('.work-section');
            if (workSection) {
                workSection.scrollIntoView({ behavior: 'smooth' });
                history.pushState(null, '', window.location.pathname);
            } else {
                this.$router.push({ path: "/" });
                this.textColor = '';
            }
        },
        scrollToAbout() {
            const aboutSection = document.querySelector('.about-section');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
                history.pushState(null, '', window.location.pathname);
            } else {
                this.$router.push({ path: "/" });
                this.textColor = '';
            }
        },
        onMouseOver() {
            const about = this.$refs.about;
            gsap.to(about, {
                duration: 1,
                ease: "power4.out",
                color: 'currentColor',
                left: '1rem'
            });
        },
        onMouseleave() {
            const about = this.$refs.about;
            gsap.to(about, {
                duration: 1,
                ease: "power4.out",
                color: '',
                left: '-3.8rem'
            });
        },
        getCurrentTime() {
            const options = {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            };
            return new Date().toLocaleTimeString(undefined, options);
        },
        updateTime() {
            this.time = this.getCurrentTime();
        }
    },
    mounted() {
        this.interval = setInterval(this.updateTime, 1000);
        this.textColor = localStorage.getItem('textColor');
    },
    beforeUnmount() {
        clearInterval(this.interval);
    }
}
</script>

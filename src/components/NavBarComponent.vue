<template>
    <nav class="fixed w-full h-fit font-[Roboto] z-10 ">
        <div class="flex justify-between w-full p-4">
            <div @mouseover="onMouseOver" @mouseleave="onMouseleave" class="flex z-50">
                <button @click="scrollToWork"
                    class="rounded-2xl px-3 py-1 backdrop-blur-lg bg-neutral-100/30 text-lg drop-shadow-lg">
                    Work
                </button>
                <a href="AboutPage" ref="about"
                    class="relative -left-[3.8rem] top-0 rounded-2xl px-3 py-1 backdrop-blur-lg bg-neutral-100/30 text-lg text-transparent -z-10 drop-shadow-lg">
                    About
                </a>
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
        };
    },
    methods: {
        scrollToWork() {
            const workSection = document.querySelector('.work-section');
            if (workSection) {
                workSection.scrollIntoView({ behavior: 'smooth' });
                // Aggiorna l'URL senza hash
                history.pushState(null, '', window.location.pathname); // Mantieni solo il pathname
            } else {
                this.$router.push({ path: "/" })
            }
        },
        onMouseOver() {
            const about = this.$refs.about;

            gsap.to(about,
                {
                    duration: 1,
                    ease: "power4.out",
                    color: 'currentColor',
                    left: '1rem'
                }
            )
        },
        onMouseleave() {
            const about = this.$refs.about;
            gsap.to(about,
                {
                    duration: 1,
                    ease: "power4.out",
                    color: '',
                    left: '-3.8rem'
                }
            )
        },
        getCurrentTime() {
            const options = {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            };
            const date = new Date();
            return date.toLocaleTimeString(undefined, options);
        },
        updateTime() {
            this.time = this.getCurrentTime();
        }
    },
    mounted() {
        this.interval = setInterval(this.updateTime, 1000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    }
}
</script>
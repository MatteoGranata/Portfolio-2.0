import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const WorkMixin = {
  methods: {
    viewAnimation() {
      const load = this.$refs.loader
      const text = this.$refs.text
      const video = this.$refs.video
      const container = this.$refs.container
      const tl = gsap.timeline()

      tl.to([text, load], {
        duration: 2
      })
      tl.to([text, load], {
        duration: 1,
        y: -1000,
        display: 'hidden',
        ease: 'power3.in'
      })
      tl.to(container, {
        duration: 0.1,
        overflow: 'visible',
        height: '100%'
      })
      gsap.to(video, {
        borderRadius: '15px',
        width: '97%',
        scrollTrigger: {
          scrub: true,
          trigger: video,
          markers: false,
          start: 'bottom +=300'
        }
      })
    }
  }
}

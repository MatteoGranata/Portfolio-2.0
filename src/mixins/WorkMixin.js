import gsap from 'gsap'

export const WorkMixin = {
  methods: {
    viewAnimation() {
      const load = this.$refs.loader
      const text = this.$refs.text
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
        overflow: 'visible'
      })
    }
  }
}

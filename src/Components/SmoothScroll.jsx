import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function SmoothScroll({ children }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const lenis = new Lenis({
      anchors: true,
      duration: 1.15,
      smoothWheel: true,
    })

    const updateScroll = (time) => {
      lenis.raf(time * 1000)
    }

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(updateScroll)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off('scroll', ScrollTrigger.update)
      gsap.ticker.remove(updateScroll)
      gsap.ticker.lagSmoothing(500, 33)
      lenis.destroy()
    }
  }, [])

  return children
}

export default SmoothScroll

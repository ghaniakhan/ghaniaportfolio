import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scrollReveal = (elementRef) => {
  gsap.from(elementRef.current, {
    scrollTrigger: {
      trigger: elementRef.current,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
  });
};

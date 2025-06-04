import { gsap } from 'gsap';

export const heroIntroAnimation = (heroRef, textRef) => {
  const tl = gsap.timeline();

  tl.from(heroRef.current, {
    duration: 1.2,
    opacity: 0,
    y: -50,
    ease: 'power3.out',
  })
    .from(
      textRef.current,
      {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: 'power3.out',
      },
      '-=0.8'
    );

  return tl;
};

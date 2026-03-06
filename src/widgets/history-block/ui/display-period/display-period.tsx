import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import styles from './display-period.module.scss';

interface DisplayPeriodProps {
  title: string;
}

export function DisplayPeriod(props: DisplayPeriodProps) {
  const { title } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to(containerRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: 'power2.in',
      })
        .to({}, { duration: 0.6 })
        .fromTo(
          containerRef.current,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
        );
    },
    { dependencies: [title], scope: containerRef },
  );

  return (
    <div ref={containerRef} className={styles.title}>
      {title}
    </div>
  );
}

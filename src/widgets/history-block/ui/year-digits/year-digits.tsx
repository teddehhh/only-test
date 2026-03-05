import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import styles from './year-digits.module.scss';

interface YearDigitsProps {
  start: string;
  end: string;
}

export function YearDigits(props: YearDigitsProps) {
  const { start, end } = props;
  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const prevStart = useRef(parseInt(start));
  const prevEnv = useRef(parseInt(end));

  useGSAP(
    () => {
      gsap.to(startRef.current, {
        innerText: start,
        duration: 1,
        snap: { innerText: 1 },
        ease: 'power2.inOut',
      });

      gsap.to(endRef.current, {
        innerText: end,
        duration: 1,
        snap: { innerText: 1 },
        ease: 'power2.inOut',
      });

      prevStart.current = parseInt(start);
      prevEnv.current = parseInt(end);
    },
    { dependencies: [start, end] },
  );

  return (
    <div className={styles.yearsWrapper}>
      <span ref={startRef}></span>
      <span ref={endRef}></span>
    </div>
  );
}

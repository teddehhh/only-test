import { useRef } from 'react';
import { useCirclePoints } from '../../model/useCirclePoints';
import styles from './circle.module.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { clsx } from 'clsx';

interface CircleProps {
  activeIndex: number;
  pointsCount: number;
  currentTitle: string;
  onPointClick: (_: number) => void;
}

export function Circle(props: CircleProps) {
  const { activeIndex, currentTitle, pointsCount, onPointClick } = props;

  const points = useCirclePoints(pointsCount, 50);
  const circleRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget.classList.contains(styles.active)) {
      gsap.to(e.currentTarget, {
        scale: 1,
        backgroundColor: '#f4f5f9',
        duration: 0.3,
      });
      gsap.to(e.currentTarget.querySelector(`.${styles.dotNumber}`), {
        opacity: 1,
        visibility: 'visible',
        duration: 0.3,
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget.classList.contains(styles.active)) {
      gsap.to(e.currentTarget, {
        scale: 0.1,
        backgroundColor: '#42567a',
        duration: 0.3,
      });
      gsap.to(e.currentTarget.querySelector(`.${styles.dotNumber}`), {
        opacity: 0,
        visibility: 'hidden',
        duration: 0.3,
      });
    }
  };

  useGSAP(
    () => {
      const step = 360 / pointsCount;
      const rotation = -(activeIndex * step);

      gsap.to(circleRef.current, { rotation, duration: 1, ease: 'power2.inOut' });

      gsap.to(`.${styles.dot}`, {
        rotation: -rotation,
        duration: 1,
        ease: 'power2.inOut',
        scale: 0.1,
        backgroundColor: '#42567a',
      });

      gsap.to(`.${styles.active}`, {
        scale: 1,
        backgroundColor: '#f4f5f9',
        duration: 1,
        ease: 'power2.inOut',
      });

      gsap.set(`.${styles.dotTitle}`, { opacity: 0, visibility: 'hidden' });

      gsap.to(`.${styles.active} .${styles.dotNumber}`, {
        opacity: 1,
        visibility: 'visible',
        duration: 0.5,
        delay: 0.5,
      });

      gsap.to(`.${styles.active} .${styles.dotTitle}`, {
        opacity: 1,
        visibility: 'visible',
        duration: 0.5,
        delay: 1,
        ease: 'power1.out',
      });
    },
    { scope: circleRef, dependencies: [activeIndex] },
  );

  return (
    <div ref={circleRef} className={styles.circle}>
      {points.map((point, index) => (
        <div
          key={index}
          className={clsx(styles.dot, { [styles.active]: index === activeIndex })}
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
          }}
          onClick={() => onPointClick(index)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className={styles.dotNumber}>{index + 1}</span>
          <span className={styles.dotTitle}>{currentTitle}</span>
        </div>
      ))}
    </div>
  );
}

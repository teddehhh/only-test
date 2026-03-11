import { useRef } from 'react';
import { useCirclePoints } from '../../lib/hooks/useCirclePoints';
import styles from './circle.module.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { clsx } from 'clsx';
import { DATA } from '../../lib/constants/data';

interface CircleProps {
  activeIndex: number;
  onPointClick: (_: number) => void;
}

export function Circle(props: CircleProps) {
  const { activeIndex, onPointClick } = props;

  const pointsCount = DATA.length;
  const currentTitle = DATA[activeIndex]?.title;
  const points = useCirclePoints(pointsCount, 50);
  const circleRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget.classList.contains(styles.active)) {
      gsap.to(e.currentTarget, {
        scale: 1,
        duration: 0.3,
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget.classList.contains(styles.active)) {
      gsap.to(e.currentTarget, {
        scale: 0.8,
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
      });

      gsap.to(`.${styles.dot}:not(.${styles.active})`, {
        scale: 0.8,
        duration: 0.5,
        ease: 'power2.inOut',
      });
      gsap.to(`.${styles.active}`, {
        scale: 1,
        duration: 1,
        ease: 'power2.inOut',
      });
      gsap.to(`.${styles.dotTitle}`, {
        opacity: 1,
        visibility: 'visible',
        delay: 1,
        ease: 'power1.out',
      });
    },
    { scope: circleRef, dependencies: [activeIndex] },
  );

  return (
    <div ref={circleRef} className={styles.circle}>
      {points.map((point, index) => {
        const Icon = DATA[index]?.icon;

        return (
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
            <Icon style={{ width: '85px', height: '85px' }} />
            {index === activeIndex && <span className={styles.dotTitle}>{currentTitle}</span>}
          </div>
        );
      })}
    </div>
  );
}

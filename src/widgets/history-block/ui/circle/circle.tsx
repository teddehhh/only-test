import { useRef } from 'react';
import { useCirclePoints } from '../../lib/useCirclePoints';
import styles from './circle.module.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface CircleProps {
  activeIndex: number;
  pointsCount: number;
  onPointClick: (_: number) => void;
}

export function Circle(props: CircleProps) {
  const { activeIndex, pointsCount, onPointClick } = props;

  const points = useCirclePoints(pointsCount, 50);
  const circleRef = useRef<HTMLDivElement>(null);

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
    },
    { scope: circleRef, dependencies: [activeIndex] },
  );

  return (
    <div className={styles.wrapper}>
      <div ref={circleRef} className={styles.circle}>
        {points.map((point, index) => (
          <div
            key={index}
            className={styles.dot}
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
            }}
            onClick={() => onPointClick(index)}
          >
            <span className={styles.dotNumber}>{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

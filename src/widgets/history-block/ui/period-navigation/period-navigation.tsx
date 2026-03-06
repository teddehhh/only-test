import styles from './period-navigation.module.scss';
import { clsx } from 'clsx';

interface PeriodNavigationProps {
  activeIndex: number;
  totalCount: number;
  onPointClick: (_: number) => void;
}

export function PeriodNavigation(props: PeriodNavigationProps) {
  const { activeIndex, totalCount, onPointClick } = props;

  return (
    <div className={styles.navigationWrapper}>
      {Array.from({ length: totalCount }).map((_, index) => (
        <div
          key={index}
          className={clsx(styles.dot, {
            [styles.dotActive]: index === activeIndex,
          })}
          onClick={() => onPointClick(index)}
        />
      ))}
    </div>
  );
}

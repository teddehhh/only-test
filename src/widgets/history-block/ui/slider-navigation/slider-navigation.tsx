import { Arrow } from '@shared/ui';
import styles from './slider-navigation.module.scss';
import { displayDigits } from '../../lib/utils/display-digits';

interface SliderNavigationProps {
  activeIndex: number;
  totalCount: number;
  onPrev: () => void;
  onNext: () => void;
}

export function SliderNavigation(props: SliderNavigationProps) {
  const { activeIndex, totalCount, onPrev, onNext } = props;

  return (
    <div className={styles.navigationWrapper}>
      <div className={styles.counterWrapper}>
        <span>{displayDigits(activeIndex + 1)}</span>/<span>{displayDigits(totalCount)}</span>
      </div>
      <div className={styles.buttonsWrapper}>
        <button onClick={onPrev} disabled={activeIndex === 0}>
          <Arrow size={12} direction="left" />
        </button>
        <button onClick={onNext} disabled={activeIndex === totalCount - 1}>
          <Arrow size={12} direction="right" />
        </button>
      </div>
    </div>
  );
}

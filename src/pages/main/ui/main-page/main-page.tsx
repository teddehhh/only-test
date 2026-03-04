import { HistoryBlock } from '@widgets/history-block';
import styles from './main-page.module.scss';

export function MainPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <HistoryBlock />
      </div>
    </div>
  );
}

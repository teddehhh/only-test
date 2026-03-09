import styles from './title.module.scss';

export function Title() {
  return (
    <h1 className={styles.title}>
      Исторические
      <br />
      даты
    </h1>
  );
}

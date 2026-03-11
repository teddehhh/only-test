import styles from './title.module.scss';

export function Title() {
  return (
    <h1 className={styles.title}>
      Солнечная
      <br />
      система
    </h1>
  );
}

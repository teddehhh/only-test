import { type HistoryEvent } from '../model/types';
import styles from './event-card.module.scss';

interface EventCardProps {
  event: HistoryEvent;
}

export const EventCard = (props: EventCardProps) => {
  const { event } = props;
  const { year, description } = event;

  return (
    <div className={styles.card}>
      <div className={styles.year}>{year}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

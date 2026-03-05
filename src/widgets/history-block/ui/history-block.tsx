import { useState } from 'react';
import { Circle } from './circle/circle';
import { EventSlider } from './event-slider/event-slider';
import { YearDigits } from './year-digits/year-digits';
import styles from './history-block.module.scss';

export function HistoryBlock() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentPeriod = DATA[activeIndex];
  const handlePointClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className={styles.circleWrapper}>
        <YearDigits start={currentPeriod?.startYear ?? ''} end={currentPeriod?.endYear ?? ''} />
        <Circle activeIndex={activeIndex} pointsCount={6} onPointClick={handlePointClick} />
      </div>
      <EventSlider events={currentPeriod?.events ?? []} activePeriodId={activeIndex} />
    </div>
  );
}

const DATA = [
  {
    id: 0,
    title: 'Технологии',
    startYear: '1000',
    endYear: '1300',
    events: [
      { year: '1000', description: 'Событие 1 периода 1' },
      { year: '1050', description: 'Событие 2 периода 1' },
      { year: '1100', description: 'Событие 3 периода 1' },
      { year: '1150', description: 'Событие 4 периода 1' },
      { year: '1200', description: 'Событие 2 периода 1' },
      { year: '1250', description: 'Событие 6 периода 1' },
      { year: '1300', description: 'Событие 7 периода 1' },
    ],
  },
  {
    id: 1,
    title: 'Кино',
    startYear: '2000',
    endYear: '2300',
    events: [
      { year: '2000', description: 'Событие 1 периода 2' },
      { year: '2050', description: 'Событие 2 периода 2' },
      { year: '2100', description: 'Событие 3 периода 2' },
      { year: '2150', description: 'Событие 4 периода 2' },
      { year: '2200', description: 'Событие 2 периода 2' },
      { year: '2250', description: 'Событие 6 периода 2' },
      { year: '2300', description: 'Событие 7 периода 2' },
    ],
  },
  {
    id: 2,
    title: 'Литература',
    startYear: '3000',
    endYear: '3300',
    events: [
      { year: '3000', description: 'Событие 1 периода 3' },
      { year: '3050', description: 'Событие 2 периода 3' },
      { year: '3100', description: 'Событие 3 периода 3' },
      { year: '3150', description: 'Событие 4 периода 3' },
      { year: '3200', description: 'Событие 2 периода 3' },
      { year: '3250', description: 'Событие 6 периода 3' },
      { year: '3300', description: 'Событие 7 периода 3' },
    ],
  },
  {
    id: 3,
    title: 'Наука',
    startYear: '4000',
    endYear: '4300',
    events: [
      { year: '4000', description: 'Событие 1 периода 2' },
      { year: '4050', description: 'Событие 2 периода 2' },
      { year: '4100', description: 'Событие 3 периода 2' },
      { year: '4150', description: 'Событие 4 периода 2' },
      { year: '4200', description: 'Событие 2 периода 2' },
      { year: '4250', description: 'Событие 6 периода 2' },
      { year: '4300', description: 'Событие 7 периода 2' },
    ],
  },
  {
    id: 4,
    title: 'Спорт',
    startYear: '5000',
    endYear: '5300',
    events: [
      { year: '5000', description: 'Событие 1 периода 2' },
      { year: '5050', description: 'Событие 2 периода 2' },
      { year: '5100', description: 'Событие 3 периода 2' },
      { year: '5150', description: 'Событие 4 периода 2' },
      { year: '5200', description: 'Событие 2 периода 2' },
      { year: '5250', description: 'Событие 6 периода 2' },
      { year: '5300', description: 'Событие 7 периода 2' },
    ],
  },
  {
    id: 5,
    title: 'Медицина',
    startYear: '6000',
    endYear: '6300',
    events: [
      { year: '6000', description: 'Событие 1 периода 2' },
      { year: '6050', description: 'Событие 2 периода 2' },
      { year: '6100', description: 'Событие 3 периода 2' },
      { year: '6150', description: 'Событие 4 периода 2' },
      { year: '6200', description: 'Событие 2 периода 2' },
      { year: '6250', description: 'Событие 6 периода 2' },
      { year: '6300', description: 'Событие 7 периода 2' },
    ],
  },
];

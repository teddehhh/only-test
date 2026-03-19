import { useState } from 'react';
import { Circle } from './circle/circle';
import { EventSlider } from './event-slider/event-slider';
import styles from './history-block.module.scss';
import { Title } from './title/title';
import { SliderNavigation } from './slider-navigation/slider-navigation';
import { useIsMobile } from '@shared/lib';
import { DATA } from '../lib/constants/data';
import { DisplayPeriod } from './display-period/display-period';
import { PeriodNavigation } from './period-navigation/period-navigation';
import Sun from '@shared/assets/sun.svg?react';
import { Planet } from './planet/planet';

export function HistoryBlock() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();

  const currentPeriod = DATA[activeIndex];

  const handlePointClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    setActiveIndex((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setActiveIndex((prev) => prev + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.widgetContainer}>
        <div className={styles.circleContainer}>
          {!isMobile && (
            <>
              <Circle activeIndex={activeIndex} onPointClick={handlePointClick} />
              <Planet Icon={Sun} className={styles.sun} />
            </>
          )}
          {isMobile && (
            <Planet
              key={currentPeriod?.title}
              Icon={currentPeriod?.icon}
              className={styles.planet}
            />
          )}
        </div>
        <div className={styles.contentContainer}>
          <Title />
          <div className={styles.navSliderContainer}>
            <SliderNavigation
              activeIndex={activeIndex}
              totalCount={DATA.length}
              onPrev={handlePrevClick}
              onNext={handleNextClick}
            />
            <EventSlider events={currentPeriod?.events ?? []} activePeriodId={activeIndex} />
            {isMobile && <DisplayPeriod title={currentPeriod?.title ?? ''} />}
            {isMobile && (
              <PeriodNavigation
                activeIndex={activeIndex}
                totalCount={DATA.length}
                onPointClick={handlePointClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

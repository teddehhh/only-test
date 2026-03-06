import { useState } from 'react';
import { Circle } from './circle/circle';
import { EventSlider } from './event-slider/event-slider';
import { YearDigits } from './year-digits/year-digits';
import styles from './history-block.module.scss';
import { Title } from './title/title';
import { SliderNavigation } from './slider-navigation/slider-navigation';
import { useIsMobile } from '@shared/lib';
import { DATA } from '../lib/constants/data';
import { DisplayPeriod } from './display-period/display-period';

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
    <div>
      <Title />
      <div className={styles.circleWrapper}>
        <YearDigits start={currentPeriod?.startYear ?? ''} end={currentPeriod?.endYear ?? ''} />
        {!isMobile && (
          <Circle
            activeIndex={activeIndex}
            currentTitle={currentPeriod?.title ?? ''}
            pointsCount={DATA.length}
            onPointClick={handlePointClick}
          />
        )}
      </div>
      <div className={styles.navSliderWrapper}>
        <SliderNavigation
          activeIndex={activeIndex}
          totalCount={DATA.length}
          onPrev={handlePrevClick}
          onNext={handleNextClick}
        />
        <EventSlider events={currentPeriod?.events ?? []} activePeriodId={activeIndex} />
        {isMobile && <DisplayPeriod title={currentPeriod?.title ?? ''} />}
      </div>
    </div>
  );
}

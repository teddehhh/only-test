import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { EventCard, type HistoryEvent } from '@entities/history-event';
import gsap from 'gsap';
import 'swiper/swiper-bundle.css';
import styles from './event-slider.module.scss';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Arrow } from '@shared/ui';

interface EventSliderProps {
  events: HistoryEvent[];
  activePeriodId: number;
}

export const EventSlider = (props: EventSliderProps) => {
  const { events, activePeriodId } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.killTweensOf(containerRef.current);

      const tl = gsap.timeline();

      tl.to(containerRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: 'power2.in',
      })
        .to({}, { duration: 0.6 })
        .fromTo(
          containerRef.current,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
        );
    },
    { dependencies: [events], scope: containerRef },
  );

  return (
    <div ref={containerRef} className={styles.sliderWrapper}>
      <Swiper
        key={activePeriodId}
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          160: { slidesPerView: 1, spaceBetween: 10 },
          320: { slidesPerView: 1.5, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 80 },
        }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-prev">
        <Arrow direction="left" />
      </button>
      <button className="swiper-button-next">
        <Arrow direction="right" />
      </button>
    </div>
  );
};

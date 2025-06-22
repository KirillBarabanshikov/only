import 'swiper/css';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { FC, useRef, useState } from 'react';
import { Swiper as SwiperCore } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrowLeft from '@/shared/assets/icons/arrow-left.svg';
import ArrowRight from '@/shared/assets/icons/arrow-right.svg';
import { ITimeline } from '@/shared/types';

import styles from './EventsSlider.module.scss';

interface IEventsSliderProps {
  currentTimeline: ITimeline;
  className?: string;
}

export const EventsSlider: FC<IEventsSliderProps> = ({
  currentTimeline,
  className,
}) => {
  const [displayedTimeline, setDisplayedTimeline] = useState(currentTimeline);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const swiperRef = useRef<SwiperCore | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!wrapperRef.current) return;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: 'power2.out', duration: 0.3 },
        });

        tl.to(wrapperRef.current, { opacity: 0, y: 15 })
          .add(() => {
            setDisplayedTimeline(currentTimeline);
            swiperRef.current?.slideTo(0, 0);
            setIsBeginning(true);
            setIsEnd(currentTimeline.events.length <= 3);
          })
          .to(wrapperRef.current, { opacity: 1, y: 0 });
      }, wrapperRef);

      return () => ctx.revert();
    },
    { dependencies: [currentTimeline], scope: wrapperRef },
  );

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperCore) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div ref={wrapperRef} className={clsx(styles.eventsSlider, className)}>
      <div className={clsx(styles.head, 'visible-mobile')}>
        <div className={styles.title}>{displayedTimeline.title}</div>
      </div>
      <Swiper
        spaceBetween={80}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 25,
          },
          1023.98: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
        className={styles.swiper}
      >
        {displayedTimeline.events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className={styles.event}>
              <div className={styles.eventTitle}>{event.title}</div>
              <div className={styles.eventDescription}>{event.description}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={handlePrev}
        disabled={isBeginning}
        className={clsx(
          styles.eventsButton,
          styles.eventsButtonPrev,
          'hidden-mobile',
        )}
      >
        <ArrowLeft />
      </button>
      <button
        onClick={handleNext}
        disabled={isEnd}
        className={clsx(
          styles.eventsButton,
          styles.eventsButtonNext,
          'hidden-mobile',
        )}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

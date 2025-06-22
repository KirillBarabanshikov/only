import 'swiper/css';

import clsx from 'clsx';
import { FC, useRef, useState } from 'react';
import { Swiper as SwiperCore } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrowLeft from '@/shared/assets/icons/arrow-left.svg';
import ArrowRight from '@/shared/assets/icons/arrow-right.svg';

import styles from './EventsSlider.module.scss';

interface IEventsSliderProps {
  className?: string;
}

export const EventsSlider: FC<IEventsSliderProps> = ({ className }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperCore | null>(null);

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
    <div className={clsx(styles.eventsSlider, className)}>
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
        <SwiperSlide>
          <div className={styles.event}>
            <div className={styles.eventTitle}>2015</div>
            <div className={styles.eventDescription}>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.event}>
            <div className={styles.eventTitle}>2015</div>
            <div className={styles.eventDescription}>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.event}>
            <div className={styles.eventTitle}>2015</div>
            <div className={styles.eventDescription}>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.event}>
            <div className={styles.eventTitle}>2015</div>
            <div className={styles.eventDescription}>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.event}>
            <div className={styles.eventTitle}>2015</div>
            <div className={styles.eventDescription}>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.event}>
            <div className={styles.eventTitle}>2015</div>
            <div className={styles.eventDescription}>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.event}>
            <div className={styles.eventTitle}>2015</div>
            <div className={styles.eventDescription}>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.event}>
            <div className={styles.eventTitle}>2015</div>
            <div className={styles.eventDescription}>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </div>
          </div>
        </SwiperSlide>
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

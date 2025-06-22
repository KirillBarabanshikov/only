import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FC, useRef } from 'react';

import styles from './Timeline.module.scss';

interface ITimelineProps {
  start: number;
  end: number;
}

export const Timeline: FC<ITimelineProps> = ({ start, end }) => {
  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const animatedStart = useRef({ value: start });
  const animatedEnd = useRef({ value: end });

  useGSAP(
    () => {
      gsap.to(animatedStart.current, {
        value: start,
        duration: 0.3,
        ease: 'power2.out',
        onUpdate: () => {
          if (startRef.current) {
            startRef.current.innerText = Math.round(
              animatedStart.current.value,
            ).toString();
          }
        },
      });

      gsap.to(animatedEnd.current, {
        value: end,
        duration: 0.3,
        ease: 'power2.out',
        onUpdate: () => {
          if (endRef.current) {
            endRef.current.innerText = Math.round(
              animatedEnd.current.value,
            ).toString();
          }
        },
      });
    },
    { dependencies: [start, end] },
  );

  return (
    <div className={styles.timeline}>
      <div ref={startRef} className={styles.start}>
        {start}
      </div>
      <div ref={endRef} className={styles.end}>
        {end}
      </div>
    </div>
  );
};

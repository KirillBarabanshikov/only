import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { FC, useMemo, useRef } from 'react';

import { ITimeline } from '@/shared/types';

import styles from './TimelineSegments.module.scss';

interface ITimelineSegmentsProps {
  timelines: ITimeline[];
  currentTimelineIndex: number;
  onChange: (index: number) => void;
  className?: string;
}

export const TimelineSegments: FC<ITimelineSegmentsProps> = ({
  timelines,
  currentTimelineIndex,
  onChange,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const degToRad = Math.PI / 180;
  const radius = 265;

  useGSAP(() => {
    gsap.to(containerRef.current, {
      rotate: -60 * currentTimelineIndex,
      duration: 1,
      ease: 'power2.out',
    });
  }, [currentTimelineIndex]);

  const points = useMemo(() => {
    return timelines.map((_, index) => {
      const angle = 30 + (360 / timelines.length) * index;
      const rad = angle * degToRad;
      return {
        index,
        x: radius * Math.sin(rad),
        y: -radius * Math.cos(rad),
      };
    });
  }, [timelines.length]);

  return (
    <div className={clsx(styles.timelineSegments, className)}>
      <div
        ref={containerRef}
        className={clsx(styles.timelineSegmentsCircle, 'hidden-mobile')}
      >
        {points.map(({ index, x, y }) => (
          <div
            key={index}
            onClick={() => onChange(index)}
            className={clsx(styles.timelineSegmentsCircleItem, {
              [styles.active]: currentTimelineIndex === index,
            })}
            style={{
              position: 'absolute',
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%) rotate(${60 * currentTimelineIndex}deg)`,
            }}
          >
            <div className={styles.point}>
              {index + 1}
              <div className={styles.pointTitle}>
                {timelines[currentTimelineIndex].title}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={clsx(styles.timelineSegmentsList, 'visible-mobile')}>
        {timelines.map((_, index) => (
          <div
            key={index}
            onClick={() => onChange(index)}
            className={clsx(styles.timelineSegmentsItem, {
              [styles.active]: currentTimelineIndex === index,
            })}
          />
        ))}
      </div>
    </div>
  );
};

import clsx from 'clsx';
import { FC, useRef } from 'react';

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
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

  return (
    <div className={clsx(styles.timelineSegments, className)}>
      <div className={styles.timelineSegmentsCircle}>
        {timelines.map((_, index) => {
          const initialAngle = 30 + (360 / timelines.length) * index;
          const initialRad = (initialAngle * Math.PI) / 180;
          const initialX = 265 * Math.sin(initialRad);
          const initialY = -265 * Math.cos(initialRad);

          return (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              onClick={() => onChange(index)}
              className={clsx(styles.timelineSegmentsCircleItem, {
                [styles.active]: currentTimelineIndex === index,
              })}
              style={{
                position: 'absolute',
                left: `calc(50% + ${initialX}px)`,
                top: `calc(50% + ${initialY}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className={styles.point}>{index + 1}</div>
            </div>
          );
        })}
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

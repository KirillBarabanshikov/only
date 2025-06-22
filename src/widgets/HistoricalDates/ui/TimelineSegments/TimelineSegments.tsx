import clsx from 'clsx';
import { FC } from 'react';

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
  return (
    <div className={clsx(styles.timelineSegments, className)}>
      <svg
        width='536'
        height='530'
        viewBox='0 0 536 530'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={'hidden-mobile'}
      >
        <circle opacity='0.2' cx='268' cy='265' r='264.5' stroke='#42567A' />
        <circle cx='533' cy='265' r='3' fill='#42567A' />
        <circle cx='138' cy='34' r='3' fill='#42567A' />
        <circle cx='402' cy='492' r='3' fill='#42567A' />
        <circle cx='126' cy='489' r='3' fill='#42567A' />
        <circle cx='3' cy='265' r='3' fill='#42567A' />
      </svg>
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

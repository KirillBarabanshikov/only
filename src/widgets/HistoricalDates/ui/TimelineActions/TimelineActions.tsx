import clsx from 'clsx';
import { FC } from 'react';

import ArrowLeft from '@/shared/assets/icons/arrow-left.svg';
import ArrowRight from '@/shared/assets/icons/arrow-right.svg';

import styles from './TimelineActions.module.scss';

interface ITimelineActionsProps {
  timelineCount: number;
  currentTimelineIndex: number;
  onChange: (index: number) => void;
  className?: string;
}

export const TimelineActions: FC<ITimelineActionsProps> = ({
  timelineCount,
  currentTimelineIndex,
  onChange,
  className,
}) => {
  return (
    <div className={clsx(styles.timelineActions, className)}>
      <div className={styles.count}>
        0{currentTimelineIndex + 1}/0{timelineCount}
      </div>
      <div className={styles.buttons}>
        <button
          disabled={currentTimelineIndex <= 0}
          onClick={() => onChange(currentTimelineIndex - 1)}
          className={styles.button}
        >
          <ArrowLeft />
        </button>
        <button
          disabled={currentTimelineIndex >= timelineCount - 1}
          onClick={() => onChange(currentTimelineIndex + 1)}
          className={styles.button}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

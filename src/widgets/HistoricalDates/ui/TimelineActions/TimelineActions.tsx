import clsx from 'clsx';
import { FC } from 'react';

import ArrowLeft from '@/shared/assets/icons/arrow-left.svg';
import ArrowRight from '@/shared/assets/icons/arrow-right.svg';

import styles from './TimelineActions.module.scss';

interface ITimelineActionsProps {
  className?: string;
}

export const TimelineActions: FC<ITimelineActionsProps> = ({ className }) => {
  return (
    <div className={clsx(styles.timelineActions, className)}>
      <div className={styles.count}>06/06</div>
      <div className={styles.buttons}>
        <button className={styles.button}>
          <ArrowLeft />
        </button>
        <button className={styles.button} disabled>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

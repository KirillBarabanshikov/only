import clsx from 'clsx';

import styles from './HistoricalDates.module.scss';
import {
  EventsSlider,
  Timeline,
  TimelineActions,
  TimelineSegments,
} from './ui';

export const HistoricalDates = () => {
  return (
    <div className={styles.historicalDates}>
      <h1 className={styles.historicalDatesTitle}>
        Исторические
        <br />
        даты
      </h1>
      <div className={styles.historicalDatesBody}>
        <Timeline />
        <TimelineSegments className={'hidden-mobile'} />
        <TimelineActions className={'hidden-mobile'} />
      </div>
      <EventsSlider className={styles.events} />
      <div className={clsx(styles.footer, 'visible-mobile')}>
        <TimelineActions />
        <TimelineSegments />
      </div>
    </div>
  );
};

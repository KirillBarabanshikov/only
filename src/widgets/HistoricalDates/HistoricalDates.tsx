import clsx from 'clsx';
import { useState } from 'react';

import { ALL_TIMELINES } from '@/shared/consts';

import styles from './HistoricalDates.module.scss';
import {
  EventsSlider,
  Timeline,
  TimelineActions,
  TimelineSegments,
} from './ui';

export const HistoricalDates = () => {
  const [currentTimelineIndex, setCurrentTimelineIndex] = useState<number>(0);
  const currentTimeline = ALL_TIMELINES[currentTimelineIndex];

  const handleChangeTimeline = (index: number) => {
    setCurrentTimelineIndex(index);
  };

  return (
    <div className={styles.historicalDates}>
      <h1 className={styles.historicalDatesTitle}>
        Исторические
        <br />
        даты
      </h1>
      <div className={styles.historicalDatesBody}>
        <Timeline start={currentTimeline.start} end={currentTimeline.end} />
        <TimelineSegments
          timelines={ALL_TIMELINES}
          currentTimelineIndex={currentTimelineIndex}
          onChange={handleChangeTimeline}
          className={'hidden-mobile'}
        />
        <TimelineActions
          timelineCount={ALL_TIMELINES.length}
          currentTimelineIndex={currentTimelineIndex}
          onChange={handleChangeTimeline}
          className={'hidden-mobile'}
        />
      </div>
      <EventsSlider
        currentTimeline={currentTimeline}
        className={styles.events}
      />
      <div className={clsx(styles.footer, 'visible-mobile')}>
        <TimelineActions
          timelineCount={ALL_TIMELINES.length}
          currentTimelineIndex={currentTimelineIndex}
          onChange={handleChangeTimeline}
        />
        <TimelineSegments
          timelines={ALL_TIMELINES}
          currentTimelineIndex={currentTimelineIndex}
          onChange={handleChangeTimeline}
        />
      </div>
    </div>
  );
};

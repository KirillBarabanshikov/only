export interface ITimeline {
  title: string;
  start: number;
  end: number;
  events: IEvent[];
}

export interface IEvent {
  title: string;
  description: string;
}

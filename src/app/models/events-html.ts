import { Events } from './events';

export class EventsHtml extends Events {
  top: string;
  height: string;
  htmlClass: string;
  color: string;

  constructor(
    title: string,
    description: string,
    date: string,
    startTime: string,
    endTime: string,
    top: string,
    height: string,
    htmlClass: string,
    color: string
  ) {
    super(title, description, date, startTime, endTime);
    this.top = top;
    this.height = height;
    this.htmlClass = htmlClass;
    this.color = color;
  }

  setClass(className: string) {
    this.htmlClass = className;
  }
}
export class Events {
    title: string;
    description: string;
    date: string;
    startTime: string;
    endTime: string;
  
    constructor(
      title: string,
      description: string,
      date: string,
      startTime: string,
      endTime: string
    ) {
      this.title = title;
      this.description = description;
      this.date = date;
      this.startTime = startTime;
      this.endTime = endTime;
    }
  }
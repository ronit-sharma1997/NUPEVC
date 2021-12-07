import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EventsHtml } from 'src/app/models/events-html';
import { MessageService } from 'src/app/services/message.service';
import { Events } from '../../../../models/events';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss'],
})
export class EventsPageComponent implements OnInit {
  colors: string[];
  events: Events[];
  eventDayMap: Map<number, EventsHtml[]>;
  currentEvent: EventsHtml;
  modalClass: string;
  modalClicked: boolean;
  @ViewChild('myIdentifier')
  myIdentifier: ElementRef;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.sendMessage('/events')
    this.colors = ['#841010', '#1b2e54', '#bd5353', '#f0c0c0'];
    this.modalClicked = false;

    this.eventDayMap = new Map();
    this.eventDayMap.set(0, []);
    this.eventDayMap.set(1, []);
    this.eventDayMap.set(2, []);
    this.eventDayMap.set(3, []);
    this.eventDayMap.set(4, []);
    this.eventDayMap.set(5, []);
    this.eventDayMap.set(6, []);

    this.events = [
      {
        title: 'Casa Verde Meet Up',
        description:
          'Abs Circuit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?',
        date: '09/27/2021',
        startTime: '02:00 PM',
        endTime: '04:00 PM',
      },
      {
        title: 'Education Meeting',
        description:
          'Abs Circuit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?',
        date: '09/27/2021',
        startTime: '04:00 PM',
        endTime: '06:00 PM',
      },
      {
        title: 'Education Meeting',
        description:
          'Abs Circuit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?',
        date: '09/27/2021',
        startTime: '06:15 PM',
        endTime: '06:45 PM',
      },
      {
        title: 'Education Meeting',
        description:
          'Abs Circuit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?',
        date: '09/27/2021',
        startTime: '07:00 PM',
        endTime: '09:30 PM',
      },
      {
        title: 'Education Meeting',
        description:
          'Abs Circuit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?',
        date: '09/28/2021',
        startTime: '02:00 PM',
        endTime: '09:30 PM',
      },
      {
        title: 'Education Meeting',
        description:
          'Abs Circuit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?',
        date: '09/29/2021',
        startTime: '02:00 PM',
        endTime: '03:00 PM',
      },
    ];

    this.modalClass = 'cd-schedule-modal';

    const calendarMillisecondRange = 27000000;
    const percentPerMilli = 100 / calendarMillisecondRange;

    this.events.forEach((event) => {
      const calendarStartTime = new Date(event.date + ' 02:00 PM');
      const startTime = new Date(event.date + ' ' + event.startTime);
      const endTime = new Date(event.date + ' ' + event.endTime);
      if (!this.eventDayMap.has(startTime.getDay())) {
        this.eventDayMap.set(startTime.getDay(), []);
      }
      const eventArray = this.eventDayMap.get(startTime.getDay()) || [];
      eventArray.push(
        new EventsHtml(
          event.title,
          event.description,
          event.date,
          event.startTime,
          event.endTime,
          (startTime.getTime() - calendarStartTime.getTime()) *
            percentPerMilli +
            '%',
          (endTime.getTime() - startTime.getTime()) * percentPerMilli + '%',
          'cd-schedule__event',
          this.colors[Math.floor(Math.random() * this.colors.length)]
        )
      );
      this.eventDayMap.set(startTime.getDay(), eventArray);
    });
  }

  eventClicked(event: EventsHtml) {
    event.setClass('cd-schedule__event no-visibility');
    this.modalClass =
      'cd-schedule-modal cd-schedule-modal--open cd-schedule-modal--content-loaded cd-schedule-modal--animation-completed open-position';
    this.modalClicked = true;
    this.currentEvent = event;
  }

  buttonClicked() {
    this.currentEvent.setClass('cd-schedule-modal close-position');
    this.modalClass = 'cd-schedule-modal close-position';
    this.currentEvent.setClass('cd-schedule__event');
    this.modalClicked = false;
  }
}
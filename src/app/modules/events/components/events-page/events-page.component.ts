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
  eventsToDisplay: Events[];
  eventDayMap: Map<number, EventsHtml[]>;
  currentEvent: EventsHtml;
  modalClass: string;
  modalClicked: boolean;
  @ViewChild('myIdentifier')
  myIdentifier: ElementRef;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    const currentDate = new Date()
    const first = currentDate.getDate() - currentDate.getDay()

    const beginningDate = new Date(currentDate.setDate(first))
    const endingDate = new Date(currentDate.setDate(first + 6))

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
        title: 'Securing the Bag Workshop',
        description:
          'Partnering with TAMID and FIC, this is an interactive workshop event that goes over how to secure co-ops, summer internsips and full time offers. Older students/members of the participating clubs will lead the session and talk about their work/co-op experiences, share networking/interviewing tips & techniques, and answer questions that attendees may have. Depending on how many people attend, we\'ll be splitting into smaller groups to foster more personalized conversations.',
        date: '02/22/2022',
        startTime: '06:00 PM',
        endTime: '07:00 PM',
      },
      {
        title: 'Excel Workshop Series Part 1',
        description:
          'Part 1 of a 3 part high-level excel workshop series that covers some form of modeling relating to PE/VC (Ex. LBO, DCF, Valuations, etc.). This session will provide context for the skills that attendees are going to be learning in the series and understand the purpose/significance of different excel models in PE/VC.',
        date: '02/27/2022',
        startTime: '06:00 PM',
        endTime: '07:00 PM',
      },
      {
        title: 'Executive Speaker(s) (Recruitment)',
        description:
          'This is a moderated Q&A session with recruiters from the PE/VC space. The session will cover the following: Technical skills & soft skills that they look for in candidates, What makes a candidate stand out, Things to avoid during the application/recruitment process, Levels of experience in certain areas that they like to see candidates actively demonstrating/in the candidate\'s resume, advice on how to reach out to recruiters (standing out vs. being too pushy), and biggest & most common mistakes that they see as a recruiter',
        date: '03/01/2022',
        startTime: '06:00 PM',
        endTime: '07:00 PM',
      },
      {
        title: 'Excel Workshop Series Part 2',
        description:
          'Part 2 of a 3 part high-level excel workshop series that covers some form of modeling relating to PE/VC (Ex. LBO, DCF, Valuations, etc.). This session will provide guided practice for PE-Related modeling skills (LBO,DCF,etc.)',
        date: '03/06/2022',
        startTime: '06:00 PM',
        endTime: '07:00 PM',
      },
      {
        title: 'VC & The Blockchain Speaker Event',
        description:
          'Partnering with NEU Blockchain or Disrupt, this is a moderated Q&A session with speakers from the VC + Crytpton/Blockchain space. The session will cover the following: how these individuals got into this space',
        date: '03/08/2022',
        startTime: '06:00 PM',
        endTime: '07:00 PM',
      },
      {
        title: 'Excel Workshop Series Part 3',
        description:
          'Part 3 of a 3 part high-level excel workshop series that covers some form of modeling relating to PE/VC (Ex. LBO, DCF, Valuations, etc.). This session will provide guided practice for VC-Related modeling skills (Cap Tables, Valuation, Waterfalls, etc.)',
        date: '03/13/2022',
        startTime: '06:00 PM',
        endTime: '07:00 PM',
      },
      {
        title: 'PE/VC in China Speaker Event',
        description:
          'Partnering with CMC, this is a moderated Q&A sessino with a speaker who has a background in the PE/VC space in China. Session will cover the following: How they got into the PE/VC space, their greatest successes & difficulties, their observations in terms of comparisons of similarities & differences between the U.S. & China, and where they see China positioning themselves in the PE/VC space looking into the future (considering how quickly their economy is growing)',
        date: '03/15/2022',
        startTime: '07:00 PM',
        endTime: '08:00 PM',
      },
      {
        title: 'Executive Speaker (Leadership in the Workplace)',
        description:
          'Partnering with HAN, this is a moderated Q&A session with speaker(S) from the PE/VC space. The session will cover the following: technical skills & soft skills that they look for in candidates, what makes a candidate stand out, things to aviod during the application/recruitment process, levels of experience in certain areas that they like to see candidates actively demonstrating/in the candidate\'s resume, advice on how to reach out to recruiters (standing out vs. being too pushy), and biggest & most common mistakes that they see as a recruiter',
        date: '03/22/2022',
        startTime: '06:00 PM',
        endTime: '07:00 PM',
      },
      {
        title: 'Impactful PE/VC Speaker Event',
        description:
          'Partnering with NU Impact, this is a moderated Q&A session with speaker(S) from the PE/VC space with a specific focus on ESG. The session will cover the following: overview of what they do/their background, how did they get into ESG-focused PE/VC, when did they/their firm first start seeing ESG taking hold in the PE/VC space? What changes and adaptations did this cause compared to the traditional model? What does "doing good" / "making and impact" mean to their firm? Why and how do they focus on it?',
        date: '03/29/2022',
        startTime: '06:00 PM',
        endTime: '07:00 PM',
      },
      {
        title: 'Executive Speaker (Startup/Founders Event)',
        description:
          'Partnering with IDEA, this is a moderated Q&A session with startups. The session will cover the following: How did they start their business? What difficulties they had to overcome? What were the key drivers in their success? What is the biggest piece of advice they would give? Biggest mistakes that they made in the process',
        date: '04/05/2022',
        startTime: '06:00 PM',
        endTime: '07:00 PM',
      },
      {
        title: 'PE/VC Year End Social',
        description:
          'This is a end of year wrap-up social & networking event. This provides an opportunity for PE/VC members to socialize and celebrate the end of the year, as well as an opportunity to show off all of the research, events, etc. that we did this year and get new people interested in being a part of what we do at NUPEVC. Event will have the following: short welcome and overview of everything the club accomplished this year, food and beverage, and a space setup that facilitates socialization/networking',
        date: '04/05/2022',
        startTime: '06:00 PM',
        endTime: '07:00 PM',
      }
    ];

    this.eventsToDisplay = this.events.filter((event: Events) => {
        const convertedDate = new Date(event.date)
        return beginningDate <= convertedDate && convertedDate <= endingDate 
    })

    this.modalClass = 'cd-schedule-modal';

    const calendarMillisecondRange = 27000000;
    const percentPerMilli = 100 / calendarMillisecondRange;

    this.eventsToDisplay.forEach((event) => {
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
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { MessageService } from 'src/app/services/message.service';
import { NewsLetter } from '../../../../models/newsletter';

function search(newsLetters: NewsLetter[], semester: string): NewsLetter[] {
  return semester === 'all'
    ? newsLetters
    : newsLetters.filter((newsLetter) => {
        return newsLetter.semester === semester;
      });
}

@Component({
  selector: 'app-newsletter-page',
  templateUrl: './newsletter-page.component.html',
  styleUrls: ['./newsletter-page.component.scss'],
})
export class NewsletterPageComponent implements OnInit {
  newsLetters: NewsLetter[];
  filteredNewsLetters: NewsLetter[];
  filter = new FormControl('');
  semester: string;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.sendMessage('/newsletter')
    this.semester = 'all';
    this.newsLetters = [
      {
        volume: 9,
        date: 'December 4th, 2020',
        src: 'assets/12.04.2020.pdf',
        semester: 'Fall 2020',
      },
      {
        volume: 8,
        date: 'November 20th, 2020',
        src: 'assets/11.20.2020.pdf',
        semester: 'Fall 2020',
      },
      {
        volume: 7,
        date: 'November 6th, 2020',
        src: 'assets/11.06.2020.pdf',
        semester: 'Fall 2020',
      },
      {
        volume: 20,
        date: 'April 9th, 2021',
        src: 'assets/4.9.2021.pdf',
        semester: 'Spring 2021',
      },
      {
        volume: 19,
        date: 'April 2nd, 2021',
        src: 'assets/4.2.2021.pdf',
        semester: 'Spring 2021',
      },
      {
        volume: 18,
        date: 'March 26th, 2021',
        src: 'assets/3.26.2021.pdf',
        semester: 'Spring 2021',
      },
      {
        volume: 17,
        date: 'March 19th, 2021',
        src: 'assets/3.19.2021.pdf',
        semester: 'Spring 2021',
      },
      {
        volume: 16,
        date: 'March 12th, 2021',
        src: 'assets/3.12.2021.pdf',
        semester: 'Spring 2021',
      },
    ];
    this.newsLetters.sort(
      (newsLetter1: NewsLetter, newsLetter2: NewsLetter) =>
        newsLetter2.volume - newsLetter1.volume
    );
    this.filteredNewsLetters = this.newsLetters;

    console.log(this.filteredNewsLetters);

    this.filter.valueChanges
      .pipe(map((semester) => search(this.newsLetters, semester)))
      .subscribe((newsLetters) => {
        this.filteredNewsLetters = newsLetters;
      });
  }
}
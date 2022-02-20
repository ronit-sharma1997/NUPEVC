import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs/operators';
import { AWSService } from 'src/app/services/aws.service';
import { NewsLetter } from '../../../models/newsletter';

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
  faCircleNotch=faCircleNotch
  newsLetters: NewsLetter[];
  filteredNewsLetters: NewsLetter[];
  errorMessage: string;
  filter = new FormControl('');
  semester: string;
  isLoading: boolean;

  constructor(private awsService: AWSService) {}

  ngOnInit(): void {
    this.semester = 'all';
    this.isLoading = true;
    this.errorMessage = '';
    this.awsService.getNewsletters().subscribe({next: (newsletters: NewsLetter[]) => {
      this.newsLetters = newsletters

      this.newsLetters.sort(
        (newsLetter1: NewsLetter, newsLetter2: NewsLetter) =>
          newsLetter2.volume - newsLetter1.volume
      );
      this.filteredNewsLetters = this.newsLetters;
  
      this.filter.valueChanges
        .pipe(map((semester) => search(this.newsLetters, semester)))
        .subscribe((newsLetters) => {
          this.filteredNewsLetters = newsLetters;
        });
      this.isLoading = false
    }, error: (error:Error) => {
      this.isLoading = false
      this.errorMessage = error.message
    }})
  }

  navigateToUrl(url:string): void {
    window.open(url, '_blank')
  }
}
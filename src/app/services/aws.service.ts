import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NewsLetter } from '../models/newsletter';
import { ContactUs } from '../models/contact-us';
import { catchError, Observable, throwError } from 'rxjs';
import { Subscribe } from '../models/subscribe';
import { ApplyForm } from '../models/apply-form';

@Injectable({ providedIn: 'root' })
export class AWSService {
    constructor(private http: HttpClient) { }
    
    getNewsletters():Observable<NewsLetter[]> {
        // get all the newsletters for PEVC
        return this.http.get<NewsLetter[]>('https://jlr1hjmbo4.execute-api.us-east-2.amazonaws.com/dev/newsletter').pipe(catchError(this.errorHandler))
    }

    sendMessage(formValues: ContactUs):Observable<any> {
        return this.http.post<ContactUs>('https://jlr1hjmbo4.execute-api.us-east-2.amazonaws.com/dev/contact-us', formValues).pipe(catchError(this.errorHandler))
    }

    subscribe(email: string):Observable<any> {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(emailRegex.test(email)) {
            return this.http.post<Subscribe>('https://jlr1hjmbo4.execute-api.us-east-2.amazonaws.com/dev/subscribe', {"email": email}).pipe(catchError(this.errorHandler))
        }
        return throwError(() => new Error('Please enter a valid email address!'))
    }

    apply(applicationForm: ApplyForm): Observable<any> {
        return this.http.post<ContactUs>('https://jlr1hjmbo4.execute-api.us-east-2.amazonaws.com/dev/apply', applicationForm).pipe(catchError(this.errorHandler))
    }

    errorHandler(error: HttpErrorResponse): Observable<never> {
        return throwError(() => new Error('Something bad happened; please try again later.'))
    }
}
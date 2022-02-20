import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class InstagramService {
    constructor(private http: HttpClient) { }
    
    async getLatestContent():Promise<Response> {
        // get the last 12 posts for the NU PEVC Instagram Account
        return fetch('https://nupevc-instagram-service.herokuapp.com/instagram').then(response => response.json())
    }
}

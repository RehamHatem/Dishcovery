import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AskDishcoveryService {


   private apiUrl = '/api/ask-dishcovery'; // Uses Vercel API route

  constructor(private http: HttpClient) {}

  getAIResponse(prompt: string) {
    const body = { prompt };
    return this.http.post<any>(this.apiUrl, body);
  }
}
  // constructor(private http: HttpClient) {}

  // getAIResponse(prompt: string) {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${this.apiKey}`,
  //   });

  //   const body = {
  //     model: 'mistralai/mistral-7b-instruct',
  //     messages: [{ role: 'user', content: prompt }],
  //     max_tokens: 500
  //   };

  //   return this.http.post<any>(this.apiUrl, body, { headers });
  // }
// }

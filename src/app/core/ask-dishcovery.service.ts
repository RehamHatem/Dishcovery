import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AskDishcoveryService {

  // private apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
  // private apiKey='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';
  // private apiKey="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";
  // private apiKey = process.env['OPENROUTER_API_KEY'];
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

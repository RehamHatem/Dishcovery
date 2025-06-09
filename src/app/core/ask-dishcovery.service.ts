import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AskDishcoveryService {

  private apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
  // private apiKey='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';
  private apiKey=environment.openrouterApiKey;

  constructor(private http: HttpClient) {}

  getAIResponse(prompt: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = {
      model: 'mistralai/mistral-7b-instruct',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 500
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}

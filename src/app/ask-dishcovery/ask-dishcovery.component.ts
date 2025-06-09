import { Component } from '@angular/core';
import { AskDishcoveryService } from '../core/ask-dishcovery.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ask-dishcovery',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ask-dishcovery.component.html',
  styleUrl: './ask-dishcovery.component.css'
})
export class AskDishcoveryComponent {
   ingredients: string = '';
  notes: string = '';
  aiResponse: string = '';
  loading = false;

  constructor(private aiService: AskDishcoveryService) {}

  onSubmit() {
    if (!this.ingredients.trim()) return;

    const prompt = `I have the following ingredients: ${this.ingredients}.
${this.notes ? `Additional notes: ${this.notes}.` : ''}
What recipes can I make? Please respond with recipe name , from each country and the category  then step-by-step instructions then any sources you have.`;

    this.loading = true;
    this.aiResponse = '';

    this.aiService.getAIResponse(prompt).subscribe({
      next: (res: any) => {
        this.aiResponse = res.choices?.[0]?.message?.content;
        this.loading = false;
      },
      error: () => {
        this.aiResponse = 'An error occurred while retrieving suggestions.';
        this.loading = false;
      },
    });
  }


  

}

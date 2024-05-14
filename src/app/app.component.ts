import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EvaluationComponent } from './medical-form/evaluation/evaluation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EvaluationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'medical-form';
}

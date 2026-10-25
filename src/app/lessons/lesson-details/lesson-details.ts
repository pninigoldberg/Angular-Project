import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lesson-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson-details.html',
  styleUrl: './lesson-details.css'
})
export class LessonDetails {

  @Input() lesson: any;

}

import { Component } from '@angular/core';
import { LessonsService } from '../services/lessons.service';
import { CommonModule } from '@angular/common';
import { LessonDetails } from './lesson-details/lesson-details';
@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [CommonModule,LessonDetails],
  templateUrl: './lessons.html',
  styleUrl: './lessons.css'
})
export class Lessons {

  constructor(public lessonsService: LessonsService) {}

}
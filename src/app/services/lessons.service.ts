import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  lessons = [
  {
    name: 'Yoga Basic',
    teacher: 'Dana Levi',
    meetings: 10,
    startDate: '2026-01-10',
    price: 200,
    day: 'Sunday',
    hour: '10:00',
    started: true
  },
  {
    name: 'Pilates Beginner',
    teacher: 'Maya Cohen',
    meetings: 12,
    startDate: '2026-02-01',
    price: 250,
    day: 'Monday',
    hour: '09:00',
    started: false
  },
  {
    name: 'Advanced Yoga',
    teacher: 'Noa Bar',
    meetings: 8,
    startDate: '2026-03-05',
    price: 300,
    day: 'Tuesday',
    hour: '11:00',
    started: false
  },
  {
    name: 'Stretching',
    teacher: 'Shira Tal',
    meetings: 6,
    startDate: '2026-01-15',
    price: 150,
    day: 'Wednesday',
    hour: '08:30',
    started: true
  },
  {
    name: 'Dance Fitness',
    teacher: 'Roni Azulay',
    meetings: 10,
    startDate: '2026-02-10',
    price: 220,
    day: 'Thursday',
    hour: '19:00',
    started: false
  },
  {
    name: 'Core Strength',
    teacher: 'Hila Peretz',
    meetings: 9,
    startDate: '2026-01-20',
    price: 240,
    day: 'Friday',
    hour: '07:30',
    started: true
  },
  {
    name: 'Power Yoga',
    teacher: 'Dana Levi',
    meetings: 11,
    startDate: '2026-03-01',
    price: 280,
    day: 'Sunday',
    hour: '18:00',
    started: false
  },
  {
    name: 'Rehab Training',
    teacher: 'Yael Stein',
    meetings: 14,
    startDate: '2026-01-25',
    price: 350,
    day: 'Monday',
    hour: '17:00',
    started: true
  },
  {
    name: 'Flexibility Flow',
    teacher: 'Maya Cohen',
    meetings: 7,
    startDate: '2026-02-15',
    price: 180,
    day: 'Tuesday',
    hour: '10:30',
    started: false
  },
  {
    name: 'Morning Pilates',
    teacher: 'Noa Bar',
    meetings: 10,
    startDate: '2026-01-05',
    price: 260,
    day: 'Wednesday',
    hour: '07:00',
    started: true
  },
  {
    name: 'Cardio Burn',
    teacher: 'Shira Tal',
    meetings: 12,
    startDate: '2026-02-20',
    price: 230,
    day: 'Thursday',
    hour: '18:30',
    started: false
  },
  {
    name: 'Body Balance',
    teacher: 'Roni Azulay',
    meetings: 8,
    startDate: '2026-03-10',
    price: 210,
    day: 'Friday',
    hour: '09:30',
    started: false
  },
  {
    name: 'Deep Stretch',
    teacher: 'Hila Peretz',
    meetings: 6,
    startDate: '2026-01-12',
    price: 160,
    day: 'Sunday',
    hour: '20:00',
    started: true
  },
  {
    name: 'Strength Training',
    teacher: 'Yael Stein',
    meetings: 15,
    startDate: '2026-02-28',
    price: 400,
    day: 'Monday',
    hour: '19:30',
    started: false
  },
  {
    name: 'Relax Yoga',
    teacher: 'Dana Levi',
    meetings: 5,
    startDate: '2026-01-18',
    price: 140,
    day: 'Tuesday',
    hour: '21:00',
    started: true
  }
];
}
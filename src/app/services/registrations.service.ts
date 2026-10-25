import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationsService {

  registrations = [
  {
    firstName: 'Yossi',
    lastName: 'Cohen',
    phone: '0500000001',
    id: '200000001',
    lesson: 'Yoga Basic',
    price: 200,
    paid: true
  },
  {
    firstName: 'Ayelet',
    lastName: 'Levi',
    phone: '0500000002',
    id: '200000002',
    lesson: 'Pilates Beginner',
    price: 250,
    paid: false
  },
  {
    firstName: 'Moshe',
    lastName: 'Mizrahi',
    phone: '0500000003',
    id: '200000003',
    lesson: 'Advanced Yoga',
    price: 300,
    paid: true
  },
  {
    firstName: 'Sarah',
    lastName: 'Peretz',
    phone: '0500000004',
    id: '200000004',
    lesson: 'Stretching',
    price: 150,
    paid: true
  },
  {
    firstName: 'David',
    lastName: 'Azulay',
    phone: '0500000005',
    id: '200000005',
    lesson: 'Dance Fitness',
    price: 220,
    paid: false
  },
  {
    firstName: 'Rachel',
    lastName: 'Cohen',
    phone: '0500000006',
    id: '200000006',
    lesson: 'Core Strength',
    price: 240,
    paid: true
  },
  {
    firstName: 'Yehuda',
    lastName: 'Stein',
    phone: '0500000007',
    id: '200000007',
    lesson: 'Rehab Training',
    price: 350,
    paid: false
  },
  {
    firstName: 'Miriam',
    lastName: 'Levy',
    phone: '0500000008',
    id: '200000008',
    lesson: 'Power Yoga',
    price: 280,
    paid: true
  },
  {
    firstName: 'Chaya',
    lastName: 'Bar',
    phone: '0500000009',
    id: '200000009',
    lesson: 'Flexibility Flow',
    price: 180,
    paid: true
  },
  {
    firstName: 'Shimon',
    lastName: 'Goldberg',
    phone: '0500000010',
    id: '200000010',
    lesson: 'Morning Pilates',
    price: 260,
    paid: false
  },
  {
    firstName: 'Esther',
    lastName: 'Haddad',
    phone: '0500000011',
    id: '200000011',
    lesson: 'Cardio Burn',
    price: 230,
    paid: true
  },
  {
    firstName: 'Avraham',
    lastName: 'Dayan',
    phone: '0500000012',
    id: '200000012',
    lesson: 'Body Balance',
    price: 210,
    paid: false
  },
  {
    firstName: 'Tamar',
    lastName: 'Malka',
    phone: '0500000013',
    id: '200000013',
    lesson: 'Deep Stretch',
    price: 160,
    paid: true
  },
  {
    firstName: 'Elchanan',
    lastName: 'Harel',
    phone: '0500000014',
    id: '200000014',
    lesson: 'Strength Training',
    price: 400,
    paid: false
  },
  {
    firstName: 'Batsheva',
    lastName: 'Katz',
    phone: '0500000015',
    id: '200000015',
    lesson: 'Relax Yoga',
    price: 140,
    paid: true
  }
];}
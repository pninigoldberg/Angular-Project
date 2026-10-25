import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { RegistrationsService } from '../services/registrations.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-registrations',
  standalone: true,
  imports: [CommonModule, AgGridAngular,FormsModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule],
  templateUrl: './registrations.html',
  styleUrl: './registrations.css'
})
export class Registrations implements OnInit {

  rowData: any[] = [];
  selectedRegistration: any = null;

  constructor(public registrationsService: RegistrationsService) {}

  defaultColDef = {
    sortable: true,
    resizable: true
  };

  columnDefs = [
    { field: 'firstName', headerName: 'שם' },
    { field: 'lastName', headerName: 'משפחה' },
    { field: 'phone', headerName: 'טלפון' },
    { field: 'id', headerName: 'ת"ז' },
    { field: 'lesson', headerName: 'שיעור' },
    { field: 'price', headerName: 'מחיר' },
    {
      field: 'paid',
      headerName: 'שולם',
      cellRenderer: (params: any) => {
        return params.value ? '✔ כן' : '❌ לא';
      }
    },
    {
      headerName: 'פרטים',
      sortable: false,
      cellRenderer: () => 'פתח פרטים'
    }
  ];

  ngOnInit() {
    this.rowData = [...this.registrationsService.registrations];
  }

  onCellClicked(event: any) {
    if (event.colDef.headerName === 'פרטים') {
      this.openDetails(event.data);
    }
  }

  openDetails(data: any) {
    console.log('clicked:', data);
    this.selectedRegistration = data;
  }


  filterText: string = '';
selectedLesson: string = '';
paidFilter: string = '';


get filteredData() {
  return this.rowData.filter(r => {

    const matchText =
      !this.filterText ||
      r.firstName.toLowerCase().includes(this.filterText.toLowerCase()) ||
      r.lastName.toLowerCase().includes(this.filterText.toLowerCase());

    const matchLesson =
      !this.selectedLesson || r.lesson === this.selectedLesson;

    const matchPaid =
      this.paidFilter === '' ||
      (this.paidFilter === 'paid' && r.paid) ||
      (this.paidFilter === 'unpaid' && !r.paid);

    return matchText && matchLesson && matchPaid;
  });
}

get uniqueLessonsCount() {
  return new Set(this.filteredData.map(item => item.lesson)).size;
}

successMessage: string = '';
isAddOpen = false;

newReg = {
  firstName: '',
  lastName: '',
  phone: '',
  id: '',
  lesson: '',
  price: 0,
  paid: false
};


openAdd() {
  this.isAddOpen = true;
}

closeAdd() {
  this.isAddOpen = false;
}

addRegistration() {
  this.registrationsService.registrations.push({ ...this.newReg });

  this.rowData = [...this.registrationsService.registrations];

this.successMessage = 'נרשמת נוספה בהצלחה';

  this.closeAdd();

  this.newReg = {
    firstName: '',
    lastName: '',
    phone: '',
    id: '',
    lesson: '',
    price: 0,
    paid: false
  };
  setTimeout(() => {
    this.successMessage = '';
  }, 3000);
}
}
import { Component } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
   standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  login() {
    const username = this.loginForm.value.username || '';
    const password = this.loginForm.value.password || '';

    const user = this.usersService.users.find(u =>
      u.username === username &&
      u.password === password
    );

    if (user) {
      if (user.role === 'teacher') {
        this.router.navigate(['/lessons']);
      }

      if (user.role === 'secretary') {
        this.router.navigate(['/registrations']);
      }
    } else {
      alert('שם משתמש או סיסמה שגויים');
    }
  }
}
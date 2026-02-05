import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { MovieService } from 'src/services/movie.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
ShowUserProfileMenu() {
throw new Error('Method not implemented.');
}
  users: any[] = [];
  exclusive: boolean = false;
  showMenu = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private movieService: MovieService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.movieService.exclusive.subscribe((res: any) => {
      this.exclusive = res;
    });
  }

  getUsers() {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        console.log(this.users);
      },
      error: (error) => {
        console.error('Error fetching users', error);
      }
    });
  }

  logOut() {
    this.authService.logout();
  }

  contact() {
    this.router.navigate(['contact']);
  }

  goToDashboard() {
    this.router.navigate(['']);
  }

  showUserProfileMenu() {
    this.showMenu = true;
  }
}

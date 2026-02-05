import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: MovieService
  ) { }

  ngOnInit(): void {
    this.userService.exclusive.next(true);
    console.log(this.userService.exclusive.next(true));

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }


  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Here you can add logic to send the form data to a service or API
    } else {
      console.log('Form is invalid');
    }
  }


}

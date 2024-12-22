import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  http = inject(HttpClient)
  title = 'client';
  users:any;

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/users').subscribe({
      next: (response) => this.users = response,
      error: (error) => console.error(error),
      complete: () => console.log('Request has completed')
    })
  }
}
 
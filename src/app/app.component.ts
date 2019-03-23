import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService, private swUpdate: SwUpdate) {
  }

  get isLogged(): boolean {
    return this.auth.me.isLogged;
  }

  ngOnInit(): void {
    this.swUpdate.available.subscribe(() => {
      window.location.reload();
    });
  }
}

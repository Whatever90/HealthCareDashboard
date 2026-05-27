import { Component, signal } from '@angular/core';
import { Body } from './body/body';
import { Header } from './header/header';

@Component({
  selector: 'root',
  imports: [Header, Body],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HealthCareDashboard');
}
